import React, { useState } from "react";
import ButtonAnt from "@/components/ButtonAnt";
import MesaCard from "../../components/MesaCard";
import { mesasData } from "../../data/mesas";

import "./Comedor.scss";

const Comedor = () => {

  const [selected, setSelected] = useState(localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")) : false)
  const [idSelected, setIdSelected] = useState(localStorage.getItem("idSelected") ? JSON.parse(localStorage.getItem("idSelected")) : null)

  const onSelected = (id) => {
    if (id == idSelected) {
      setSelected(!selected)
      localStorage.setItem("selected", !selected)
      setIdSelected(null)
      localStorage.setItem("idSelected", null)
    } else {
      setSelected(true)
      localStorage.setItem("selected", true)
      setIdSelected(id);
      localStorage.setItem("idSelected", id)
    }
  }

  console.log(idSelected)
  console.log(selected)

  return (
    <div className="mesas overflow-auto">
      <div className="grid gap-3">
        <h1 className="text-center pb-1 font-semibold">MESAS EXISTENTES</h1>
        <div className="p-3 border-[1px] border-slate-300 dark:border-[#252525]">
          <div className="mesas__organizacion gap-2">
            {mesasData.map(mesa => (
              <MesaCard key={mesa.id} id={mesa.id} numeroMesa={mesa.numeroMesa} tipoMesa={mesa.tipoMesa} capacidad={mesa.capacidad} estado={mesa.estado} ocupado={mesa.opcupado} onSelected={onSelected} idSelected={idSelected} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start pt-4 gap-3">
        <ButtonAnt disabled={!selected} htmlType="button" type="primary" tittle="Reserva" />
        _
        <ButtonAnt disabled={!selected} htmlType="button" type="primary" tittle="Pedido" />
      </div>
    </div>
  );
};

export default Comedor;
