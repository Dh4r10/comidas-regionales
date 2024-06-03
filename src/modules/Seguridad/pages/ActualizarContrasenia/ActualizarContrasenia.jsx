import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  DEFAULT_VALUES_ACTUALIZAR_CONTRASENIA,
  FORM_SCHEMA_ACTUALIZAR_CONTRASENIA,
} from '../../constants/ActualizarContraseniaConstants';

import HeaderFormSeguridad from '../../components/HeaderFormSeguridad';
import InputSeguridad from '../../components/InputSeguridad';
import BotonSeguridad from '../../components/BotonSeguridad';
import BackgroundSeguridad from '../../components/BackgroundSeguridad';

import '../../scss/EsquemaSeguridad.scss';

const ActualizarContrasenia = () => {
  const formSchema = z.object(FORM_SCHEMA_ACTUALIZAR_CONTRASENIA);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES_ACTUALIZAR_CONTRASENIA,
  });

  const onSubmit = (values) => {
    const { username, password } = values;
    const newValues = {
      username: username,
      password: password,
    };

    console.log(newValues);
    console.log(values);
  };

  return (
    <div className="seguridad h-full">
      <div className="seguridad__form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100 overflow-auto">
        <HeaderFormSeguridad titulo="Actualizar Contraseña">
          <p className="text-gray-600 font-inter text-[15px] mt-4">
            Por favor complete el formulario para actualizar su contraseña
          </p>
        </HeaderFormSeguridad>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <InputSeguridad
              control={form.control}
              type="text"
              name="username"
              label="Usuario"
              placeholder="Ingrese su usuario"
            />
            <InputSeguridad
              control={form.control}
              type="password"
              name="password"
              label="Contraseña"
              placeholder="Ingrese su nueva contraseña"
            />
            <InputSeguridad
              control={form.control}
              type="password"
              name="repeatPassword"
              label="Repetir contraseña"
              placeholder="Ingrese su nueva contraseña"
            />
            <BotonSeguridad title="Actualizar contraseña" />
          </form>
        </div>
      </div>
      <BackgroundSeguridad />
    </div>
  );
};

export default ActualizarContrasenia;
