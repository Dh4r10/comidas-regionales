import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPenToSquare,
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { comprasPaths } from "@/utils/routes/ComprasRoutes";
import "./styles.css";

function Compras() {
  const handleEditar = (id) => {
    console.log("Editar: ", id);
  };
  const handleEliminar = (id) => {
    console.log("Editar: ", id);
  };

  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        MOVIMIENTO DE COMPRAS:&nbsp;
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Lista de compras
        </span>
      </p>
      <div className="pb-10">
        <div className=" margin  bg-[#009444] rounded-t-md rounded-b-md shadow-md dark:shadow-[#2b2b2b] p-2">
          <div className="text-center">
            <Link to={comprasPaths[3].unionPath}>
              <button className="custom-new w-auto" type="button" onClick="">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Nuevo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b-2 border-[#009444] dark:border-[#98aaae]">
              <th className="px-4 py-2 w-10">N°</th>
              <th className="px-4 py-2 w-56 text-left">PROVEEDOR</th>
              <th className="px-4 py-2 w-32 text-left">CODIGO RECIBO</th>
              <th className="px-4 py-2 w-36 text-left">FECHA EMISIÓN</th>
              <th className="px-4 py-2 w-44 text-left">FECHA VENCIMIENTO</th>
              <th className="px-4 py-2 w-56 text-left">DESCRIPCIÓN</th>
              <th className="px-4 py-2 w-14 text-left">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="border-b-2 border-[#009444] dark:border-[#98aaae]">
              <th className="px-4 py-2 w-10 text-sm" scope="row">
                1
              </th>
              <td className="px-4 py-2 w-56 text-sm">
                ISMAEL NEHEMÍAS HARO CARRASCO
              </td>
              <td className="px-4 py-2 w-32 text-sm">0008</td>
              <td className="px-4 py-2 w-36 text-sm">15/10/2023</td>
              <td className="px-4 py-2 w-44 text-sm">16/10/2023</td>
              <td className="px-4 py-2 w-56 text-sm">MI PRIMERA COMPRA</td>
              <td className="px-4 py-2 w-14 text-sm">
                <button
                  className="bg-[#186c3d] rounded px-2 py-1 mr-2"
                  onClick={() => handleEditar(1)}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="icono text-[#fff]"
                  />
                </button>
                <button
                  className="bg-[#ff3838] rounded px-2 py-1"
                  onClick={() => handleEliminar(2)}
                >
                  <FontAwesomeIcon icon={faTrash} className="text-[#fff]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

export default Compras;
