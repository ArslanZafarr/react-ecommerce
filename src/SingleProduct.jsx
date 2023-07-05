import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext';

const API = "https://api.pujakaitem.com/api/products/"

const SingleProduct = () => {
     const [count , setCount]  = useState(1);

const increment = () => {
    return setCount (count + 1)
}


const decrement = () => {
    if (count===1 ){
    return 1
    }
    else
     setCount (count - 1)
}

  
  

  

    const { id } = useParams();
    const { getSingleProduct, isSingleLoading, singleProduct, isSingleError } = useProductContext();


    useEffect(() => {
        getSingleProduct(`${API}${id}`)
    }, [])

    const { name, company, price, description, category, stock, reviews, stars, image = [{}] } = singleProduct


    if (isSingleLoading) {
        return <>
            <div className='loading-content'>
                <h1>Loading.........</h1>
            </div>

        </>
    }

    if (isSingleError) {
        return <>
            <div className='loading-content'>
                <h1>Error.........</h1>
            </div>

        </>
    }

    return (
        <>
            <section className='single-product-section'>
                <div className='container-fluid single-product-container'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <NavLink to='/'>
                                <li class="breadcrumb-item">
                                    Home
                                </li>
                            </NavLink>

                            <li class="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                    <div className='single-product-content-wrapper'>
                        <div className='single-product-features-image-gallery'>
                            <div className='single-product-slider-images'>
                                {image.map((curImage) => {
                                    return <img src={curImage.url} alt="featured product image" />
                                })}
                            </div>
                            <div className='singe-product-featured-image'>
                                <img src={image[0].url} alt="featured product image" />
                            </div>
                        </div>
                        <div className='single-product-details-content-wrapper'>
                            <h3 className='product-title'>{name}</h3>
                            <div className='product-rating-stars-and-reviews'>
                                ({reviews} reviews)
                            </div>
                            <p>MRP <span>1999</span></p>
                            <div className='deal-of-the-day-price'>
                                <h5>Deal of the day:</h5>
                                <h5>Rs {price}</h5>
                            </div>
                            <div className='single-product-description'>
                                <p>{description}</p>
                            </div>
                            <div className='single-product-info'>
                                <div>
                                    <h5>Available :</h5>
                                    <h6>In Stock</h6>
                                </div>
                                <div>
                                    <h5>Brand :</h5>
                                    <h6>{company}</h6>
                                </div>
                            </div>

                            <div className='single-product-color-picker'>
                                <h5>red </h5>
                                <h5>red </h5>
                                <h5>red </h5>
                            </div>

                            <div className='product-cart-item-increment-decrement'>
                                <button onClick={decrement}>-</button>
                                <p>{count}</p>
                                <button onClick={increment}> +</button>
                            </div>

                            <button className='add-to-cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SingleProduct