import {
    createContext,
    useState,
    useMemo,
} from "react";

const SalonPedidosContext = createContext();

export default SalonPedidosContext;

export const SalonPedidosProvider = ({ children }) => {

    const [idsSelected, setIdsSelected] = useState(localStorage.getItem("idsSelected") ? JSON.parse(localStorage.getItem("idsSelected")) : [])

    const [openPedido, setOpenPedido] = useState(false);
    const [openProductoModal, setOpenProductoModal] = useState(false)
    const [selectedProducto, setSelectedProducto] = useState({})
    const [selectedOption, setSelectedOption] = useState(null)

    const [items, setItems] = useState([
        // { codigo: 12, nombre: "PESCADO CON PATACONES", descripcion: "SIN SAL", cantidad: 1, precio_unitario: 25.3 },
        // { codigo: 24, nombre: "TACACHO CON CECINA", descripcion: "SIN INDICACIONES", cantidad: 2, precio_unitario: 10.2 },
        // { codigo: 31, nombre: "TILAPIA FRITA", descripcion: "CON ESENCIA", cantidad: 2, precio_unitario: 19.7 },
    ])

    const resetValues = (form) => {
        setSelectedProducto({})
        setSelectedOption(null)
        form.reset()
    }

    const contextValue = useMemo(() => {
        return { openPedido, setOpenPedido, openProductoModal, setOpenProductoModal, selectedProducto, setSelectedProducto, items, setItems, selectedOption, setSelectedOption, resetValues, idsSelected, setIdsSelected };
    }, [openPedido, openProductoModal, selectedProducto, items, selectedOption, idsSelected]);

    return (
        <SalonPedidosContext.Provider value={contextValue}>
            {children}
        </SalonPedidosContext.Provider>
    );
};
