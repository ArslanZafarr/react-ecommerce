import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const getLocalCart = () => {
    let localCartData = localStorage.getItem("StoreCart")

    if (localCartData === []) {
        return []

    } else {
        return JSON.parse(localCartData)
    }

}


const initialState = {
    // cart: [],
    cart: getLocalCart(),
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


    // To store Items in local Storage 
    useEffect(() => {
        localStorage.setItem("StoreCart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addDataToCart, removeItem }} >{children}</CartContext.Provider>
}

// custom hooks 


const useCartContext = () => {
    return useContext(CartContext)
}



export { CartContext, CartContextProvider, useCartContext }