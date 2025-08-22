import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
  customer: yup.object().shape({
    first_name: yup.string().required("El nombre es obligatorio"),
    last_name: yup.string().required("El apellido es obligatorio"),
    document_type: yup.string().required("El tipo de documento es obligatorio"),
    document_number: yup
      .string()
      .required("El número de identificación es obligatorio")
      .matches(/^[0-9]+$/, "Debe contener solo números"),
    email: yup
      .string()
      .email("Debe ser un correo válido")
      .required("El correo es obligatorio"),
    phone_number: yup
      .string()
      .required("El número de celular es obligatorio")
      .matches(/^[0-9]+$/, "Debe contener solo números")
      .length(10, "El número de celular debe tener exactamente 10 dígitos"),
  }),
  vehicle: yup.object().shape({
    make: yup.string().required("La marca es obligatoria"),
    model: yup.string().required("El modelo es obligatorio"),
    license_plate: yup.string().required("La placa es obligatoria"),
  }),
  diagnosis_date: yup
    .date()
    .nullable()
    .transform((value, originalValue) => {
      return originalValue === "" ? null : value;
    })
    .typeError("Debe ser una fecha válida"),

  diagnosis_time: yup.string().required("La hora es obligatoria"),
  fault_type_id: yup.string().required("Debe seleccionar un tipo de falla"),
});

export const getBlockedHoursByDate = (appointments: any[]) => {
  const blocked: Record<string, string[]> = {};

  appointments.forEach((appt) => {
    const date = new Date(appt.diagnosis_date).toISOString().split("T")[0];

    const time = new Date(appt.diagnosis_time)
      .toISOString()
      .split("T")[1]
      .substring(0, 5);

    if (!blocked[date]) {
      blocked[date] = [];
    }
    blocked[date].push(time);
  });

  return blocked;
};
