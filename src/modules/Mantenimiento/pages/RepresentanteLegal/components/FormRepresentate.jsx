import React, { useState } from "react";
import "./FormRepresentate.scss";
import ModalFormRepresentante from "@/modules/Mantenimiento/components/ModalFormRepresentante";
import TableRepresentante from "./TableRepresentante";
import { Button } from "@/components/ui/button";
import { deleteAxios } from "@/modules/Mantenimiento/components/methods";
export default function FormRepresentate(props) {
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState();
  const { representante, setCambio, cambio, token } = props;
  function deleteRepresentante(id) {
    const url = `http://regionales.app.informaticapp.com:3033/api/v1/representante-legal/${id}`;
    deleteAxios(url, setCambio, cambio, setSpin, token);
  }
  return (
    <div className="representate">
      <div className="representate-uno bg-white">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Agregar Representate
        </Button>
      </div>
      <div className="representate-dos bg-white">
        <TableRepresentante
          representante={representante}
          deleteRepresentante={deleteRepresentante}
        />
      </div>
      <ModalFormRepresentante
        openI={open}
        setOpenI={setOpen}
        setCambio={setCambio}
        cambio={cambio}
        token={token}
        setSpin={setSpin}
        //deleteEstablecimiento={deleteEstablecimiento}
      />
    </div>
  );
}
