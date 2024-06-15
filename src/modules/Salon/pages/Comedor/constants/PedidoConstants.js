import { z } from "zod";
import dayjs from "dayjs";

const fechaActual = dayjs().format("YYYY-MM-DD");

export const FORM_SCHEMA_PEDIDO = {
  fechaPedido: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  tipoPedido: z.string().min(1, {
    message: "Este campo es requerido",
  }),
};

export const DEFAULT_VALUES_PEDIDO = {
  fechaPedido: fechaActual,
  tipoPedido: "SALON",
};
