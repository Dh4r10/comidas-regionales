import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "@/utils/axiosConfig";
import "./styles.css";
import { comprasPaths } from "@/utils/routes/ComprasRoutes";

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await axiosInstance.get("/proveedores");
        const filteredProveedores = response.data.filter(
          (proveedor) => proveedor.estado === true || proveedor.estado === 1
        );
        setProveedores(filteredProveedores);
      } catch (error) {
        console.error("Error fetching proveedores:", error);
      }
    };

    fetchProveedores();
  }, []);

  const handleEditar = (id) => {
    // Lógica para editar proveedor
  };

  const handleEliminar = async (id) => {
    try {
      await axiosInstance.delete(`/proveedores/${id}`);
      // Actualiza el estado para remover el proveedor eliminado
      setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
    } catch (error) {
      console.error("Error deleting proveedor:", error);
    }
  };

  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        PROVEEDORES:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Lista de Proveedores
        </span>
      </p>
      <div className="pb-10">
        <div className="margin bg-[#009444] rounded-t-md rounded-b-md shadow-md dark:shadow-[#2b2b2b] p-2">
          <div className="text-center">
            <Link to={comprasPaths[2].unionPath}>
              <button className="custom-new w-auto" type="button">
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
              <th className="px-4 py-2 w-32 text-left">RUC</th>
              <th className="px-4 py-2 w-28 text-left">TIPO RUC</th>
              <th className="px-4 py-2 w-32 text-left">RAZON SOCIAL</th>
              <th className="px-4 py-2 w-32 text-left">TELEFONO</th>
              <th className="px-4 py-2 w-32 text-left">CORREO</th>
              <th className="px-4 py-2 w-20 text-left">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {proveedores.map((proveedor, index) => (
              <tr
                key={proveedor.id}
                className="border-b-2 border-[#009444] dark:border-[#98aaae]"
              >
                <th className="px-4 py-2 w-10 text-sm" scope="row">
                  {index + 1}
                </th>
                <td className="px-4 py-2 w-32 text-sm">{proveedor.ruc}</td>
                <td className="px-4 py-2 w-28 text-sm">{proveedor.tipoRuc}</td>
                <td className="px-4 py-2 w-32 text-sm">
                  {proveedor.razonSocial}
                </td>
                <td className="px-4 py-2 w-32 text-sm">{proveedor.telefono}</td>
                <td className="px-4 py-2 w-32 text-sm">{proveedor.correo}</td>
                <td className="px-4 py-2 w-20 text-sm">
                  <button
                    className="bg-[#186c3d] rounded px-2 py-1 mr-2"
                    onClick={() => handleEditar(proveedor.id)}
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="icono text-[#fff]"
                    />
                  </button>
                  <button
                    className="bg-[#ff3838] rounded px-2 py-1"
                    onClick={() => handleEliminar(proveedor.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-[#fff]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

export default Proveedores;
