import ThemeContext from "@/contexts/ThemeContext";
import React, { useContext } from "react";

const Prueba = () => {
  let { theme } = useContext(ThemeContext);

  return (
    <div>
      <p className="text-slate-800 dark:text-slate-300">Soy una prueba</p>
    </div>
  );
};

export default Prueba;
