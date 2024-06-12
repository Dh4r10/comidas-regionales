import axios from "axios";

export const postAxios = async (
  url,
  data,
  setCambio,
  cambio,
  setSpin,
  token
) => {
  setSpin(true);
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Operacion exitosa:", response);
    setCambio(!cambio);
    setSpin(false);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};

export const deleteAxios = async (url, setCambio, cambio, setSpin, token) => {
  setSpin(true);
  console.log(token);
  const headers = {
    Authorization: `Bearer ${token}`, // Limpia el token de comillas adicionales si es necesario
  };
  axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // Maneja la respuesta exitosa aquí
      console.log("Recurso eliminado", response.data);
      setCambio(!cambio);
      setSpin(false);
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error("Error al eliminar el recurso", error);
    });
};
