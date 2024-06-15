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
                accessorKey: "numero",
                cell: info => info.getValue(),
                header: "NUMERO"
            },
            {
                accessorKey: "tipoMesa",
                header: "TIPO MESA",
                cell: info => info.getValue()
            },
            {
                accessorKey: "capacidad",
                header: () => "CAPACIDAD",
                cell: info => `${info.getValue()}  personas`
            },
            {
                accessorKey: "area.nombre",
                header: () => <span>SALON</span>,
                cell: info => info.getValue()
                // meta: {
                //   filterVariant: "select"
                // }
            },
        ]

        return columns.filter(Boolean)
    }, [reload, multiDelete]);

    return values;
};
