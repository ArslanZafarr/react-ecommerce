import axios from "axios";
import { createContext, useContext, useEffect } from "react";


const API = "https://api.pujakaitem.com/api/products"

const AppContext = createContext();

const getProducts = async (url) => {
  const res = await axios.get(url);
  const products = await res.data
  console.log("🚀 ~ file: productcontext.jsx:12 ~ getProducts ~ products:", products)
}

const AppProvider = ({ children }) => {
  useEffect(() => {
    getProducts(API)
  }, [])
  return <AppContext.Provider value="Arslandfnksd">{
    children}</AppContext.Provider>;
};


// custom hooks 
const useProductContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };



