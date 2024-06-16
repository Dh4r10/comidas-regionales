import React, { useContext } from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import SalonPedidosContext from '@/contexts/SalonPedidosContext'

const BodyDetalleProductos = (props) => {

    let { reduceDecimal } = useContext(SalonPedidosContext)

    const { items, eliminarProducto, editarProducto } = props

    return (
        <div className='grid grid-cols-[0.3fr,1fr,1fr,0.4fr,0.3fr,0.3fr,0.3fr] gap-1 text-center text-[#727272]'>
            <div>
                <input value={items.codigo} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-center' disabled />
            </div>
            <div>
                <input value={items.nombre} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-left px-2' disabled />
            </div>
            <div>
                <input value={items.descripcion} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-left px-2' disabled />
            </div>
            <div>
                <input value={items.cantidad} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-center' disabled />
            </div>
            <div>
                <input value={reduceDecimal(items.precio_unitario)} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-center' disabled />
            </div>
            <div>
                <input value={reduceDecimal(items.precio_unitario * items.cantidad)} className='w-full h-[30px] border border-r-slate-300 bg-[#f5f5f5] text-center' disabled />
            </div>
            <div className='flex justify-center items-center gap-1'>
                <Button className='rounded-none' size='small' type='text' icon={<FontAwesomeIcon icon={faPen} className='text-[12px]' onClick={() => editarProducto(items.codigo)} />} />
                <Button className='rounded-none' size='small' type='text' icon={<FontAwesomeIcon icon={faTrash} onClick={() => eliminarProducto(items.codigo)} className='text-[12px]' />} />
            </div>
        </div>
    )
}

export default BodyDetalleProductos