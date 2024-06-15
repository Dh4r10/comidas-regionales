import React, { useContext, useState } from 'react'
import DateVentaController from '@/modules/Salon/components/DateVentaController';
import CabeceraModalVenta from '@/modules/Salon/components/CabeceraModalVenta'
import { DEFAULT_VALUES_PEDIDO, FORM_SCHEMA_PEDIDO } from '../constants/PedidoConstants';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ListaProductos from '@/modules/Salon/components/ListaProductos';
import ModalSalon from '@/modules/Salon/components/ModalSalon/ModalSalon';
import SalonPedidosContext from '@/contexts/SalonPedidosContext';
import ButtonAnt from '@/components/ButtonAnt';
import { postAxios } from '@/functions/simpleMethods';
import { DETTALLE_PEDIDO_API } from '@/api/SalonAPI';
import AuthContext from '@/contexts/AuthContext';
import ButtonAntAsync from '@/components/ButtonAntAsync';
import { ToastContainer, toast } from 'react-toastify';

const PedidoForms = (props) => {

    let { authTokens } = useContext(AuthContext)
    let { openPedido, setOpenPedido, items, idsSelected, setIdsSelected } = useContext(SalonPedidosContext)

    const [confirmLoading, setConfirmLoading] = useState(false)
    const [errorPedido, setErrorPedido] = useState(null)

    const formSchema = z.object(FORM_SCHEMA_PEDIDO);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_VALUES_PEDIDO
    });

    const onSubmit = async (values) => {
        if (items.length > 0) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens?.token),
            };

            const listaPedidos = items.map(item => (
                {
                    idProducto: item.codigo,
                    cantidad: item.cantidad,
                    descripcion: item.descripcion
                }
            ))

            const listaMesas = idsSelected.map(idSelected => (
                { idMesa: idSelected }
            ))

            const resetMesas = () => {
                setIdsSelected([])
            }

            const newValues = { fecha: values.fechaPedido, tipoPedido: values.tipoPedido, listaPedidos, listaMesas }
            await postAxios(DETTALLE_PEDIDO_API, newValues, headers, setConfirmLoading, setErrorPedido, resetMesas)
            setOpenPedido(false)
        } else {
            toast.error("Selecciona un producto")
        }
    };

    const handleCancel = () => {
        setOpenPedido(false)
    }

    return (
        <ModalSalon title="Registrar pedido" open={openPedido} setOpen={setOpenPedido}>
            <form className="mesas__formulario-salon gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mesas__formulario-salon-cabecera gap-3">
                    <CabeceraModalVenta />
                </div>
                <div className='flex gap-2 items-center pb-3'>
                    <label htmlFor="fecha">
                        <p className='text-sm text-slate-600'>F. Pedido</p>
                    </label>
                    <DateVentaController control={form.control} name="fechaPedido" disabled={true} placeholder="" />
                </div>
                <div className='border-t pt-1'>
                    <ListaProductos />
                </div>
                <div className='flex justify-end gap-2 mt-2'>
                    <ButtonAnt disabled={false} htmlType="button" type="default" tittle="Cancelar" onClick={handleCancel} />
                    <ButtonAntAsync disabled={confirmLoading} htmlType="submit" type="primary" tittle="Enviar" />
                    <ToastContainer position="bottom-left" limit={1} stacked closeOnClick theme="colored" />
                </div>
            </form>
        </ModalSalon>
    )
}

export default PedidoForms;