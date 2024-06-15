import AuthContext from '@/contexts/AuthContext'
import React, { useContext } from 'react'

const CabeceraModalVenta = () => {
    let { establecimientoData } = useContext(AuthContext)
    return (
        <>
            <div className="flex justify-center items-center">
                <img className="w-36" src={establecimientoData.logo} alt="logo" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold">{establecimientoData.razon_social}</h1>
                <p>{establecimientoData.correo}</p>
                <p>{establecimientoData.sitio_web}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-1 p-5 text-center font-bold border border-gray-300 border-dashed">
                    <p>
                        RUC N° {establecimientoData.ruc}
                    </p>
                    <p className="font-normal text-[12px]">CONSTANCIA DE PEDIDO (PREBOLETA)</p>
                </div>
            </div>
        </>
    )
}

export default CabeceraModalVenta