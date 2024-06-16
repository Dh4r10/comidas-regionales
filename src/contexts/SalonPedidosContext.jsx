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
    const [openProductoEditModal, setOpenProductoEditModal] = useState(false)
    const [selectedProducto, setSelectedProducto] = useState({})
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedToEdit, setSelectedToEdit] = useState(null)

    const [items, setItems] = useState([
        // { codigo: 12, nombre: "PESCADO CON PATACONES", descripcion: "SIN SAL", cantidad: 1, precio_unitario: 25.3 },
        // { codigo: 24, nombre: "TACACHO CON CECINA", descripcion: "SIN INDICACIONES", cantidad: 2, precio_unitario: 10.2 },
        // { codigo: 31, nombre: "TILAPIA FRITA", descripcion: "CON ESENCIA", cantidad: 2, precio_unitario: 19.7 },
    ])

    const resetValues = (form) => {
        setSelectedProducto({})
        setSelectedOption(null)
        setSelectedToEdit(null)
        form.reset()
    }

    const resetMesas = () => {
        setIdsSelected([])
        setItems([])
    }

    const resetListaProductos = () => {
        setItems([])
    }

    const reduceDecimal = (numero) => {
        if (numero) {
            let convertido = numero.toFixed(2)
            return convertido;
        } else {
            const numVacio = 0
            let convertido = numVacio.toFixed(2)
            return convertido
        }
    }

    const contextValue = useMemo(() => {
        return { openPedido, setOpenPedido, openProductoModal, setOpenProductoModal, selectedProducto, setSelectedProducto, items, setItems, selectedOption, setSelectedOption, resetValues, idsSelected, setIdsSelected, selectedToEdit, setSelectedToEdit, reduceDecimal, resetMesas, resetListaProductos, openProductoEditModal, setOpenProductoEditModal };
    }, [openPedido, openProductoModal, selectedProducto, items, selectedOption, idsSelected, selectedToEdit, openProductoEditModal]);

    return (
        <SalonPedidosContext.Provider value={contextValue}>
            {children}
        </SalonPedidosContext.Provider>
    );
};
