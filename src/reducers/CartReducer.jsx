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


    if (action.type === "SET_DECREASE") {
        let updateProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                console.log(curElem)
                let decAmount = curElem.amount - 1
                if (decAmount <= 1) {
                    decAmount = 1
                }
                return {
                    ...curElem,
                    amount: decAmount,
                }

            } else {
                return curElem
            }
        })
        return {
            ...state,
            cart: updateProduct,
        }
    }



    if (action.type === "SET_INCREASE") {
        let updateProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1
                if (incAmount >= curElem.max) {
                    incAmount = curElem.max
                }
                return {
                    ...curElem,
                    amount: incAmount,
                }

            } else {
                return curElem
            }
        })
        return {
            ...state,
            cart: updateProduct,
        }
    }


    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curElem) => curElem.id !== action.payload
        )
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

    if (action.type === "CART_TOTAL_ITEMS") {
        let updatedCartValue = state.cart.reduce((acc, curElem) => {
            let { amount } = curElem
            acc = acc + amount
            return acc
        }, 0);
        return {
            ...state,
            total_items: updatedCartValue
        }
    }

    return state;
}

export default CartReducer