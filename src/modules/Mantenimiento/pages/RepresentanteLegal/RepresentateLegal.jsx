import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "@/contexts/AuthContext";
import FormRepresentate from "./components/FormRepresentate";
import { Spin } from "antd";
export default function RepresentanteLegal() {
  let { authTokens, user } = useContext(AuthContext);
  const [representante, setRepresentante] = useState();
  const [cambio, setCambio] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchEstablecimiento = async () => {
      try {
        const response = await axios.get(
          "http://regionales.app.informaticapp.com:3033/api/v1/representante-legal",
          {
            headers: {
              Authorization: `Bearer ${authTokens.token}`,
            },
          }
        );
        console.log("Operacion exitosa:", response);
        setRepresentante(response.data);
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
  return (
    <FormRepresentate
      representante={representante}
      cambio={cambio}
      setCambio={setCambio}
      token={authTokens.token}
    />
  );
}
