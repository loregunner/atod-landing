export interface AppointmentPayload {
  diagnosis_date: string;
  diagnosis_time: string;
  fault_type_id: string;
  request_scan: boolean;
  vehicle: Vehicle;
  customer: Customer;
}

interface Vehicle {
  make: string;
  model: string;
  license_plate: string;
}

interface Customer {
  first_name: string;
  last_name: string;
  document_type: string;
  document_number: string;
  email: string;
  phone_number: string;
}
