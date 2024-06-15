import React, { useContext, useState } from 'react';
import { Modal } from 'antd';
import ButtonAnt from '@/components/ButtonAnt';

import './ModalProductos.scss'
import SalonPedidosContext from '@/contexts/SalonPedidosContext';

const ModalProductos = (props) => {

    let { resetValues } = useContext(SalonPedidosContext)

    const { children, open, setOpen, form } = props;

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    // const handleOk = () => {
    //     setModalText('The modal will be closed after two seconds');
    //     setConfirmLoading(true);
    //     setTimeout(() => {
    //         setOpen(false);
    //         setConfirmLoading(false);
    //     }, 2000);
    // };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        resetValues(form)
        setOpen(false);
    };
    return (
        <Modal
            width={500}
            centered
            open={open}
            // onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            className='modal-productos'
            footer={false}

        >
            {children}
        </Modal>
    );
};
export default ModalProductos;