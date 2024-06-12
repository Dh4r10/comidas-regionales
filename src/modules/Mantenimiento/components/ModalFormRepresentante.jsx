import React, { useState } from "react";
import "./ModalFormRepresentante.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import Inputs from "./Inputs";
import { postAxios } from "./methods";
const FormSchema = z.object({
  nombre: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  dni: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telefono: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  correo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  apellido_materno: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  apellido_paterno: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const ModalFormRepresentante = (props) => {
  const { openI, setOpenI, cambio, setCambio, token, setSpin } = props;
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      dni: "",
      telefono: "",
      apellido_materno: "",
      apellido_paterno: "",
      correo: "",
    },
  });
  const URLREPRESENTANTE =
    "http://regionales.app.informaticapp.com:3033/api/v1/representante-legal";
  async function onClick(values) {
    console.log(values);
    await postAxios(
      URLREPRESENTANTE,
      values,
      setCambio,
      cambio,
      setSpin,
      token
    );
    form.reset();
    setOpenI(false);
  }
  function handleSubmit() {
    form.handleSubmit(onClick)();
  }
  return (
    <>
      <Modal
        title="AGREGAR REPRESENTANTE"
        centered
        open={openI}
        onOk={handleSubmit}
        onCancel={() => setOpenI(false)}
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
            <div className="representante-form">
              <Inputs form={form} name="dni" label="D.N.I:" />
              <Inputs form={form} name="nombre" label="Nombre:" />
              <Inputs
                form={form}
                name="apellido_paterno"
                label="Apellido Paterno:"
              />
              <Inputs
                form={form}
                name="apellido_materno"
                label="Apellido materno:"
              />
              <Inputs form={form} name="correo" label="Correo:" />

              <Inputs form={form} name="telefono" label="Telefono:" />
            </div>
          </form>
        </Form>
      </Modal>
    </>
  );
};
export default ModalFormRepresentante;
