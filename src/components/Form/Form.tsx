import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import { Select } from "@/ui/Select/Select";
import Switch from "@/ui/Switch/Switch";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useAppointments } from "../../hooks/useAppointments";
import { useFaultTypes } from "../../hooks/useFaultType";
import { AppointmentPayload } from "../../types/appointments.type";
import { WrapperForm } from "./Form.style";

const initialFormData = {
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
  const [formData, setFormData] =
    useState<AppointmentPayload>(initialFormData);
  const [faultTypes, setFaultType] = useState([]);
  const { getFaultTypes } = useFaultTypes();
  const { createAppointment } = useAppointments();

  const fetchFaultTypes = async () => {
    try {
      const data = await getFaultTypes();
      const transformData = data.map((fault: any) => {
        return {
          value: fault.id,
          label: fault.name,
        };
      });

      setFaultType(transformData);
    } catch (error) {}
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(
      2,
      "0"
    );
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDate = (diagnosis_date: any) => {
    const diagnosisDateValue = diagnosis_date;
    let formattedDiagnosisDate = null;

    if (diagnosisDateValue) {
      const dateObject = new Date(diagnosisDateValue);
      if (!isNaN(dateObject.getTime())) {
        formattedDiagnosisDate = dateObject.toISOString();
      }
    }
    return formattedDiagnosisDate;
  };

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
            ...(typeof prev[parent] === "object" &&
            prev[parent] !== null
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      diagnosis_date: formatDate(formData.diagnosis_date),
      fault_type_id: Number(formData.fault_type_id),
    };

    createAppointment(formattedData);
  };

  useEffect(() => {
    fetchFaultTypes();
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
          />
          <Input
            label="Apellidos"
            placeholder="Agregar apellidos"
            name="customer.last_name"
            value={formData.customer.last_name}
            onChange={handleChange}
          />
          <Select
            label="Tipo de identificación"
            name="customer.document_type"
            value={formData.customer.document_type}
            onChange={handleChange}
            options={[
              {
                value: "CC",
                label: "Céldula de ciudadania",
              },
              {
                value: "CE",
                label: "Cédula de Extranjeria",
              },
              { value: "PA", label: "Pasaporte" },
              { value: "PEP", label: "PEP" },
            ]}
          />
          <Input
            label="Número de identificación"
            placeholder="Agregar número de identificación"
            name="customer.document_number"
            value={formData.customer.document_number}
            onChange={handleChange}
          />
          <Input
            label="Correo electrónico"
            placeholder="Agregar correo electrónico"
            name="customer.email"
            value={formData.customer.email}
            onChange={handleChange}
          />
          <Input
            label="Número de celular"
            placeholder="Agregar número de celular"
            name="customer.phone_number"
            value={formData.customer.phone_number}
            onChange={handleChange}
          />
          <p>Datos del vehículo</p>
          <Input
            label="Marca del vehículo"
            placeholder="Agregar marca"
            name="vehicle.make"
            value={formData.vehicle.make}
            onChange={handleChange}
          />
          <Input
            label="Modelo"
            placeholder="Agregar modelo"
            name="vehicle.model"
            value={formData.vehicle.model}
            onChange={handleChange}
          />
          <Input
            label="Placa"
            placeholder="Agregar placa"
            name="vehicle.license_plate"
            value={formData.vehicle.license_plate}
            onChange={handleChange}
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
          />
          <Input
            type="time"
            label="Hora del diagnóstico"
            placeholder="Seleccionar hora"
            name="diagnosis_time"
            value={formData.diagnosis_time}
            onChange={handleChange}
          />
          <Select
            label="Tipo de falla"
            name="fault_type_id"
            value={formData.fault_type_id}
            onChange={handleChange}
            options={faultTypes}
          />
          <div className="switch-wrapper">
            <Switch
              label="¿Solicito escaneo para mi vehículo?"
              checked={formData.request_scan}
              onChange={handleSwitchChange}
            />
          </div>
          <div></div>
          <Button
            size="extralarge"
            color="primary"
            type="submit"
          >
            <span>Agendar</span>
          </Button>
        </form>
      </div>
    </WrapperForm>
  );
};

export default Form;
