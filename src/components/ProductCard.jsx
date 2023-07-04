import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = (curElem) => {
    const { id, name, image, price, category } = curElem
    return (
        <>
            <NavLink to={`/singleproduct/${id}`}>

                {/* <div className='shop-product-card'>
                    <img src="/images/hero.jpg" alt="product" />
                    <div className='shop-product-name-and-company'>
                        <h5>iphone</h5>
                        <h5>Mobile</h5>
                    </div>
                    <div className='shop-product-card-price'>
                        <h5>Rs 149999</h5>
                    </div>
                </div> */}

                <div className='shop-product-card'>
                    <img src={image} alt="product" />
                    <div className='shop-product-name-and-company'>
                        <h5>{name}</h5>
                        <h5>{category}</h5>
                    </div>
                    <div className='shop-product-card-price'>
                        <h5>Rs {price}</h5>
                    </div>
                </div>
            </NavLink>

        </>
    )
}

export default ProductCard