import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import { useProductContext } from "./productcontext";

const initialState = {
    isFilterLoading: false,
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    },
};


const filterContext = createContext();

const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductContext();

    const isGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    const isListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS_LOADING" })
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
    }, [products]);

    // Search Filter
    const updateSearchFilter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "SEARCH_FILTER", payload: { name, value } });
    };

    // Price Sorting  Function
    const sorting = () => {
        dispatch({ type: "SET_SORT_VALUE" });
    };

    useEffect(() => {
        dispatch({ type: "SEARCH_FILTER_RESULTS" });
    }, [state.filters]);

    // Price Sorting  Dispatch
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS_PRICE", payload: products });
    }, [products, state.sortingValue]);

    //    CLear Filters 
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }

    return (
        <filterContext.Provider
            value={{
                ...state,
                isGridView,
                isListView,
                sorting,
                updateSearchFilter,
                clearFilters
            }}
        >
            {children}
        </filterContext.Provider>
    );
};

// custom Hooks
const useFilterContext = () => {
    return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext };
