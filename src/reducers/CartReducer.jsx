const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, cartProduct } = action.payload

        let cartItemData

        cartItemData = {
            id: id + color,
            color,
            price: cartProduct.price,
            amount,
            // max: cartProduct.stock,

        }

        return {
            ...state,
            cart: [...state.cart, cartItemData]
        }

    }
    return state;
}

export default CartReducer