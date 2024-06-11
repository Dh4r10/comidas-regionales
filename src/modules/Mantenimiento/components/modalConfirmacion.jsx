import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const ModalConfirmacion = (props) => {
  const { open, setOpen, postEstablecimiento } = props;
  function oktext() {
    // postEstablecimiento();
    setOpen(false);
  }
  return (
    <>
      <Modal
        title="Confirmar"
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
          <p>¿Está seguro de realizar esta acción?</p>
        </div>
      </Modal>
    </>
  );
};
export default ModalConfirmacion;
