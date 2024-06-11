import React from 'react'

import './CrearMesa.scss'

const CrearMesa = () => {
    return (
        <form className='crear-mesa overflow-auto gap-1'>
            <div className='flex justify-center items-center border-[1px] dark:border-[#242424] py-3'>
                <div className='border-[1px] dark:border-[#242424]'>
                    card
                </div>
            </div>
            <div className='flex justify-end items-start gap-3'>Botones</div>
        </form>
    )
}

export default CrearMesa