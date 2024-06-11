import React, { useState, useEffect } from "react";
import "./Estableciminetos.scss";
import axios from "axios";
import FormEstablecimiento from "./components/FormEstablecimiento";
import MenuLateral from "@/components/MenuLateral";
import { Spin } from "antd";
export default function Estableciminetos() {
  const [establecimiento, setEstablecimiento] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchEstablecimiento = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/establecimiento"
        );
        console.log("Operacion exitosa:", response);
        setEstablecimiento(response.data);
        setLoad(true);
      } catch {
        console.error("Error al obtener los usuarios:", error);
        setLoad(true);
      }
    };
    fetchEstablecimiento();
  }, []);
  if (!load) {
    return <Spin />;
  }
  return <FormEstablecimiento establecimiento={establecimiento} />;
}
