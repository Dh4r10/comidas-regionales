import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import FormSucursales from "./components/FormSucursales";

export default function Sucursales() {
  const [establecimiento, setEstablecimiento] = useState();
  const [sucursales, setSucursales] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchEstablecimiento = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/establecimiento"
        );
        const reponseS = await axios.get(
          "http://localhost:8000/api/v1/sucursales/1"
        );
        console.log("Operacion exitosa:", response);
        setEstablecimiento(response.data);
        setSucursales(reponseS.data);
        setLoad(true);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoad(true);
      }
    };
    fetchEstablecimiento();
  }, []);
  if (!load) {
    return <Spin />;
  }
  console.log(sucursales);
  return (
    <FormSucursales establecimiento={establecimiento} sucursales={sucursales} />
  );
}
