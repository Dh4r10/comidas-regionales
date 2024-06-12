import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const ModalEliminar = (props) => {
  const { open, setOpen, deleteEstablecimiento } = props;
  function oktext() {
    deleteEstablecimiento();
    setOpen(false);
  }
  return (
    <>
      <Modal
        title="Eliminar"
        open={open}
        onOk={oktext}
        onCancel={oktext}
        maskClosable
        okText="Aceptar"
        cancelText="Cancelar"
        okButtonProps={{
          style: {
            backgroundColor: "green",
            borderColor: "green",
            color: "white",
          },
        }}
      >
        <div className="flex gap-2">
          <ExclamationCircleOutlined className="text-[#fbab04]" />
          <p>¿Está seguro de elminar este registro?</p>
        </div>
      </Modal>
    </>
  );
};
export default ModalEliminar;
