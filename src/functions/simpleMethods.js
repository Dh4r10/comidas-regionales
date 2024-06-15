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
    setError(error);
    setLoading(true);
  }
};

export const postAxios = async (
  url,
  data,
  headers,
  setLoading,
  setError,
  func
) => {
  setLoading(true);
  try {
    const response = await axios.post(url, data, { headers });
    console.log("operacion exitosa:", response);
    setLoading(false);
    func();
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    setError(error);
    setLoading(false);
  }
};
