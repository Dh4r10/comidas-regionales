import React, { useState } from "react";
import ButtonAnt from "@/components/ButtonAnt";
import MesaCard from "../../components/MesaCard";
import { mesasData } from "../../data/mesas";

import "./Comedor.scss";

const Comedor = () => {

  const [idsSelected, setIdsSelected] = useState([24])

  const [selected, setSelected] = useState(localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")) : false)
  const [idSelected, setIdSelected] = useState(localStorage.getItem("idSelected") ? JSON.parse(localStorage.getItem("idSelected")) : null)

  const onSelected = (id) => {
    if (idsSelected.includes(id)) {
      setSelected(!selected)
      localStorage.setItem("selected", !selected)
      setIdSelected(null)
      localStorage.setItem("idSelected", null)

      let idsSelectedFilter = [...idsSelected].filter(idExist => idExist !== id)
      setIdsSelected(idsSelectedFilter)
    } else {
      setSelected(true)
      localStorage.setItem("selected", true)
      setIdSelected(id);
      localStorage.setItem("idSelected", id)

      let idsSelectedCopy = [...idsSelected, id]
      setIdsSelected(idsSelectedCopy)
    }
  }

  console.log("IDS SELECCIONADOS:", idsSelected)

  const handlePedido = () => {
    console.log("id de mesa para el pedido: " + idSelected)
  }

  const handleReserva = () => {
    console.log("id de mesa para la reserva: " + idSelected)
  }

  const handleDetalle = () => {
    console.log("id de mesa para el detalle: " + idSelected)
  }

  const handleLimpiarSeleccion = () => {
    setIdsSelected([])
  }

  return (
    <div className="mesas overflow-auto">
      <div className="grid gap-3">
        <h1 className="text-center pb-1 font-semibold">MESAS EXISTENTES</h1>
        <div className="p-3 border-[1px] border-slate-300 dark:border-[#252525]">
          <div className="mesas__organizacion gap-2">
            {mesasData.map(mesa => (
              <MesaCard key={mesa.id} id={mesa.id} numeroMesa={mesa.numeroMesa} tipoMesa={mesa.tipoMesa} capacidad={mesa.capacidad} estado={mesa.estado} ocupado={mesa.opcupado} onSelected={onSelected} idSelected={idsSelected.includes(mesa.id)} />
            ))}
          </div>
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
    </div>
  );
};

export default Comedor;
