import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSquareFull } from "@fortawesome/free-solid-svg-icons";

import "./MesaCard.scss";

const MesaCard = () => {
  return (
    <div className="mesas__organizacion__mesa-card border-[1px] dark:border-[#252525] p-2">
      <button className="flex justify-center items-center p-3 relative">
        <FontAwesomeIcon
          icon={faSquareFull}
          className="h-28 text-slate-200 dark:text-[#252525] border-[1px] border-slate-300 dark:border-[#363636]"
        />
        <FontAwesomeIcon
          icon={faUtensils}
          className="absolute h-6 text-slate-800 dark:text-slate-300"
        />
      </button>
      <div className="flex justify-center items-center">
        <p>MESA 1</p>
      </div>
    </div>
  );
};

export default MesaCard;
