import React from 'react'

const ProductCard = () => {
    return (
        <>
            <div className='shop-product-card'>
                <img src="/images/hero.jpg" alt="product" />
                <div className='shop-product-name-and-company'>
                    <h5>iPhone X</h5>
                    <h5>Mobile</h5>
                </div>
                <div className='shop-product-card-price'>
                    <h5>Rs 1499</h5>
                </div>
            </div>
        </>
    )
}

export default ProductCard