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
import "../Compras";

function Detalle() {
  const handleEditar = (id) => {
    console.log("Editar: ", id);
  };
  const handleEliminar = (id) => {
    console.log("Editar: ", id);
  };

  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        DETALLE COMPRA:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Lista de Detalle Compra
        </span>
      </p>
      <div className="pb-10">
        <div className=" margin bg-[#009444] rounded-t-md rounded-b-md shadow-md dark:shadow-[#2b2b2b] p-2">
          <div className="text-center">
            <Link to={comprasPaths[7].unionPath}>
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
              <th className="px-4 py-2 w-20 text-left">INSUMO</th>
              <th className="px-4 py-2 w-32 text-left">COMPRA</th>
              <th className="px-4 py-2 w-24 text-left">CODIGO LOTE</th>
              <th className="px-4 py-2 w-32 text-left">CANTIDAD</th>
              <th className="px-4 py-2 w-32 text-left">PRECIO UNITARIO</th>
              <th className="px-4 py-2 w-32 text-left">FECHA RECEPCIÓN</th>
              <th className="px-4 py-2 w-32 text-left">FECHA VENCIMIENTO</th>
              <th className="px-4 py-2 w-10 text-left">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="border-b-2 border-[#009444] dark:border-[#98aaae]">
              <th className="px-4 py-2 w-10 text-sm" scope="row">
                1
              </th>
              <td className="px-4 py-2 w-20 text-sm">Arroz</td>
              <td className="px-4 py-2 w-20 text-sm">102</td>
              <td className="px-4 py-2 w-32text-sm">A002</td>
              <td className="px-4 py-2 w-32 text-sm">10</td>
              <td className="px-4 py-2 w-32 text-sm">160</td>
              <td className="px-4 py-2 w-32 text-sm">07/05/2024</td>
              <td className="px-4 py-2 w-32 text-sm">07/05/2024</td>
              <td className="px-4 py-2 w-10 text-sm">
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

export default Detalle;
