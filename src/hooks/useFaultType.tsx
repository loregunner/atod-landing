import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://atod-back.onrender.com/fault-types";

export const useFaultTypes = () => {
  const getFaultTypes = async () => {
    try {
      const response = await axios.get(baseURL);

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const createFaultType = async (newFaultType: any) => {
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
    getFaultTypes,
    createFaultType,
  };
};
