import React from 'react'
import { NavLink } from 'react-router-dom'

const FeaturedProductCard = (curElem) => {
    const { id, name, price, image, company } = curElem

    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className='featured-product-card'>
                <img src={curElem.image} alt="featured product" />
                <div className='featured-product-name-and-company'>
                    <h5>{curElem.name}</h5>
                    <h5>{curElem.company}</h5>
                </div>
                <div className='featured-product-price'>
                    <h5>{curElem.price}</h5>
                </div>
            </div>
        </NavLink>

    )
}

export default FeaturedProductCard