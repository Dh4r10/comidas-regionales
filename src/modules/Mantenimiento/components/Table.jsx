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
import { node } from "./data";
import { Button } from "antd";

const Component = (props) => {
  const { setMostrar, establecimiento, setDatosEstablecimiento, setOpen } =
    props;
  function consoles(id) {
    const datosEstablecimiento = establecimiento[id - 1];
    setDatosEstablecimiento(datosEstablecimiento);
    setMostrar(true);
  }
  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: establecimiento.filter((item) =>
      item.correo.toLowerCase().includes(search.toLowerCase())
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
                <HeaderCell>R.U.C</HeaderCell>
                <HeaderCell>NOMBRE</HeaderCell>
                <HeaderCell>CORREO</HeaderCell>
                <HeaderCell>RAZON SOCIAL</HeaderCell>
                <HeaderCell>TELEFONO</HeaderCell>
                <HeaderCell>OPCIONES</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row
                  key={item.id}
                  item={item}
                  onClick={() => consoles(item.id)}
                >
                  <Cell>{item.ruc}</Cell>
                  <Cell>{item.nombre}</Cell>
                  <Cell>{item.correo}</Cell>
                  <Cell>{item.razon_social}</Cell>
                  <Cell>{item.telefono}</Cell>
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
                    <Button className="button-eliminar bg-[#ff4d4f] text-white ">
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
