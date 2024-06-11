import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faArrowLeft,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";
import "../../RegistrarProveedor/styles.css";

function Insertar() {
  return (
    <div className="grid-cols-1 h-full">
      <p className="text-base text-slate-950 dark:text-slate-300">
        REGISTRAR:
        <span className="text-sm text-slate-800 dark:text-slate-400">
          Nuevo Compra
        </span>
      </p>
      <br />
      <form className="border">
        <div className="grid grid-cols-1 content-center bg-[#f1f5f9] dark:bg-[#161616] pb-2">
          <div className="mx-4">
            <br />
            <div className="text-right">
              <Link to="/detalle-compra">
                <button className="custom-submit-r w-14 px-3 " type="button">
                  <FontAwesomeIcon icon={faArrowLeft} className="icono" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="centrar2">
          <div className="dark:bg-[#202020] bg-[#dbe1ed] ">
            <div className="grid grid-cols-2 dark:shadow-[#2b2b2b]">
              <div className="centrar bg-[#dbe1ed] dark:bg-[#202020]">
                <div className="mx-10 dark:bg-opacity-10 space-y-6">
                  <div className="content-center">
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div className="bg-[#dbe1ed] dark:bg-[#202020] py-10">
                        <div id="formFields">
                          <div className="pb-4">
                            <label htmlFor="insumo">Insumo</label>
                            <select
                              name="insumo"
                              id="insumo"
                              defaultValue=""
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              required
                            >
                              <option value="" disabled>
                                Seleccione un Insumo
                              </option>
                              <option value="opciones1">Arroz</option>
                              <option value="opciones2">Frejol</option>
                              <option value="opciones3"></option>
                            </select>
                          </div>
                          <div className="pb-4">
                            <label htmlFor="compra">Codigo Compra</label>
                            <select
                              name="compra"
                              id="compra"
                              defaultValue=""
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              required
                            >
                              <option value="" disabled>
                                Seleccione una compra
                              </option>
                              <option value="opciones1">2569</option>
                              <option value="opciones2">5869</option>
                              <option value="opciones3"></option>
                            </select>
                          </div>
                          <div className="pb-4">
                            <label htmlFor="Código Lote">Código Lote:</label>
                            <input
                              type="text"
                              id="codigo"
                              name="codigo"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              placeholder="Ingrese Código Lote"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="centrar bg-[#dbe1ed] dark:bg-[#202020]">
                <div className="mx-10 dark:bg-opacity-10 space-y-6">
                  <div className="content-center">
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div className="bg-[#dbe1ed] dark:bg-[#202020] py-10">
                        <div id="extraFields">
                          <div className="pb-4">
                            <label htmlFor="cantidad">Cantidad:</label>
                            <input
                              type="text"
                              id="cantidad"
                              name="cantidad"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              placeholder="Ingrese Cantidad"
                            />
                          </div>
                          <div className="pb-4">
                            <label htmlFor="correo">Fecha Recepción:</label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              placeholder="Ingrese su correo electrónico"
                            />
                          </div>
                          <div className="pb-4">
                            <label htmlFor="telefono">Fecha Vencimiento:</label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                              placeholder="Ingrese su correo electrónico"
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
                      </div>
                    </div>
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

export default Insertar;
