import React, { useContext, useMemo } from 'react'
import ListasContext from '@/contexts/ListasContext';
import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox';

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
                accessorFn: row => `${row.nombre} ${row.apellidoPaterno} ${row.apellidoMaterno}`,
                id: "fullName",
                header: "NOMBRE",
                cell: info => info.getValue()
            },
            {
                accessorKey: "tipoUsuario.nombre",
                header: () => <span>TIPO DE USUARIO</span>,
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorKey: "correo",
                header: () => "EMAIL",
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorFn: row => `${row.ultimoIngresoFecha} ${row.ultimoIngresoHora}`,
                id: "ultimoIngreso",
                header: "ULTIMO INGRESO",
                cell: info => info.getValue()
            },
        ]

        return columns.filter(Boolean)
    }, [reload, multiDelete]);

    return values;
};
