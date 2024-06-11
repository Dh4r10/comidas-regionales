import React from 'react';
import Listas from '@/components/Listas';
import { columnsValue } from './columnsListaUsuarios';
import { filtrosListaUsuarios } from './FiltrosListaUsuarios/filtrosListaUsuarios';

import './ListaUsuarios.scss';
import './FiltrosListaUsuarios/FiltrosListaUsuarios.scss';

const ListaUsuarios= () => {

    const handleEliminar = (id) => {
        console.log(id)
    }

    return (
        <div className="lista-usuarios h-full gap-3 min-w-[600px">
            <Listas
                columnsValue={columnsValue}
                classNameTable="lista-mesas-table"
                classNameFiltros="lista-usuarios-filtros"
                filtrosLista={filtrosListaUsuarios}
                multiDelete={true}
                buttonTittle1="Elimnar"
                buttonTittle2="Mesa(s)"
                buttonFunction={handleEliminar}
            />
        </div>
    );
};

export default ListaUsuarios;
