import React, { useContext, useState } from 'react';
import { Modal } from 'antd';

import './ModalProductos.scss'
import SalonPedidosContext from '@/contexts/SalonPedidosContext';

const ModalProductos = (props) => {

    let { resetValues } = useContext(SalonPedidosContext)

    const { children, open, setOpen, form } = props;

    const [confirmLoading, setConfirmLoading] = useState(false);

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