import { z } from "zod";

export const FORM_SCHEMA_PRODUCTOS_EDIT = {
  descripcion_producto_edit: z.string().min(1, "Requerido"),
  cantidad_producto_edit: z.preprocess((value) => {
    // Si el valor es un string, intenta convertirlo a número
    if (typeof value === "string") {
      return parseFloat(value);
    }
    // Devuelve el valor tal como está si no es un string
    return value;
  }, z.number().positive().nonnegative().min(1, "Es requerido")),
};

export const DEFAULT_VALUES_PRODUCTOS_EDIT = {
  descripcion_producto_edit: "",
  cantidad_producto_edit: "",
};
