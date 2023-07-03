import React from 'react'

const Cart = () => {
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
                            <div className='cart-item'>
                                <div className='cart-product-name-details'>
                                    <img src="/images/hero.jpg" alt="cart product" />
                                    <div className='cart-product-name-color'>
                                        <h5>iphone</h5>
                                        <div className='product-cart-item-color'>
                                            color : <span>red</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='cart-item-price'>
                                    <h5>Rs 14999</h5>
                                </div>
                                <div className='cart-item-quantity'>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className='cart-item-price'>
                                    <h5>Rs 14999</h5>
                                </div>
                                <div className='cart-item-price'>
                                    <button>Remove</button>
                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                        <div className='clear-cart-continue-shopping-btns'>
                            <button>Continue Shopping</button>
                            <button>Clear Cart</button>
                        </div>
                        <div className='cart-total-wrapper'>
                            <div className='cart-total-content'>
                                <div className='cart-total-prices'>
                                    <h5>SUBTOTAL</h5>
                                    <span>Rs 1499</span>
                                </div>
                                <div className='cart-total-prices'>
                                    <h5>Shipping </h5>
                                    <span>Rs 1499</span>
                                </div>
                                <div className='cart-total-prices'>
                                    <h5>Order Total</h5>
                                    <span>Rs 1499</span>
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