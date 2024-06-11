import axios from "axios";
export const postAxios = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Operacion exitosa:", response);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};
export const deleteAxios = async (url) => {
  axios
    .delete(url)
    .then((response) => {
      // Maneja la respuesta exitosa aquí
      console.log("Recurso eliminado", response.data);
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error("Error al eliminar el recurso", error);
    });
};
