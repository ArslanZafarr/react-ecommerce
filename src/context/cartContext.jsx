import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const getLocalCart = () => {
    let localCartData = localStorage.getItem("StoreCart")

    // if (localCartData == []) {
    if (!localCartData || localCartData === "null") {
        return []

    } else {
        return JSON.parse(localCartData)
    }

}


const initialState = {
    // cart: [],
    cart: getLocalCart(),
    total_items: "",
    total_amount: '',
    shipping_fee: 500,
}

const CartContext = createContext();


const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addDataToCart = (id, color, amount, cartProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, cartProduct } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }




    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEMS" });
        dispatch({ type: "CART_TOTAL_PRICE" });
    }, [state.cart]);





    // To store Items in local Storage 
    useEffect(() => {
        localStorage.setItem("StoreCart", JSON.stringify(state.cart))
    }, [state.cart])


    // To clear Cart 

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }


    // To Increase Quantity item 
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }


    // To Decrease Quantity item 
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }



    return <CartContext.Provider value={{ ...state, addDataToCart, removeItem, clearCart, setIncrease, setDecrease }} >{children}</CartContext.Provider>
}

// custom hooks 


const useCartContext = () => {
    return useContext(CartContext)
}



export { CartContext, CartContextProvider, useCartContext }