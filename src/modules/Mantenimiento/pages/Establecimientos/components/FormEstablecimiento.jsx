import React, { useState } from "react";
import "./FormEstablecimiento.scss";
//Para el formulario
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalConfirmacion from "@/modules/Mantenimiento/components/modalConfirmacion";
import { postAxios } from "@/modules/Mantenimiento/components/methods";
//Para los datos del local
import logoEstablecimiento from "/public/img/image.png";
const FormSchema = z.object({
  nombre: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  ruc: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telefono: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  correo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  razon_social: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  sitio_web: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  representante_legal: z.string().min(0, {
    message: "Username must be at least 2 characters.",
  }),
});
import Inputs from "@/modules/Mantenimiento/components/Inputs";
import { SelectForm } from "./SelectForm";
import Component from "@/modules/Mantenimiento/components/Table";
import ModalFormRepresentante from "@/modules/Mantenimiento/components/ModalFormRepresentante";
export default function FormEstablecimiento(props) {
  const { establecimiento } = props;
  const [datosEstablecimiento, setDatosEstablecimiento] = useState(
    establecimiento[0]
  );
  const [open, setOpen] = useState(false);
  const { sitio_web, ruc, representante_legal, logo, razon_social } =
    datosEstablecimiento;
  const { nombre, apellido_materno, apellido_paterno } = representante_legal;
  const nameRepresendate = `${nombre} ${apellido_paterno} ${apellido_materno}`;
  const [mostrar, setMostrar] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      ruc: "",
      telefono: "",
      razon_social: "",
      sitio_web: "",
      representante_legal: "",
      correo: "",
    },
  });
  const [data, setData] = useState();
  const [openI, setOpenI] = useState(false);
  function onSubmit(data) {
    setOpen(true);
    setData(data);
    console.log(data);
  }
  // const URLESTABLECIMIENTO = "http://localhost:3032/api/establecimiento";
  // function postEstablecimiento() {
  //   postAxios(URLESTABLECIMIENTO, data);
  // }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="establecimiento">
            <div className="establecimiento-form">
              <div className="establecimiento-form_uno">
                <Inputs form={form} name="nombre" label="Nombre:" />
                <Inputs form={form} name="ruc" label="R.U.C:" />
                <Inputs form={form} name="razon_social" label="Razon Social:" />
              </div>
              <div className="establecimiento-form_dos">
                <Inputs
                  form={form}
                  name="telefono"
                  label="Telefono:"
                  type="number"
                />
                <Inputs form={form} name="correo" label="Correo:" />
                <Inputs form={form} name="sitio_web" label="Sitio Web:" />
              </div>
              <div className="establecimiento-form_tres">
                <SelectForm
                  form={form}
                  name="representante_legal"
                  label="Representate Legal:"
                  setOpenI={setOpenI}
                  desabilitar={true}
                />
                <Button className="button-guardar">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  Guardar
                </Button>
              </div>
            </div>
            <div className="establecimiento-tabla">
              <div className="bg-white">
                <Component
                  setMostrar={setMostrar}
                  establecimiento={establecimiento}
                  setDatosEstablecimiento={setDatosEstablecimiento}
                  setOpen={setOpen}
                />
              </div>

              <div className="establecimiento-tabla_informacion ">
                {mostrar && (
                  <>
                    <div className="flex justify-center ">
                      <img
                        src={logo}
                        alt="logo.png"
                        className="establecimiento-tabla_informacion-foto"
                      />
                    </div>
                    <div className="establecimiento-tabla_informacion-datos">
                      <div className="font-bold text-[#7ccc4f]">
                        <p>Representate Legal:</p>
                        <p>Sitio Web:</p>
                        <p>R.U.C:</p>
                        <p>Razon Social:</p>
                      </div>
                      <div>
                        <p>{nameRepresendate}</p>
                        <p>{sitio_web}</p>
                        <p>{ruc}</p>
                        <p>{razon_social}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </Form>
      <ModalConfirmacion open={open} setOpen={setOpen} />
      <ModalFormRepresentante openI={openI} setOpenI={setOpenI} />
    </>
  );
}