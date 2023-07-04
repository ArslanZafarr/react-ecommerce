import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer"
import { useProductContext } from "./productcontext";

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
}

const filterContext = createContext();


const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductContext();

    const isGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }


    const isListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    useEffect(() => {
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products })
    }, [products])


    // Price Sorting  Function

    const sorting = () => {
        dispatch({ type: "SET_SORT_VALUE" })
    }

    // Price Sorting  Dispatch

    useEffect(() => { dispatch({ type: "SORTING_PRODUCTS_PRICE", payload: products }) }, [state.sortingValue])

    return <filterContext.Provider value={{ ...state, isGridView, isListView, sorting }}>{children}</filterContext.Provider>
}

// custom Hooks 
const useFilterContext = () => {
    return useContext(filterContext)
}



export { FilterContextProvider, useFilterContext }