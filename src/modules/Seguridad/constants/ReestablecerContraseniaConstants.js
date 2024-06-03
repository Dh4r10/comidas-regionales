import { z } from 'zod';

export const FORM_SCHEMA_REESTABLECER_CONTRASENIA = {
  correo: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .email({
      message: 'Correo electrónico invalido.',
    }),
};

export const DEFAULT_VALUES_REESTABLECER_CONTRASENIA = {
  correo: '',
};
