import React from 'react';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { gender } from '../../data/options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const filtrosListaVentas = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch,
  openModal
) => {
  return (
    <div className={`flex flex-col ${classNameFiltros}__caja gap-3 relative`}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={1}
            title="ID:"
            options={gender}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={2}
            title="LAST:"
            options={gender}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={3}
            title="NAME:"
            options={gender}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={4}
            title="EMAIL:"
            options={gender}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={5}
            title="GENDER:"
            options={gender}
          />
        </div>
      ))}
      <div className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}>
        <InputFiltros
          filteringSearch={filteringSearch}
          setFilteringSearch={setFilteringSearch}
        />
      </div>
      <div className="flex items-center mt-4">
        <button onClick={openModal} className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg flex items-center">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Registrar Venta
        </button>
      </div>
    </div>
  );
};
