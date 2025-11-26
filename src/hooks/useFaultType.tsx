import axios from "axios";

const FALLBACK_URL = "https://atod-back.onrender.com/fault-types";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL &&
  process.env.NEXT_PUBLIC_API_URL.trim() !== ""
    ? process.env.NEXT_PUBLIC_API_URL
    : FALLBACK_URL;

export const useFaultTypes = () => {
  const getFaultTypes = async () => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (err: any) {
      console.error("❌ Error en getFaultTypes:", err.message);
      return [];
    }
  };

  const createFaultType = async (newFaultType: any) => {
    try {
      const response = await axios.post(baseURL, newFaultType);
      return response.data;
    } catch (err: any) {
      console.error("❌ Error en createFaultType:", err.message);
      return null; 
    }
  };

  return {
    getFaultTypes,
    createFaultType,
  };
};
