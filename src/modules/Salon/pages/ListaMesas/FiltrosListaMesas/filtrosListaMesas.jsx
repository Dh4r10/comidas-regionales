import React from 'react';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { gender } from '../data/options';

export const filtrosListaMesas = (
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
    </div>
  );
};
