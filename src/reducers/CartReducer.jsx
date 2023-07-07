const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, cartProduct } = action.payload

        let cartItemData

        cartItemData = {
            id: id + color,

            image: cartProduct.image[0].url,
            name: cartProduct.name,
            color,
            price: cartProduct.price,
            amount,
            max: cartProduct.stock,

        }

        return {
            ...state,
            cart: [...state.cart, cartItemData]
        }



    }


    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curElem) => {
            curElem.id !== action.payload
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }

    return state;
}

export default CartReducer