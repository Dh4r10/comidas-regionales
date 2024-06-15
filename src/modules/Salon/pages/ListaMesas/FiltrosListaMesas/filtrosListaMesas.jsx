import React from 'react';
import { useNavigate } from 'react-router-dom';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { salon, tipoMesa } from '../data/options';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonAnt from '@/components/ButtonAnt';
import { salonPaths } from '@/utils/routes/SalonRoutes';

export const filtrosListaMesas = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch,
  navigate
) => {

  const handleCrear = () => {
    navigate(salonPaths[1].unionPath)
  }

  return (
    <div className={`${classNameFiltros}__box gap-3`}>
      <div className={`${classNameFiltros}__box-caja gap-3`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            className={`${classNameFiltros}__box-caja-filtros__selects gap-3 items-center`}
            key={headerGroup.id}
          >
            <CallFilter
              headerGroup={headerGroup}
              num={3}
              title="TIPO MESA:"
              options={tipoMesa}
            />
            <CallFilter
              headerGroup={headerGroup}
              num={5}
              title="SALON:"
              options={salon}
            />
          </div>
        ))}
        <div className={`${classNameFiltros}__box-caja-filtros__search gap-3 items-center`}>
          <InputFiltros
            filteringSearch={filteringSearch}
            setFilteringSearch={setFilteringSearch}
          />
        </div>
      </div>
      <div className={`${classNameFiltros}__box-boton flex justify-center items-center`}>
        <ButtonAnt htmlType="button" type="primary" tittle="Crear mesa" icon={faPlus} onClick={handleCrear} />
      </div>
    </div>
  );
};
