import { z } from 'zod';

export const FORM_SCHEMA_INICIAR_SESION = {
  username: z.string().min(1, {
    message: 'Este campo es requerido.',
  }),
  password: z.string().min(1, {
    message: 'Este campo es requerido.',
  }),
};

export const DEFAULT_VALUES_INICIAR_SESION = {
  username: '',
  password: '',
};
