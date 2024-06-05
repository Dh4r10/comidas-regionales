import React from "react";
import MesaCard from "../../components/MesaCard";

import "./Mesas.scss";

const Mesas = () => {
  return (
    <div className="mesas gap-3">
      <div className="grid gap-3">
        <h1>MESAS EXISTENTES:</h1>
        <div className="p-3 border-[1px] dark:border-[#252525]">
          <div className="mesas__organizacion gap-2">
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
            <MesaCard />
          </div>
        </div>
      </div>
      <div className="bg-green-300 flex justify-end pr-3">
        <div>
          <button>enviar</button>
          <button>reservar</button>
        </div>
      </div>
    </div>
  );
};

export default Mesas;
