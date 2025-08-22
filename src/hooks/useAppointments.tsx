import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://atod-back.onrender.com/appointments";

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
