import React, { useState } from 'react';
import { Modal } from 'antd';

import './ModalSalon.scss'

const ModalSalon = (props) => {

  const { children, title, open, setOpen } = props;

  // const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');

  // const handleOk = () => {
  //   setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Modal
      width={800}
      title={title}
      centered
      open={open}
      // onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={handleCancel}
      className='modal-salon'
      footer={false}
    >
      {children}
    </Modal>
  );
};
export default ModalSalon;