import {
    createContext,
    useState,
    useMemo,
} from "react";

const ListasContext = createContext();

export default ListasContext;

export const ListasProvider = ({ children }) => {

    const [reload, setReload] = useState(true)

    const contextValue = useMemo(() => {
        return { reload, setReload };
    }, [reload]);

    return (
        <ListasContext.Provider value={contextValue}>
            {children}
        </ListasContext.Provider>
    );
};
