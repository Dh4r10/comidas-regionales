import { z } from "zod";

export const FORM_SCHEMA_PRODUCTOS = {
  producto_producto: z.object({
    codigo: z.number().min(1, "Requerido"),
    label: z.string().min(1, "Requerido"),
    precio: z.number().min(1, "Requerido"),
    value: z.string().min(1, "Requerido"),
  }),
  descripcion_producto: z.string().min(1, "Requerido"),
  cantidad_producto: z.preprocess((value) => {
    // Si el valor es un string, intenta convertirlo a número
    if (typeof value === "string") {
      return parseFloat(value);
    }
    // Devuelve el valor tal como está si no es un string
    return value;
  }, z.number().positive().nonnegative().min(1, "Es requerido")),
};

export const DEFAULT_VALUES_PRODUCTOS = {
  producto_producto: "",
  descripcion_producto: "SIN INDICACIONES",
  cantidad_producto: "",
};
