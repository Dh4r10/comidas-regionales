import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSquareFull } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "@/contexts/ThemeContext";

import "./MesaCard.scss";
import { capitalizeFirstLetter } from "@/functions/UpperCaseCapitalizer";
import { Button } from "antd";

const MesaCard = (props) => {

  const { theme } = useContext(ThemeContext)

  const { numeroMesa, id, tipoMesa, capacidad, estado, ocupado, reservado, onSelected, idSelected } = props;

  if (estado) {
    return (
      <button className={`mesas__organizacion__mesa-card${theme === 'dark' ? "-dark" : ""}${idSelected ? "-selected" : ""} border-[1px] border-slate-300 ${idSelected && 'bg-[#2e932e34] border-green-600 dark:bg-[#202020] dark:border-[#252525]'} dark:border-[#252525] p-2 hover:bg-[#2e932e34] hover:border-green-600 dark:hover:bg-[#202020] dark:hover:border-[#252525] cursor-pointer`} onClick={() => onSelected(id)}>
        <div className="flex justify-center items-center p-3 relative">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="square-icon h-28 text-slate-200 dark:text-[#252525] border-[1px] border-slate-300 dark:border-[#272727]"
          />
          <FontAwesomeIcon
            icon={faUtensils}
            className="utensils-icon absolute h-6 text-slate-800 dark:text-slate-300"
          />
        </div>
        <div className="flex flex-col justify-center text-left text-slate-700 dark:text-[#c5c5c5] text-xs">
          <p className="text-center font-bold text-slate-800 dark:text-[#d8d8d8]">MESA {numeroMesa}</p>
          <div className="py-3 px-1">
            <p>Tipo de mesa: <span className="font-semibold">{capitalizeFirstLetter(tipoMesa)}</span></p>
            <p>Capacidad: <span className="font-semibold">{capacidad}</span></p>
            <p><span className="font-semibold">{!estado ? "Fuera de servicio" : ocupado ? "Ocupado" : reservado ? "Reservado" : "Disponible"}</span></p>
          </div>
          <p className="text-xs text-right text-slate-400 dark:text-[#949494]">Estado: <span className={`${estado ? "text-green-500" : "text-red-500"}`}>{estado ? "Activo" : "Sin servicio"}</span></p>
        </div>
      </button>
    )
  } else {
    return (
      <button disabled className={`mesas__organizacion__mesa-card${theme === 'dark' ? "-dark" : ""}-disabled border-[1px] border-slate-300 dark:border-[#252525] p-2 relative cursor-not-allowed`}>
        <div className="flex justify-center items-center p-3 relative">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="square-icon h-28 text-slate-200 dark:text-[#252525] border-[1px] border-slate-300 dark:border-[#272727]"
          />
          <FontAwesomeIcon
            icon={faUtensils}
            className="utensils-icon absolute h-6 text-slate-800 dark:text-[#5d5d5d]"
          />
        </div>
        <div className="flex flex-col justify-center text-left text-slate-300 dark:text-[#5d5d5d] text-xs">
          <p className="text-center font-bold text-slate-300 dark:text-[#5d5d5d]">MESA {numeroMesa}</p>
          <div className="py-3 px-1">
            <p>Tipo de mesa: <span className="font-semibold">{capitalizeFirstLetter(tipoMesa)}</span></p>
            <p>Capacidad: <span className="font-semibold">{capacidad}</span></p>
            <p><span className="font-semibold">{!estado ? "Fuera de servicio" : ocupado ? "Ocupado" : reservado ? "Reservado" : "Disponible"}</span></p>
          </div>
          <p className="text-xs text-right text-slate-300 dark:text-[#5d5d5d]">Estado: <span className={`${estado ? "text-green-500" : "text-red-500"}`}>{estado ? "Activo" : "Sin servicio"}</span></p>
        </div>
        <div className="disabled-mask bg-[#8c8f9d36] dark:bg-[#0909097d] absolute top-0 left-0 h-full w-full" />
      </button>
    )
  }
};

export default MesaCard;
