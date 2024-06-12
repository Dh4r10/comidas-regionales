import React, { useState, useEffect, useContext } from "react";
import "./Estableciminetos.scss";
import axios from "axios";
import FormEstablecimiento from "./components/FormEstablecimiento";
import MenuLateral from "@/components/MenuLateral";
import { Spin } from "antd";
import AuthContext from "@/contexts/AuthContext";

export default function Estableciminetos() {
  const [establecimiento, setEstablecimiento] = useState();
  const [load, setLoad] = useState(false);
  const [cambio, setCambio] = useState();
  let { authTokens, user } = useContext(AuthContext);
  //const cleanToken = authTokens.replace(/"/g, "");
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
        console.log("Operacion exitosa:", response);
        setEstablecimiento(response.data);
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
    <FormEstablecimiento
      establecimiento={establecimiento}
      setCambio={setCambio}
      cambio={cambio}
      token={authTokens.token}
    />
  );
}
