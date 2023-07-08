const CartReducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, cartProduct } = action.payload


        // Condition for existing Product with same color 
        let existingProduct = state.cart.find(
            (curElem) => curElem.id == id + color)

        if (existingProduct) {
            let updatedCart = state.cart.map((curElem) => {
                if (curElem.id == id + color) {
                    let newAmount = curElem.amount + amount
                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max
                    }
                    return {
                        ...curElem,
                        amount: newAmount,
                    }
                } else {
                    return curElem

                }

            })
            return {
                ...state,
                cart: updatedCart,
            }
        }
        else {
            let cartItemData = {
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

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    return state;
}

export default CartReducer