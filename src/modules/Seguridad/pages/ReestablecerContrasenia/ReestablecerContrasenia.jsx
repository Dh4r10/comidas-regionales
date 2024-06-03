import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  DEFAULT_VALUES_REESTABLECER_CONTRASENIA,
  FORM_SCHEMA_REESTABLECER_CONTRASENIA,
} from "../../constants/ReestablecerContraseniaConstants";

import HeaderFormSeguridad from "../../components/HeaderFormSeguridad";
import InputSeguridad from "../../components/InputSeguridad";
import BotonSeguridad from "../../components/BotonSeguridad";
import BackgroundSeguridad from "../../components/BackgroundSeguridad";

import "../../scss/EsquemaSeguridad.scss";
import { seguridadPaths } from "@/utils/routes/SeguridadRoutes";

const ReestablecerContrasenia = () => {
  const formSchema = z.object(FORM_SCHEMA_REESTABLECER_CONTRASENIA);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES_REESTABLECER_CONTRASENIA,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="seguridad h-full">
      <div className="seguridad__form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100 overflow-auto">
        <HeaderFormSeguridad titulo="Reestablecer Contraseña">
          <p className="text-gray-600 font-inter text-[15px] mt-4">
            Introduzca su dirección de correo electronico para recibir el enlace
            de restablecimiento de contraseña
          </p>
        </HeaderFormSeguridad>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <InputSeguridad
              control={form.control}
              type="text"
              name="correo"
              label="Correo"
              placeholder="Ingrese su correo"
            />
            <Link to={seguridadPaths[0].path}>
              <p className="text-sm font-normal text-[#1877F2] hover:text-[#4793F7] mt-4">
                Volver a inicio de sesión
              </p>
            </Link>
            <BotonSeguridad title="Enviar correo" />
          </form>
        </div>
      </div>
      <BackgroundSeguridad />
    </div>
  );
};

export default ReestablecerContrasenia;
