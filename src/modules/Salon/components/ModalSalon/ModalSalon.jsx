import React, { useContext, useState } from 'react';
import { Modal } from 'antd';

import './ModalSalon.scss'
import SalonPedidosContext from '@/contexts/SalonPedidosContext';

const ModalSalon = (props) => {

  let { resetListaProductos } = useContext(SalonPedidosContext)

  const { children, title, open, setOpen } = props;

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    resetListaProductos()
  };
  return (
    <Modal
      width={800}
      title={title}
      centered
      open={open}
      onCancel={handleCancel}
      className='modal-salon'
      footer={false}
    >
      {children}
    </Modal>
  );
};
export default ModalSalon;