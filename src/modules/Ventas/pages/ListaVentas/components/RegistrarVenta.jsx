import React, { useState } from "react";
import "./RegistrarVenta.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import Input from "./Input";
import { DatePicker } from "antd";
import { Checkbox } from "antd";

const FormSchema = z.object({
  codigoRecibo: z.string().min(2, {
    message: "El código del recibo debe tener al menos 2 caracteres.",
  }),
  descripcion: z.string().min(2, {
    message: "La descripción debe tener al menos 2 caracteres.",
  }),
  tipoComprobante: z.string().min(2, {
    message: "El tipo de comprobante debe tener al menos 2 caracteres.",
  }),
  metodoPago: z.string().min(2, {
    message: "El método de pago debe tener al menos 2 caracteres.",
  }),
  tipoPago: z.string().min(2, {
    message: "El tipo de pago debe tener al menos 2 caracteres.",
  }),
  fechaEmision: z.string(),
  fechaVencimiento: z.string(),
  cancelado: z.boolean(),
  estado: z.boolean(),
});

const ModalFormVenta = (props) => {
  const { open, setOpen } = props;
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      codigoRecibo: "",
      descripcion: "",
      tipoComprobante: "",
      metodoPago: "",
      tipoPago: "",
      fechaEmision: "",
      fechaVencimiento: "",
      cancelado: false,
      estado: false,
    },
  });

  const onClick = (values) => {
    console.log(values);
    form.reset();
    setOpen(false);
  };

  const handleSubmit = () => {
    form.handleSubmit(onClick)();
  };

  return (
    <>
      <Modal
        title="AGREGAR VENTA"
        centered
        visible={open}
        onOk={handleSubmit}
        onCancel={() => setOpen(false)}
        okButtonProps={{
          style: {
            backgroundColor: "green",
            borderColor: "green",
            color: "white",
          },
        }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit()}>
            <div className="venta-form">
              <Input form={form} name="codigoRecibo" label="Código del recibo:" />
              <Input form={form} name="descripcion" label="Descripción:" />
              <Input form={form} name="tipoComprobante" label="Tipo de comprobante:" />
              <Input form={form} name="metodoPago" label="Método de pago:" />
              <Input form={form} name="tipoPago" label="Tipo de pago:" />
              <div>
                <label>Fecha de emisión:</label>
                <DatePicker
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => form.setValue("fechaEmision", dateString)}
                />
              </div>
              <div>
                <label>Fecha de vencimiento:</label>
                <DatePicker
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => form.setValue("fechaVencimiento", dateString)}
                />
              </div>
              <div>
                <label>Cancelado:</label>
                <Checkbox onChange={(e) => form.setValue("cancelado", e.target.checked)} />
              </div>
              <div>
                <label>Estado:</label>
                <Checkbox onChange={(e) => form.setValue("estado", e.target.checked)} />
              </div>
            </div>
          </form>
        </Form>
      </Modal>
    </>
  );
};

export default ModalFormVenta;
