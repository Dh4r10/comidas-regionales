import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  DEFAULT_VALUES_INICIAR_SESION,
  FORM_SCHEMA_INICIAR_SESION,
} from "../../constants/IniciarSesionConstants";
import HeaderFormSeguridad from "../../components/HeaderFormSeguridad";
import InputSeguridad from "../../components/InputSeguridad";
import BotonSeguridad from "../../components/BotonSeguridad";
import BackgroundSeguridad from "../../components/BackgroundSeguridad";

import "../../scss/EsquemaSeguridad.scss";
import { seguridadPaths } from "@/utils/routes/SeguridadRoutes";

function IniciarSesion() {
  const formSchema = z.object(FORM_SCHEMA_INICIAR_SESION);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES_INICIAR_SESION,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="seguridad h-full">
      <div className="seguridad__form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100 overflow-auto">
        <HeaderFormSeguridad titulo="Iniciar Sesión" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* USUARIO */}
            <InputSeguridad
              control={form.control}
              type="text"
              name="username"
              label="Usuario"
              placeholder="Ingrese su usuario"
            />

            {/* CONTRASEÑA */}
            <InputSeguridad
              control={form.control}
              type="password"
              name="password"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
            >
              <div className="text-sm">
                <Link to={seguridadPaths[1].unionPath}>
                  <p className="font-semibold text-[#1877F2] hover:text-[#4793F7]">
                    ¿Olvidaste tu contraseña?
                  </p>
                </Link>
              </div>
            </InputSeguridad>

            <BotonSeguridad title="Iniciar sesión" />
          </form>
        </div>
      </div>
      <BackgroundSeguridad />
    </div>
  );
}

export default IniciarSesion;
