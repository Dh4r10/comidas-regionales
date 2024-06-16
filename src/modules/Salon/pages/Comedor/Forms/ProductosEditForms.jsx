import FormProductosController from '@/modules/Salon/components/InputsProductos/FormProductosController'
import ModalProductos from '@/modules/Salon/components/ModalSalon/ModalProductos'
import React, { useContext, useEffect, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SalonPedidosContext from '@/contexts/SalonPedidosContext'
import ButtonAnt from '@/components/ButtonAnt'
import { DEFAULT_VALUES_PRODUCTOS_EDIT, FORM_SCHEMA_PRODUCTOS_EDIT } from '../constants/ProductosEditConstants'

const ProductosEditForms = (props) => {
    let { openProductoEditModal, setOpenProductoEditModal, items, setItems, resetValues, reduceDecimal, selectedToEdit } = useContext(SalonPedidosContext)

    const [defEdit, setDefEdit] = useState(DEFAULT_VALUES_PRODUCTOS_EDIT)
    console.log("anteiores items: ", items)

    const schema = FORM_SCHEMA_PRODUCTOS_EDIT;

    const defaults = defEdit;

    const formSchema = z.object(schema);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaults
    });

    useEffect(() => {
        if (selectedToEdit) {
            form.reset({
                descripcion_producto_edit: selectedToEdit.descripcion,
                cantidad_producto_edit: selectedToEdit.cantidad,
            });
        }
    }, [selectedToEdit, form]);


    const handleCancel = () => {
        setOpenProductoEditModal(false)
        resetValues(form)
    }

    const onSubmit = (values) => {
        const updateItem = {
            ...selectedToEdit,
            descripcion: values.descripcion_producto_edit,
            cantidad: values.cantidad_producto_edit
        }

        console.log("item actualizado: ", updateItem)

        const updateItems = items.map(item =>
            item.codigo === updateItem.codigo ? updateItem : item
        )

        setOpenProductoEditModal(false)
        setItems(updateItems)
        resetValues(form)
    };

    const cantidadProducto = form.watch("cantidad_producto_edit")

    return (
        <ModalProductos open={openProductoEditModal} setOpen={setOpenProductoEditModal} form={form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid gap-2'>
                    <div className='linea-texto pr-5 text-gray-700'>
                        <p className='px-5'>Seleccionar producto</p>
                    </div>
                    <div className='modal-productos__body grid gap-2'>
                        <div className='modal-productos__body-info-producto gap-1'>
                            <div className='modal-productos__body-info-producto-data gap-2'>
                                <FormProductosController control={form.control} type="number" name="codigo_producto_edit" placeholder="Código" disabled={true} value={selectedToEdit?.codigo} />
                                <FormProductosController control={form.control} type="input" name="producto_producto_edit" placeholder="" disabled={true} value={selectedToEdit?.nombre} />
                            </div>
                            <div className='modal-productos__body-info-producto-descripcion'>
                                <FormProductosController control={form.control} type="input" name="descripcion_producto_edit" placeholder="Descripcion (Opcional)" />
                            </div>
                        </div>
                        <div className='linea-texto-totales  pr-5 text-gray-700 text-left'>
                            <p className='px-5'>Importes</p>
                        </div>
                        <div className='modal-productos__body-precios'>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="precio_unitario_producto_edit">P. Unitario</label>
                                <FormProductosController control={form.control} type="number" name="precio_unitario_producto_edit" placeholder="" disabled={true} value={selectedToEdit?.precio_unitario} />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="cantidad_producto_edit">Cantidad</label>
                                <FormProductosController control={form.control} type="number" name="cantidad_producto_edit" placeholder="" />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="total_edit">Importe total</label>
                                <FormProductosController control={form.control} type="number" name="total_edit" placeholder="" disabled={true} value={reduceDecimal(selectedToEdit?.precio_unitario * cantidadProducto)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end gap-2 mt-2'>
                    <ButtonAnt disabled={false} htmlType="button" type="default" tittle="Cancelar" onClick={handleCancel} />
                    <ButtonAnt disabled={false} htmlType="submit" type="primary" tittle="Enviar" />
                </div>
            </form>
        </ModalProductos>
    )
}

export default ProductosEditForms