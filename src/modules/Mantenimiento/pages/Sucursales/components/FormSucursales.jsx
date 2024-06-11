import React, { useState } from "react";
import "./FormSucursales.scss";
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
  direccion: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telefono: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  departamento_direccion: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  provincia_direccion: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  distrito_direccion: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  idEstablecimiento: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  referencia: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
import Inputs from "@/modules/Mantenimiento/components/Inputs";
import { SelectForm } from "../../Establecimientos/components/SelectForm";
import Component from "./Table";
import ModalFormRepresentante from "@/modules/Mantenimiento/components/ModalFormRepresentante";
export default function FormSucursales(props) {
  const { establecimiento, sucursales } = props;
  const [datosEstablecimiento, setDatosEstablecimiento] = useState(
    establecimiento[0]
  );
  const [datosSucursales, setDatosSucursales] = useState(sucursales[0]);
  const [open, setOpen] = useState(false);
  const {
    direccion,
    telefono,
    idEstablecimiento,
    provincia,
    distrito_direccion,
    departamento_direccion,
    provincia_direccion,
  } = datosSucursales;
  const { logo } = idEstablecimiento;
  const [mostrar, setMostrar] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      direccion: "",
      telefono: "",
      departamento_direccion: "",
      provincia_direccion: "",
      distrito_direccion: "",
      idEstablecimiento: "",
      referencia: "",
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
                <Inputs
                  form={form}
                  name="telefono"
                  label="Telefono:"
                  type="number"
                />
                <Inputs form={form} name="direccion" label="Direccion:" />
              </div>
              <div className="establecimiento-form_dos">
                <Inputs
                  form={form}
                  name="departamento_direccion"
                  label="Departamento:"
                />
                <Inputs
                  form={form}
                  name="provincia_direccion"
                  label="Provincia:"
                />
                <Inputs
                  form={form}
                  name="distrito_direccion"
                  label="Distrito:"
                />
              </div>
              <div className="establecimiento-form_tres">
                <SelectForm
                  form={form}
                  name="idEstablecimiento"
                  label="Establecimiento:"
                  setOpenI={setOpenI}
                  desabilitar={false}
                />
                <Inputs form={form} name="referencia" label="Referencia:" />

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
                  sucursales={sucursales}
                  setDatosEstablecimiento={setDatosEstablecimiento}
                  setOpen={setOpen}
                  setDatosSurcursales={setDatosSucursales}
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
                        <p>Establecimiento:</p>
                        <p>Direccion:</p>
                        <p>Departamento:</p>
                        <p>Provincia:</p>
                        <p>Distrito:</p>
                      </div>
                      <div>
                        <p>{idEstablecimiento.razon_social}</p>
                        <p>{direccion}</p>
                        <p>{departamento_direccion}</p>
                        <p>{provincia_direccion}</p>
                        <p>{distrito_direccion}</p>
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
