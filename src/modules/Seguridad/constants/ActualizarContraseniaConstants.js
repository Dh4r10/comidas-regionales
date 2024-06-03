import { z } from 'zod';

export const FORM_SCHEMA_ACTUALIZAR_CONTRASENIA = {
  username: z.string().min(1, {
    message: 'Este campo es requerido',
  }),
  password: z.string().min(1, {
    message: 'Este campo es requerido',
  }),
  repeatPassword: z.string().min(1, {
    message: 'Este campo es requerido',
  }),
};

export const DEFAULT_VALUES_ACTUALIZAR_CONTRASENIA = {
  username: '',
  password: '',
  repeatPassword: '',
};
