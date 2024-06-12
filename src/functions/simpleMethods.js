import AuthContext from "@/contexts/AuthContext";
import axios from "axios";
import { useContext } from "react";

export const getAxios = async (
  url,
  headers,
  setGeneral,
  setLoading,
  setError
) => {
  setLoading(false);
  try {
    const response = await axios.get(url, { headers });
    console.log("operacion exitosa:", response);
    setGeneral(response.data);
    setLoading(true);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    setError(error.message);
    setLoading(true);
  }
};
