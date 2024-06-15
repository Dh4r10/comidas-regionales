import React, { useContext, useState } from 'react'
import { faBoxOpen, faBroom } from '@fortawesome/free-solid-svg-icons'
import ButtonAdd from './ButtonAdd'
import CabeceraDetalleProductos from './DetalleProductos/CabeceraDetalleProductos'
import BodyDetalleProductos from './DetalleProductos/BodyDetalleProductos'
import SalonPedidosContext from '@/contexts/SalonPedidosContext'
import ButtonAnt from '@/components/ButtonAnt'

const ListaProductos = (props) => {

    let { setOpenProductoModal, items, setItems } = useContext(SalonPedidosContext)

    const totalPrecioUnitario = items.reduce((acc, item) => acc + item.precio_unitario, 0);

    const eliminarProducto = (codigo) => {
        const itemsRemove = [...items].filter(item => item.codigo !== codigo)
        setItems(itemsRemove)
    }

    const handleLimpiarProductosSeleccionados = () => {
        setItems([])
    }

    const handleProductoModal = () => {
        setOpenProductoModal(true)
    }

    return (
        <div className='grid gap-2 w-full text-xs'>
            <div className='grid grid-cols-[0.3fr,1fr,1fr,0.4fr,0.3fr,0.3fr,0.3fr] gap-1 bg-white font-medium text-center pt-2'>
                <CabeceraDetalleProductos />
            </div>
            <div className='grid gap-1'>
                {items.map(items => (
                    <BodyDetalleProductos key={items.codigo} eliminarProducto={eliminarProducto} items={items} />
                ))}
            </div>
            <div className='grid'>
                <ButtonAdd onClick={handleProductoModal} icon={faBoxOpen} type='dashed' htmlType="button" disabled={false} />
            </div>
            <div className='grid grid-cols-[0.3fr,1fr,1fr,0.4fr,0.3fr,0.3fr,0.3fr]'>
                <div className='grid justify-start'>
                    <ButtonAnt icon={faBroom} htmlType="button" onClick={handleLimpiarProductosSeleccionados} />
                </div>
                <div className='grid grid-cols-[1fr,2fr] col-start-5 col-end-8 gap-1'>
                    <div className='flex justify-center items-center'>
                        <p className='font-bold'>TOTAL</p>
                    </div>
                    <div>
                        <input value={`S/. ${totalPrecioUnitario}`} className='w-full h-full border border-r-slate-300 bg-[#f5f5f5] text-center font-semibold' disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaProductos