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
                accessorFn: row => row.last_name,
                id: "last_name",
                cell: info => info.getValue(),
                header: "LAST"
            },
            {
                accessorFn: row => `${row.first_name} ${row.last_name}`,
                id: "fullName",
                header: "NAME",
                cell: info => info.getValue()
            },
            {
                accessorKey: "email",
                header: () => "EMAIL",
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorKey: "gender",
                header: () => <span>GENDER</span>,
                // meta: {
                //   filterVariant: "select"
                // }
            },
            {
                accessorKey: "ip_address",
                header: "IP ADDRESS",
            }
        ]

        return columns.filter(Boolean)
    }, [reload, multiDelete]);

    return values;
};
