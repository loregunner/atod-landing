import axios from "axios";

const baseURL =
  `${process.env.REACT_NEXT_PUBLIC_API_URL}/appointments`
export const useAppointments = () => {
  const getAppointments = async () => {
    try {
      const response = await axios.get(baseURL);

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const createAppointment = async (newFaultType: any) => {
    try {
      const response = await axios.post(
        baseURL,
        newFaultType
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  return {
    getAppointments,
    createAppointment,
  };
};

export const generateAvailableHours = (start = 8, end = 17) => {
  const hours: string[] = [];
  for (let h = start; h < end; h++) {
    for (let m of [0, 30]) {
      const hour = String(h).padStart(2, "0");
      const minute = String(m).padStart(2, "0");
      hours.push(`${hour}:${minute}`);
    }
  }
  return hours;
};
