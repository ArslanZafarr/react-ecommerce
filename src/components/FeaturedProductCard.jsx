import React from 'react'

const FeaturedProductCard = (curElem) => {
    return (
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
    )
}

export default FeaturedProductCard