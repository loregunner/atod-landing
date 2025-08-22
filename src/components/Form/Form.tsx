import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import { Select } from "@/ui/Select/Select";
import Switch from "@/ui/Switch/Switch";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  generateAvailableHours,
  useAppointments,
} from "../../hooks/useAppointments";
import { useFaultTypes } from "../../hooks/useFaultType";
import { AppointmentPayload } from "../../types/appointments.type";
import { WrapperForm } from "./Form.style";
import * as yup from "yup";
import { appointmentSchema, getBlockedHoursByDate } from "./Form.uitls";
import Popup from "@/ui/Popup/Popup";
import usePopup from "@/hooks/usePopup";

const initialFormData: AppointmentPayload = {
  diagnosis_date: "",
  diagnosis_time: "",
  fault_type_id: "",
  request_scan: false,
  vehicle: {
    make: "",
    model: "",
    license_plate: "",
  },
  customer: {
    first_name: "",
    last_name: "",
    document_type: "",
    document_number: "",
    email: "",
    phone_number: "",
  },
};

const Form = () => {
  const [formData, setFormData] = useState<AppointmentPayload>(initialFormData);
  const [faultTypes, setFaultType] = useState([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { getFaultTypes } = useFaultTypes();
  const { createAppointment, getAppointments } = useAppointments();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [popupOpen, setPopupOpen, togglePopup] = usePopup(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [blockedHours, setBlockedHours] = useState<Record<string, string[]>>(
    {}
  );
  const [availableHours, setAvailableHours] = useState<string[]>([]);

  const fetchFaultTypes = async () => {
    try {
      const data = await getFaultTypes();
      const transformData = data.map((fault: any) => ({
        value: fault.id,
        label: fault.name,
      }));
      setFaultType(transformData);
    } catch (error) {
      console.error("Error al obtener tipos de falla", error);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDateTime = (date: string, time: string) => {
    if (!date || !time) return null;
    const dateTimeString = `${date}T${time}:00`;
    const dateObject = new Date(dateTimeString);
    return isNaN(dateObject.getTime()) ? null : dateObject.toISOString();
  };

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
      setBlockedHours(getBlockedHoursByDate(data));
    } catch (error) {
      console.error("Error al obtener citas", error);
    }
  };

  useEffect(() => {
    if (!formData.diagnosis_date) return;

    const date = formData.diagnosis_date;
    const blockedForDate = blockedHours[date] || [];
    const allHours = generateAvailableHours();

    let freeHours = allHours.filter((hour) => !blockedForDate.includes(hour));

    const today = getTodayDate();
    if (date === today) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();

      freeHours = freeHours.filter((hour) => {
        const [h, m] = hour.split(":").map(Number);
        return h > currentHour || (h === currentHour && m > currentMinutes);
      });
    }

    setAvailableHours(freeHours);
  }, [formData.diagnosis_date, blockedHours]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");

    setFormData((prev: any) => {
      if (child) {
        return {
          ...prev,
          [parent]: {
            ...(typeof prev[parent] === "object" && prev[parent] !== null
              ? prev[parent]
              : {}),
            [child]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSwitchChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      request_scan: e.target.checked,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await appointmentSchema.validate(formData, { abortEarly: false });

      const formattedData = {
        ...formData,
        diagnosis_date: formatDateTime(
          formData.diagnosis_date,
          formData.diagnosis_time
        ),
        fault_type_id: Number(formData.fault_type_id),
      };

      const response = await createAppointment(formattedData);

      const [year, month, day] = response.diagnosis_date
        .split("T")[0]
        .split("-");

      const timeParts = response.diagnosis_time.split("T")[1].slice(0, 5); 

      setPopupMessage(
        `Tu agendamiento se realizó correctamente para el ${day}/${month}/${year} a las ${timeParts}.`
      );
      setPopupOpen(true);

      setFormData(initialFormData);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        err.inner.forEach((validationError) => {
          if (validationError.path) {
            newErrors[validationError.path] = validationError.message;
          }
        });
        setErrors(newErrors);
        setPopupMessage(
          "No se pudo procesar tu solicitud. Intenta nuevamente más tarde."
        );
        setPopupOpen(true);
      } else {
        setPopupMessage("Ocurrió un error al crear tu agendamiento.");
        setPopupOpen(true);
      }
    }
  };

  useEffect(() => {
    fetchFaultTypes();
    fetchAppointments();
  }, []);

  return (
    <WrapperForm>
      <div className="banner">
        <div className="banner-background"></div>
      </div>
      <div className="content-title">
        <hr className="hr-right" />
        <h2>Agendamiento</h2>
        <hr className="hr-left" />
      </div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <p>Datos personales</p>
          <Input
            label="Nombres"
            placeholder="Agrega nombre"
            name="customer.first_name"
            value={formData.customer.first_name}
            onChange={handleChange}
            error={errors["customer.first_name"]}
          />
          <Input
            label="Apellidos"
            placeholder="Agregar apellidos"
            name="customer.last_name"
            value={formData.customer.last_name}
            onChange={handleChange}
            error={errors["customer.last_name"]}
          />
          <Select
            label="Tipo de identificación"
            name="customer.document_type"
            value={formData.customer.document_type}
            onChange={handleChange}
            options={[
              { value: "CC", label: "Cédula de ciudadanía" },
              { value: "CE", label: "Cédula de extranjería" },
              { value: "PA", label: "Pasaporte" },
              { value: "PEP", label: "PEP" },
            ]}
            error={errors["customer.document_type"]}
          />
          <Input
            label="Número de identificación"
            placeholder="Agregar número de identificación"
            name="customer.document_number"
            value={formData.customer.document_number}
            onChange={handleChange}
            error={errors["customer.document_number"]}
          />
          <Input
            label="Correo electrónico"
            placeholder="Agregar correo electrónico"
            name="customer.email"
            value={formData.customer.email}
            onChange={handleChange}
            error={errors["customer.email"]}
          />
          <Input
            label="Número de celular"
            placeholder="Agregar número de celular"
            name="customer.phone_number"
            value={formData.customer.phone_number}
            onChange={handleChange}
            error={errors["customer.phone_number"]}
          />

          <p>Datos del vehículo</p>
          <Input
            label="Marca del vehículo"
            placeholder="Agregar marca"
            name="vehicle.make"
            value={formData.vehicle.make}
            onChange={handleChange}
            error={errors["vehicle.make"]}
          />
          <Input
            label="Modelo"
            placeholder="Agregar modelo"
            name="vehicle.model"
            value={formData.vehicle.model}
            onChange={handleChange}
            error={errors["vehicle.model"]}
          />
          <Input
            label="Placa"
            placeholder="Agregar placa"
            name="vehicle.license_plate"
            value={formData.vehicle.license_plate}
            onChange={handleChange}
            error={errors["vehicle.license_plate"]}
          />

          <p>Agendamiento</p>
          <Input
            type="date"
            label="Fecha de diagnóstico"
            placeholder="Seleccionar fecha"
            name="diagnosis_date"
            value={formData.diagnosis_date}
            onChange={handleChange}
            min={getTodayDate()}
            error={errors["diagnosis_date"]}
          />
          <Select
            label="Hora del diagnóstico"
            name="diagnosis_time"
            value={formData.diagnosis_time}
            onChange={handleChange}
            options={availableHours.map((h) => ({ value: h, label: h }))}
            error={errors["diagnosis_time"]}
          />

          <Select
            label="Tipo de falla"
            name="fault_type_id"
            value={formData.fault_type_id}
            onChange={handleChange}
            options={faultTypes}
            error={errors["fault_type_id"]}
          />

          <div className="switch-wrapper">
            <Switch
              label="¿Solicito escaneo para mi vehículo?"
              checked={formData.request_scan}
              onChange={handleSwitchChange}
            />
          </div>
          <div></div>
          <Button size="extralarge" color="primary" type="submit">
            <span>Agendar</span>
          </Button>
        </form>
      </div>

      <Popup
        title="Agendamiento enviado"
        isActive={popupOpen}
        handleClose={() => setPopupOpen(false)}
        message={popupMessage}
        accept={() => setPopupOpen(false)}
      />
    </WrapperForm>
  );
};

export default Form;
