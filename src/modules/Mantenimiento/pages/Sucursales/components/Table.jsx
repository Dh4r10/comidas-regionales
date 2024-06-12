import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
  useCustom,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Button, Spin } from "antd";

const Component = (props) => {
  const {
    setMostrar,
    establecimiento,
    setDatosEstablecimiento,
    setOpen,
    sucursales,
    setDatosSurcursales,
    spin,
    deleteSucursales,
  } = props;
  function consoles(id) {
    const datosEstablecimiento = establecimiento[id];
    const datosSucursales = sucursales[id];
    setDatosEstablecimiento(datosEstablecimiento);
    setDatosSurcursales(datosSucursales);
    setMostrar(true);
  }
  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: sucursales.filter((item) =>
      item.nombre.toLowerCase().includes(search.toLowerCase())
    ),
  };
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #7CCC4F;
        color:#fff
      `,
      Row: `
      font-size:14px;
        &:nth-of-type(odd) {
          background-color: #C4EBAB;
        }

        &:nth-of-type(even) {
          background-color: ##e0f5d2  ;
        }
      `,
    },
  ]);
  if (spin) {
    return <Spin />;
  }
  return (
    <div>
      <label htmlFor="search" className="ml-2">
        <input
          className="search"
          placeholder="Buscar"
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </label>

      <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>SUCURSAL</HeaderCell>
                <HeaderCell>ESTABLECIMIENTO</HeaderCell>
                <HeaderCell>TELEFONO</HeaderCell>
                <HeaderCell>REFERENCIA</HeaderCell>
                <HeaderCell>DISTRITO</HeaderCell>
                <HeaderCell>OPCIONES</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, indice) => (
                <Row key={item.id} item={item} onClick={() => consoles(indice)}>
                  <Cell>{item.nombre}</Cell>
                  <Cell>{item.idEstablecimiento.nombre}</Cell>
                  <Cell>{item.telefono}</Cell>
                  <Cell>{item.referencia}</Cell>
                  <Cell>{item.distrito_direccion}</Cell>
                  {/* <Cell>{item.isComplete.toString()}</Cell> */}
                  <Cell>
                    <Button
                      className="bg-[#61b933] text-white mr-3"
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                      className="button-eliminar bg-[#ff4d4f] text-white "
                      onClick={() => {
                        deleteSucursales(item.id), console.log("hola");
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
};

export default Component;
