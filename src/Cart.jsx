import React from 'react'
import { useCartContext } from './context/cartContext'
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';




const Cart = () => {
    const { cart, removeItem, clearCart, setDecrease, setIncrease, total_amount, shipping_fee } = useCartContext();
    // const { id } = cart


    if (cart.length === 0) {
        return (
            <div className='loading-content'>
                <h1>No Item in Cart</h1>
            </div>
        )
    }

    return (
        <>
            <section className='cart-section'>
                <div className='container-fluid cart-container'>
                    <div className='cart-content-box'>
                        <div className='cart-header'>
                            <h5>ITEM</h5>
                            <h5>PRICE</h5>
                            <h5>QUANTITY</h5>
                            <h5>SUBTOTAL</h5>
                            <h5>REMOVE</h5>
                        </div>
                        <div className='cart-item-wrapper'>
                            {cart.map((cartItem) => {
                                return (<div className='cart-item' key={cartItem.id}>
                                    <div className='cart-product-name-details'>
                                        <img src={cartItem.image} alt="cart product" />
                                        <div className='cart-product-name-color'>
                                            <h5>{cartItem.name}</h5>
                                            <div className='product-cart-item-color'>
                                                color : <button className='cart-item-color-btn' style={{ backgroundColor: cartItem.color }}></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='cart-item-price'>
                                        <h5>Rs {cartItem.price}</h5>
                                    </div>
                                    <div className='cart-item-quantity'>
                                        <button onClick={() => setDecrease(cartItem.id)}  >-</button>
                                        <p>{cartItem.amount}</p>
                                        <button onClick={() => setIncrease(cartItem.id)} > +</button>
                                    </div>
                                    <div className='cart-item-price'>
                                        <h5> Rs {cartItem.price * cartItem.amount}</h5>
                                    </div>
                                    <div className='cart-item-price'>
                                        <button onClick={() => removeItem(cartItem.id)} className='cart-item-remove-btn'><FaTrash style={{ color: "red" }} /></button>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                )
                            })

                            }


                        </div>
                        <div className='clear-cart-continue-shopping-btns'>
                            <NavLink to="/products">
                                <button>Continue Shopping</button>
                            </NavLink>

                            <button onClick={clearCart}>Clear Cart</button>
                        </div>
                        <div className='cart-total-wrapper'>
                            <div className='cart-total-content'>
                                <div className='cart-total-prices'>
                                    <h5>SUBTOTAL</h5>
                                    <span> Rs {total_amount}</span>
                                </div>
                                <div className='cart-total-prices'>
                                    <h5>Shipping </h5>
                                    <span>Rs {shipping_fee}</span>
                                </div>
                                <div className='cart-total-prices'>
                                    <h5>Order Total</h5>
                                    <span>Rs {total_amount + shipping_fee}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart