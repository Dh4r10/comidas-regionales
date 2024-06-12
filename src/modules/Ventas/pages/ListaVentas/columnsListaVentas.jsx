import React, { useContext, useMemo } from 'react'
import ListasContext from '@/contexts/ListasContext';
import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox';
import { handleEliminar } from './funciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
export const columnsValue = (multiDelete) => {

    let { reload } = useContext(ListasContext);

    const values = useMemo(() => {
        const columns = [
            multiDelete && {
                id: 'select',
                header: ({ table }) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                ),
                cell: ({ row }) => (
                    <div className="px-1">
                        <IndeterminateCheckbox
                            {...{
                                checked: row.getIsSelected(),
                                disabled: !row.getCanSelect(),
                                indeterminate: row.getIsSomeSelected(),
                                onChange: row.getToggleSelectedHandler(),
                            }}
                        />
                    </div>
                ),
            },
            {
                accessorKey: "id",
                header: "ID",
                cell: info => info.getValue()
            },
            {
                accessorFn: row => row.last_name,
                id: "codigoRecibo",
                cell: info => info.getValue(),
                header: "CODIGO RECIBO"
            },
            {
                accessorFn: row => `${row.first_name} ${row.last_name}`,
                id: "descripcion",
                header: "DESCRIPCION",
                cell: info => info.getValue()
            },
            {
                accessorKey: "tipoComprobante",
                header: () => "TIPO COMPROBANTE",
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorKey: "metodoPago",
                header: () => "METODO PAGO",
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorKey: "tipoPago",
                header: "TIPO PAGO",
                cell: info => info.getValue()
            },
            {
                accessorKey: "fechaEmision",
                header: "FECHA EMISION",
            },
            {
                accessorKey: "fechaVencimiento",
                header: "FECHA VENCIMIENTO",
            },
            {
                header: "ACCIONES",
                cell: ({ id }) => (
                    <div className="flex space-x-2 justify-end">
                    <button
                        className="bg-cyan-500 text-white px-3 py-2 rounded flex items-center justify-center">
                        <FontAwesomeIcon icon={faEye} className="text-xl" />
                    </button>
                
                    <button
                        onClick={() => handleEliminar(id)}
                        className="bg-red-500 text-white px-3 py-2 rounded flex items-center justify-center">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-xl" />
                    </button>
                </div>
                )
                
            }
        ]

        return columns.filter(Boolean)
    }, [reload, multiDelete]);

    return values;
};
