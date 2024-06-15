import React from 'react';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { tipoUsuario } from '../data/options';

export const filtrosListaUsuarios = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={3}
            title="TIPO USUARIO:"
            options={tipoUsuario}
          />
        </div>
      ))}
      <div className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}>
        <InputFiltros
          filteringSearch={filteringSearch}
          setFilteringSearch={setFilteringSearch}
        />
      </div>
    </div>
  );
};

