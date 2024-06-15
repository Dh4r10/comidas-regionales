import React, { useContext, useEffect, useState } from "react";
import ButtonAnt from "@/components/ButtonAnt";
import MesaCard from "../../components/MesaCard";

import "./Comedor.scss";
import AuthContext from "@/contexts/AuthContext";
import { Spin } from "antd";
import { getAxios } from "@/functions/simpleMethods";
import { MESAS_API } from "@/api/SalonAPI";
import ModalSalon from "../../components/ModalSalon/ModalSalon";
import PedidoForms from "./Forms/PedidoForms";
import ProductosForms from "./Forms/ProductosForms";
import SalonPedidosContext from "@/contexts/SalonPedidosContext";

const Comedor = () => {

  let { authTokens } = useContext(AuthContext)
  let { setOpenPedido, idsSelected, setIdsSelected } = useContext(SalonPedidosContext)

  // API MESAS
  const [dataApi, setDataApi] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens?.token),
  };

  useEffect(() => {
    getAxios(MESAS_API, headers, setDataApi, setLoading, setError);
  }, []);

  const onSelected = (id) => {
    if (idsSelected.includes(id)) {
      let idsSelectedFilter = [...idsSelected].filter(idExist => idExist !== id)
      setIdsSelected(idsSelectedFilter)
      localStorage.setItem("idsSelected", JSON.stringify(idsSelectedFilter))
    } else {
      let idsSelectedCopy = [...idsSelected, id]
      setIdsSelected(idsSelectedCopy)
      localStorage.setItem("idsSelected", JSON.stringify(idsSelectedCopy))
    }
  }

  const handlePedido = async () => {
    console.log(idsSelected)
    setOpenPedido(true)
  }

  const handleReserva = () => {
    console.log(idsSelected)
  }

  const handleDetalle = () => {
    console.log(idsSelected)
  }

  const handleLimpiarSeleccion = () => {
    setIdsSelected([])
    localStorage.setItem("idsSelected", [])
  }

  return (
    <div className="mesas overflow-auto">
      <div className="grid gap-3">
        <h1 className="text-center pb-1 font-semibold">MESAS EXISTENTES</h1>
        <div className="p-3 border-[1px] border-slate-300 dark:border-[#252525]">
          {loading ? (
            <div className="mesas__organizacion gap-2">
              {dataApi.map(mesa => (
                <MesaCard key={mesa.id} id={mesa.id} numeroMesa={mesa.numero} tipoMesa={mesa.tipoMesa} capacidad={mesa.capacidad} estado={mesa.estado} ocupado={mesa.ocupado} reservado={mesa.reservado} onSelected={onSelected} idSelected={idsSelected.includes(mesa.id)} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[40vh]">
              <Spin />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-start pt-4">
        <div>
          <ButtonAnt disabled={idsSelected.length === 0} htmlType="button" type="primary" danger={true} tittle="Limpiar seleccion" onClick={handleLimpiarSeleccion} />
        </div>
        <div className="flex gap-3">
          <ButtonAnt disabled={idsSelected.length !== 1} htmlType="button" type="primary" tittle="Detalle" onClick={handleDetalle} />
          _
          <ButtonAnt disabled={idsSelected.length < 1} htmlType="button" type="primary" tittle="Reserva" onClick={handleReserva} />
          _
          <ButtonAnt disabled={idsSelected.length < 1} htmlType="button" type="primary" tittle="Pedido" onClick={handlePedido} />
        </div>
      </div>
      <PedidoForms />
      <ProductosForms />
    </div>
  );
};

export default Comedor;
