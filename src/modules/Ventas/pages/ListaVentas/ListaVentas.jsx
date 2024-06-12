import React, { useState } from 'react';
import Listas from '@/components/Listas';
import ModalFormVenta from './components/RegistrarVenta';
import { columnsValue } from './columnsListaVentas';
import { filtrosListaVentas } from '../FiltrosListaVentas/filtroListaVentas';
import './ListaVentas.scss';
import '../FiltrosListaVentas/FiltroListaVentas.scss';
import { handleEliminar } from './funciones';

const ListaVentas = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className="lista-mesas h-full gap-3 min-w-[600px]">
            <Listas
                columnsValue={(multiDelete) => columnsValue(multiDelete)}
                classNameTable="lista-ventas-table"
                classNameFiltros="lista-ventas-filtros"
                filtrosLista={(table, classNameFiltros, setFilteringSearch, filteringSearch) => 
                    filtrosListaVentas(table, classNameFiltros, setFilteringSearch, filteringSearch, openModal)}
                multiDelete={true}
                buttonTittle1="Anular"
                buttonTittle2="Ventas(s)"
                buttonFunction={handleEliminar}
            />
            <ModalFormVenta open={isModalVisible} setOpen={setIsModalVisible} />
        </div>
    );
};

export default ListaVentas;
