import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faArrowLeft,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../RegistrarProveedor/styles.css"; // Asegúrate de que la ruta es correcta

function RealizarCompra() {
  const [proveedores, setProveedores] = useState([]);
  const [formData, setFormData] = useState({
    proveedor: { id: "" },
    codigoRecibo: "",
    fechaEmision: "",
    fechaVencimiento: "",
    descripcion: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Obtener la lista de proveedores
    axios
      .get("http://regionales.app.informaticapp.com:3033/api/proveedores")
      .then((response) => {
        setProveedores(response.data);
      })
      .catch((error) =>
        console.error("Error al obtener los proveedores:", error)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "proveedor") {
      setFormData({
        ...formData,
        proveedor: { id: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    axios
      .post("http://regionales.app.informaticapp.com:3033/api/compra", formData)
      .then((response) => {
        console.log("Compra registrada:", response.data);
        setMessage("Compra registrada exitosamente.");
        toast.success("Compra registrada exitosamente.");
        setFormData({
          proveedor: { id: "" },
          codigoRecibo: "",
          fechaEmision: "",
          fechaVencimiento: "",
          descripcion: "",
        });
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Error en la respuesta del servidor:",
            error.response.data
          );
          setMessage(
            "Error en la respuesta del servidor: " + error.response.data.message
          );
          toast.error(
            "Error en la respuesta del servidor: " + error.response.data.message
          );
        } else if (error.request) {
          console.error("No se recibió respuesta del servidor:", error.request);
          setMessage("No se recibió respuesta del servidor.");
          toast.error("No se recibió respuesta del servidor.");
        } else {
          console.error("Error al configurar la solicitud:", error.message);
          setMessage("Error al configurar la solicitud: " + error.message);
          toast.error("Error al configurar la solicitud: " + error.message);
        }
      });
  };

  const handleReset = () => {
    setFormData({
      proveedor: { id: "" },
      codigoRecibo: "",
      fechaEmision: "",
      fechaVencimiento: "",
      descripcion: "",
    });
    setMessage("");
  };

  return (
    <div className="grid-cols-1 h-full">
      <ToastContainer />
      <p className="text-base text-slate-950 dark:text-slate-300">
        REGISTRAR:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          {" "}
          Nuevo Compra
        </span>
      </p>
      <br />
      <form className="border" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="grid grid-cols-1 content-center bg-[#f1f5f9] dark:bg-[#161616] pb-2">
          <div className="mx-4">
            <br />
            <div className="text-right">
              <Link to="/compras">
                <button className="custom-submit-r w-14 px-3" type="button">
                  <FontAwesomeIcon icon={faArrowLeft} className="icono" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 pb-10 dark:shadow-[#2b2b2b]">
          <div className="centrar bg-[#dbe1ed] dark:bg-[#202020]">
            <div className="mx-10 dark:bg-opacity-10 space-y-6">
              <div className="content-center">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="bg-[#dbe1ed] dark:bg-[#202020] py-10">
                    <div id="formFields">
                      <div className="pb-4">
                        <label htmlFor="proveedor">Proveedor:</label>
                        <select
                          name="proveedor"
                          id="proveedor"
                          value={formData.proveedor.id}
                          onChange={handleChange}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                          required
                        >
                          <option value="" disabled>
                            Seleccione un proveedor
                          </option>
                          {proveedores.map((proveedor) => (
                            <option key={proveedor.id} value={proveedor.id}>
                              {proveedor.razonSocial}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="pb-4">
                        <label htmlFor="codigoRecibo">Código Recibo:</label>
                        <input
                          type="text"
                          id="codigoRecibo"
                          name="codigoRecibo"
                          value={formData.codigoRecibo}
                          onChange={handleChange}
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                          placeholder="Ingrese Código Recibo"
                        />
                      </div>
                      <div className="pb-4">
                        <label htmlFor="fechaEmision">Fecha Emisión:</label>
                        <input
                          type="date"
                          id="fechaEmision"
                          name="fechaEmision"
                          value={formData.fechaEmision}
                          onChange={handleChange}
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                          placeholder="Ingrese la fecha de emisión"
                        />
                      </div>
                      <div className="pb-4">
                        <label htmlFor="fechaVencimiento">
                          Fecha Vencimiento:
                        </label>
                        <input
                          type="date"
                          id="fechaVencimiento"
                          name="fechaVencimiento"
                          value={formData.fechaVencimiento}
                          onChange={handleChange}
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                          placeholder="Ingrese la fecha de vencimiento"
                        />
                      </div>
                      <div className="pb-4">
                        <label htmlFor="descripcion">Descripción:</label>
                        <input
                          type="text"
                          id="descripcion"
                          name="descripcion"
                          value={formData.descripcion}
                          onChange={handleChange}
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                          placeholder="Ingrese la descripción"
                        />
                      </div>
                      <div className="grid grid-cols-3">
                        <div></div>
                        <div className="text-right">
                          <button
                            className="custom-submit-r w-auto mt-5"
                            type="reset"
                            value="Limpiar"
                          >
                            <FontAwesomeIcon icon={faBroom} />
                            &nbsp; Limpiar
                          </button>
                        </div>
                        <div className="text-right">
                          <button
                            className="custom-submit w-auto mt-5"
                            type="submit"
                          >
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            &nbsp; Guardar
                          </button>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    {/* {message && <p className="text-center mt-4">{message}</p>} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RealizarCompra;
