import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer"
import { useProductContext } from "./productcontext";

const initialState = {
    filterProducts: [],
    allProducts: [],
}

const filterContext = createContext();


const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductContext();

    useEffect(() => {
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products })
    }, [products])


    return <filterContext.Provider value={{ ...state }}>{children}</filterContext.Provider>
}

// custom Hooks 
const useFilterContext = () => {
    return useContext(filterContext)
}



export { FilterContextProvider, useFilterContext }