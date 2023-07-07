import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const initialState = {
    cart: [],
    total_items: "",
    total_amount: "",
    shipping_fee: "",
}

const CartContext = createContext();


const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addDataToCart = (id, color, amount, cartProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, cartProduct } })
    }

    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM", payload: id
        })
    }

    return <CartContext.Provider value={{ ...state, addDataToCart, removeItem }} >{children}</CartContext.Provider>
}

// custom hooks 


const useCartContext = () => {
    return useContext(CartContext)
}



export { CartContext, CartContextProvider, useCartContext }