import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faArrowLeft,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function RegistrarProveedor() {
  const [identificationType, setIdentificationType] = useState("");
  const [ruc, setRuc] = useState("");
  const [formData, setFormData] = useState({
    razonSocial: "",
    correo: "",
    telefono: "",
  });

  const handleIdentificationChange = (event) => {
    const type = event.target.value;
    setIdentificationType(type);
    setRuc(type === "natural" ? "10" : type === "juridica" ? "20" : "");
  };

  const handleRucChange = (event) => {
    const { value } = event.target;
    const prefix = identificationType === "natural" ? "10" : "20";

    if (!value.startsWith(prefix)) {
      setRuc(prefix);
    } else {
      setRuc(value);
    }
  };

  const handleReset = () => {
    setRuc(
      identificationType === "natural"
        ? "10"
        : identificationType === "juridica"
        ? "20"
        : ""
    );
    setFormData({
      razonSocial: "",
      correo: "",
      telefono: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
  };

  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        REGISTRAR:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Nuevo Proveedor
        </span>
      </p>
      <br />
      <form className="border" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 content-center bg-[#f1f5f9] dark:bg-[#161616] pb-2">
          <div className="tamaño-a w-full dark:bg-opacity-10 p-2 space-y-6 px-4">
            <div className="content-center">
              <div className="rounded-md shadow-sm -space-y-px">
                <label htmlFor="identification">Tipo RUC:</label>
                <select
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  id="identification"
                  name="identification"
                  onChange={handleIdentificationChange}
                  value={identificationType}
                >
                  <option value="" disabled>
                    Selecciona un tipo
                  </option>
                  <option value="natural">Natural</option>
                  <option value="juridica">Juridica</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mx-4">
            <br />
            <div className="text-right">
              <Link to="/proveedores">
                <button className="custom-submit-r w-14 px-3 " type="">
                  <FontAwesomeIcon icon={faArrowLeft} className="icono" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 pb-10 dark:shadow-[#2b2b2b]">
          <div className="centrar bg-[#dbe1ed] dark:bg-[#202020]">
            <div className="mx-10 dark:bg-opacity-10 space-y-6 ">
              <div className="content-center">
                <div className="rounded-md shadow-sm -space-y-px">
                  {identificationType === "natural" && (
                    <div className=" bg-[#dbe1ed] dark:bg-[#202020] py-10">
                      <div id="naturalFields">
                        <div className="pb-4">
                          <label htmlFor="natural">Ingresar tu RUC</label>
                          <input
                            type="text"
                            id="natural"
                            name="natural"
                            placeholder="RUC requerido"
                            value={ruc}
                            onChange={handleRucChange}
                            pattern="\d{11}"
                            maxLength="11"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            required
                            title="El RUC debe tener 11 dígitos"
                          />
                        </div>
                        <div className="pb-4">
                          <label htmlFor="razonSocial">Razon Social:</label>
                          <input
                            type="text"
                            id="razonSocial"
                            name="razonSocial"
                            value={formData.razonSocial}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            placeholder="Ingrese Razón Social"
                          />
                        </div>

                        <div className="pb-4">
                          <label htmlFor="correo">Correo Electrónico:</label>
                          <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            placeholder="Ingrese su correo electrónico"
                          />
                        </div>

                        <div className="pb-4">
                          <label htmlFor="telefono">Teléfono:</label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="Ingrese su número de teléfono"
                            pattern="[0-9]{9}"
                            maxLength="9"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            title="El número de teléfono debe tener 9 dígitos"
                          />
                        </div>

                        <div className="grid grid-cols-3">
                          <div></div>
                          <div className="text-right">
                            <button
                              className="custom-submit-r  w-auto mt-5"
                              type="reset"
                              value="Limpiar"
                              onClick={handleReset}
                            >
                              <FontAwesomeIcon icon={faBroom} />
                              &nbsp; Limpiar
                            </button>
                          </div>
                          <div className="text-right">
                            <button
                              className="custom-submit  w-auto  mt-5"
                              type="submit"
                            >
                              <FontAwesomeIcon icon={faFloppyDisk} />
                              &nbsp; Guardar
                            </button>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {identificationType === "juridica" && (
                    <div className=" bg-[#dbe1ed] dark:bg-[#202020] py-10">
                      <div id="juridicaFields">
                        <div className="pb-4">
                          <label htmlFor="juridica">Ingresar tu RUC</label>
                          <input
                            type="text"
                            id="juridica"
                            name="juridica"
                            placeholder="RUC requerido"
                            value={ruc}
                            onChange={handleRucChange}
                            pattern="\d{11}"
                            maxLength="11"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            required
                            title="El RUC debe tener 11 dígitos"
                          />
                        </div>
                        <div className="pb-4">
                          <label htmlFor="razonSocial">Razon Social:</label>
                          <input
                            type="text"
                            id="razonSocial"
                            name="razonSocial"
                            value={formData.razonSocial}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            placeholder="Ingrese Razón Social"
                          />
                        </div>

                        <div className="pb-4">
                          <label htmlFor="correo">Correo Electrónico:</label>
                          <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            placeholder="Ingrese su correo electrónico"
                          />
                        </div>

                        <div className="pb-4">
                          <label htmlFor="telefono">Teléfono:</label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="Ingrese su número de teléfono"
                            pattern="[0-9]{9}"
                            maxLength="9"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                            title="El número de teléfono debe tener 9 dígitos"
                          />
                        </div>

                        <div className="grid grid-cols-3">
                          <div></div>
                          <div className="text-right">
                            <button
                              className="custom-submit-r  w-auto mt-5"
                              type="reset"
                              value="Limpiar"
                              onClick={handleReset}
                            >
                              <FontAwesomeIcon icon={faBroom} />
                              &nbsp; Limpiar
                            </button>
                          </div>
                          <div className="text-right">
                            <button
                              className="custom-submit  w-auto  mt-5"
                              type="submit"
                            >
                              <FontAwesomeIcon icon={faFloppyDisk} />
                              &nbsp; Guardar
                            </button>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrarProveedor;
