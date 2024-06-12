import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import axios from "axios";
import { Spin } from "antd";
import FormSucursales from "./components/FormSucursales";

export default function Sucursales() {
  let { authTokens, user } = useContext(AuthContext);
  console.log(authTokens);
  const { sucursales } = user;
  console.log(sucursales[0]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.token),
  };
  const [establecimiento, setEstablecimiento] = useState();
  const [sucursal, setSucursales] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchEstablecimiento = async () => {
      try {
        const response = await axios.get(
          "http://regionales.app.informaticapp.com:3033/api/v1/establecimiento",
          { headers }
        );
        const reponseS = await axios.get(
          `http://regionales.app.informaticapp.com:3033/api/v1/sucursales/${sucursal[0]}`,
          { headers }
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
  console.log(sucursal);
  return (
    <FormSucursales establecimiento={establecimiento} sucursales={sucursales} />
  );
}
