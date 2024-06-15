import React, { useContext } from 'react';
import Listas from '@/components/Listas';
import { columnsValue } from './columnsListaMesas';
import { filtrosListaMesas } from './FiltrosListaMesas/filtrosListaMesas';

import './ListaMesas.scss';
import './FiltrosListaMesas/FiltrosListaMesas.scss';
import { MESAS_API } from '@/api/SalonAPI';

const ListaMesas = () => {

    const handleEliminar = (id) => {
        console.log(id)
    }

    return (
        <div className={`lista-mesas gap-3`}>
            <Listas
                api={MESAS_API}
                columnsValue={columnsValue}
                classNameTable="lista-mesas-table"
                classNameFiltros="lista-mesas-filtros"
                filtrosLista={filtrosListaMesas}
                multiDelete={true}
                buttonTittle1="Elimnar"
                buttonTittle2="Mesa(s)"
                buttonFunction={handleEliminar}
            />
        </div>
    );
};

export default ListaMesas;
