import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import axios from "axios";
import { Spin } from "antd";
import FormSucursales from "./components/FormSucursales";

export default function Sucursales() {
  let { authTokens, user } = useContext(AuthContext);

  const { sucursales, establecimiento } = user;
  const [establecimientos, setEstablecimiento] = useState();
  const [sucursal, setSucursales] = useState();
  const [load, setLoad] = useState(false);
  const [cambio, setCambio] = useState();
  useEffect(() => {
    const fetchEstablecimiento = async () => {
      try {
        const response = await axios.get(
          "http://regionales.app.informaticapp.com:3033/api/v1/establecimiento",
          {
            headers: {
              Authorization: `Bearer ${authTokens.token}`,
            },
          }
        );
        const reponseS = await axios.get(
          `http://regionales.app.informaticapp.com:3033/api/v1/sucursales/${establecimiento}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.token}`,
            },
          }
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
  }, [cambio]);

  if (!load) {
    return <Spin />;
  }
  console.log(sucursal);
  return (
    <FormSucursales
      establecimiento={establecimientos}
      sucursales={sucursal}
      setCambio={setCambio}
      cambio={cambio}
      token={authTokens.token}
    />
  );
}
