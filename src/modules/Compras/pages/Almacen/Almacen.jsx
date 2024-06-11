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
import "../Compras/styles.css";

function Almacen() {
  const handleEditar = (id) => {
    console.log("Editar: ", id);
  };
  const handleEliminar = (id) => {
    console.log("Editar: ", id);
  };

  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        MOVIMIENTO DE ALMACEN:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Lista de Movimientos
        </span>
      </p>
      <div className="pb-10">
        <div className=" margin bg-[#009444] rounded-t-md rounded-b-md shadow-md dark:shadow-[#2b2b2b] p-2">
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
              <th className="px-4 py-2 w-32 text-left">NOMBRE</th>
              <th className="px-4 py-2 w-48 text-left">DESCRIPCIÓN</th>
              <th className="px-4 py-2 w-32 text-left">SUCURSAL</th>
              <th className="px-4 py-2 w-32 text-left">DEPARTAMENTO</th>
              <th className="px-4 py-2 w-32 text-left">PROVINCIA</th>
              <th className="px-4 py-2 w-32 text-left">DISTRITO</th>
              <th className="px-4 py-2 w-48 text-left">DIRECCIÓN</th>
              <th className="px-4 py-2 w-48 text-left">DIRECCIÓN REF.</th>
              <th className="px-4 py-2 w-32 text-left">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="border-b-2 border-[#009444] dark:border-[#98aaae]">
              <th className="px-4 py-2 w-10 text-sm" scope="row">
                1
              </th>
              <td className="px-4 py-2 w-32 text-sm">ALMACEN 1</td>
              <td className="px-4 py-2 w-48 text-sm">PRODUCTOS DEL LOTE 3</td>
              <td className="px-4 py-2 w-32 text-sm">@mdo</td>
              <td className="px-4 py-2 w-32 text-sm">SAN MARTIN</td>
              <td className="px-4 py-2 w-32 text-sm">TARAPOTO</td>
              <td className="px-4 py-2 w-32 text-sm">MORALES</td>
              <td className="px-4 py-2 w-48 text-sm">FRENTE A...</td>
              <td className="px-4 py-2 w-48 text-sm">917724465</td>
              <td className="px-4 py-2 w-32 text-sm">
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

export default Almacen;
