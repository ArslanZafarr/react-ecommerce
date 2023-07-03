import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer"


const API = "https://api.pujakaitem.com/api/products"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  isSingleError: false,
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await axios.get(url);
      const products = await res.data
      dispatch({ type: "SET_API_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "SET_ERROR" })

    }

  }


  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" })
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" })

    }

  }



  useEffect(() => { getProducts(API) }, [])

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>

  )
};


// custom hooks 
const useProductContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };



