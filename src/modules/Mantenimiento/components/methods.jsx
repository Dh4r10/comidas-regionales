import axios from "axios";
export const postAxios = async (data, url) => {
  try {
    const response = await axios.post(
      "http://localhost:3032/api/establecimiento",
      data
    );
    console.log("Operacion exitosa:", response);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};
