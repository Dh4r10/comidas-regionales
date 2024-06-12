// src/utils/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://regionales.app.informaticapp.com:3033/api/v1",
});

export default axiosInstance;
