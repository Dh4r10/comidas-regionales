import FormProductosController from '@/modules/Salon/components/InputsProductos/FormProductosController'
import ModalProductos from '@/modules/Salon/components/ModalSalon/ModalProductos'
import React, { useContext } from 'react'
import { z } from 'zod'
import { FORM_SCHEMA_PRODUCTOS, DEFAULT_VALUES_PRODUCTOS, } from '../constants/ProductosConstants'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SalonPedidosContext from '@/contexts/SalonPedidosContext'
import ButtonAnt from '@/components/ButtonAnt'

const ProductosForms = (props) => {
    let { openProductoModal, setOpenProductoModal, selectedProducto, setSelectedProducto, items, setItems, resetValues, reduceDecimal } = useContext(SalonPedidosContext)

    const schema = FORM_SCHEMA_PRODUCTOS;

    const defaults = DEFAULT_VALUES_PRODUCTOS

    const formSchema = z.object(schema);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaults
    });

    const handleCancel = () => {
        setOpenProductoModal(false)
        resetValues(form)
    }

    const onSubmit = (values) => {
        const valuesTransform = {
            codigo: values.producto_producto.codigo,
            nombre: values.producto_producto.label,
            descripcion: values.descripcion_producto,
            cantidad: values.cantidad_producto,
            precio_unitario: values.producto_producto.precio
        }

        setOpenProductoModal(false)

        console.log(valuesTransform)

        const itemsAdd = [...items, valuesTransform]
        setItems(itemsAdd)

        resetValues(form)
    };

    const cantidadProducto = form.watch("cantidad_producto")

    return (
        <ModalProductos open={openProductoModal} setOpen={setOpenProductoModal} form={form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid gap-2'>
                    <div className='linea-texto pr-5 text-gray-700'>
                        <p className='px-5'>Seleccionar producto</p>
                    </div>
                    <div className='modal-productos__body grid gap-2'>
                        <div className='modal-productos__body-info-producto gap-1'>
                            <div className='modal-productos__body-info-producto-data gap-2'>
                                <FormProductosController control={form.control} type="number" name="codigo_producto" placeholder="Código" disabled={true} value={selectedProducto.codigo} />
                                <FormProductosController control={form.control} type="selectAsync" name="producto_producto" placeholder="" disabled={false} setSelectedValue={setSelectedProducto} />
                            </div>
                            <div className='modal-productos__body-info-producto-descripcion'>
                                <FormProductosController control={form.control} type="input" name="descripcion_producto" placeholder="Descripcion (Opcional)" />
                            </div>
                        </div>
                        <div className='linea-texto-totales  pr-5 text-gray-700 text-left'>
                            <p className='px-5'>Importes</p>
                        </div>
                        <div className='modal-productos__body-precios'>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="precio_unitario_producto">P. Unitario</label>
                                <FormProductosController control={form.control} type="number" name="precio_unitario_producto" placeholder="" disabled={true} value={selectedProducto.precio} />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="cantidad_producto">Cantidad</label>
                                <FormProductosController control={form.control} type="number" name="cantidad_producto" placeholder="" />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="total">Importe total</label>
                                <FormProductosController control={form.control} type="number" name="total" placeholder="" disabled={true} value={cantidadProducto === "" ? 0 : reduceDecimal(cantidadProducto * selectedProducto.precio)} />
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

export default ProductosForms