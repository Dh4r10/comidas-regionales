import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faPiggyBank,
  faShieldHalved,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { SettingOutlined } from "@ant-design/icons";

export const ITEMS = [
  {
    key: "1",
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
    label: "Seguridad",
    children: [
      {
        key: "11",
        label: "Usuarios",
      },
      {
        key: "12",
        label: "Crear usuario",
      },
      {
        key: "13",
        label: "Option 3",
      },
      {
        key: "14",
        label: "Option 4",
      },
    ],
  },
  {
    key: "2",
    icon: <SettingOutlined />,
    label: "Mantenimiento",
    children: [
      {
        key: "21",
        label: "Option 1",
      },
      {
        key: "22",
        label: "Option 2",
      },
      {
        key: "23",
        label: "Submenu",
        children: [
          {
            key: "231",
            label: "Option 1",
          },
          {
            key: "232",
            label: "Option 2",
          },
          {
            key: "233",
            label: "Option 3",
          },
        ],
      },
      {
        key: "24",
        label: "Submenu 2",
        children: [
          {
            key: "241",
            label: "Option 1",
          },
          {
            key: "242",
            label: "Option 2",
          },
          {
            key: "243",
            label: "Option 3",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    label: "Compras",
    children: [
      {
        key: "32",
        label: "Proveedores",
      },
      {
        key: "31",
        label: "Compras",
      },
      {
        key: "35",
        label: "Detalle Compra",
      },
      {
        key: "33",
        label: "Insumos",
      },
      {
        key: "34",
        label: "Almacén",
      },
      {
        key: "37",
        label: "Ubicación",
      },
      {
        key: "38",
        label: "Pasillo",
      },
    ],
  },
  {
    key: "4",
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    label: "Ventas",
    children: [
      {
        key: "41",
        label: "Option 1",
      },
      {
        key: "42",
        label: "Option 2",
      },
      {
        key: "43",
        label: "Option 3",
      },
      {
        key: "44",
        label: "Option 4",
      },
    ],
  },
  {
    key: "5",
    icon: <FontAwesomeIcon icon={faUtensils} />,
    label: "Salón",
    children: [
      {
        key: "51",
        label: "Mesas",
        children: [
          {
            key: "511",
            label: "Lista de mesas",
          },
          {
            key: "512",
            label: "Crear mesa",
          },
        ],
      },
      {
        key: "52",
        label: "Comedor",
      },
      {
        key: "53",
        label: "Option 3",
      },
      {
        key: "54",
        label: "Option 4",
      },
    ],
  },
  {
    key: "6",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    label: "Cerrar sesión",
    danger: true,
  },
];
