import React from 'react';
import Listas from '@/components/Listas';
import { columnsValue } from './columnsListaUsuarios';
import { filtrosListaUsuarios } from './FiltrosListaUsuarios/filtrosListaUsuarios';

import './ListaUsuarios.scss';
import './FiltrosListaUsuarios/FiltrosListaUsuarios.scss';
import { USUARIOS_API } from '@/api/SeguridadAPI';

const ListaUsuarios = () => {

    const handleEliminar = (id) => {
        console.log(id)
    }

    return (
        <div className="lista-usuarios h-full gap-3 min-w-[600px">
            <Listas
                api={USUARIOS_API}
                columnsValue={columnsValue}
                classNameTable="lista-usuarios-table"
                classNameFiltros="lista-usuarios-filtros"
                filtrosLista={filtrosListaUsuarios}
                multiDelete={true}
                buttonTittle1="Elimnar"
                buttonTittle2="usuarios(s)"
                buttonFunction={handleEliminar}
            />
        </div>
    );
};

export default ListaUsuarios;
