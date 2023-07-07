import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext';
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from './context/cartContext';
const API = "https://api.pujakaitem.com/api/products/"

const SingleProduct = () => {
    const { id } = useParams();
    const { getSingleProduct, isSingleLoading, singleProduct, isSingleError } = useProductContext();

    const { name, company, price, colors, description, stock, reviews, image = [{}] } = singleProduct

    const { addDataToCart } = useCartContext()


    let cartProduct = singleProduct

    // let firstColor = colors[0]

    const [color, setColor] = useState(colors && colors.length > 0 ? colors[0] : null)


    const [amount, setAmount] = useState(1);

    const increment = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
        // return setAmount(amount + 1)
    }

    const decrement = () => {
        if (amount === 1) {
            return 1
        }
        else
            setAmount(amount - 1)
    }

    useEffect(() => {
        getSingleProduct(`${API}${id}`)
    }, [])


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
                        <ol className="breadcrumb">
                            <NavLink to='/'>
                                <li className="breadcrumb-item">
                                    Home
                                </li>
                            </NavLink>

                            <li className="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                    <div className='single-product-content-wrapper'>
                        <div className='single-product-features-image-gallery'>
                            <div className='single-product-slider-images'>
                                {image.map((curImage, index) => {
                                    return <img key={index} src={curImage.url} alt="featured product image" />
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
                                    <h6>{stock > 0 ? "In stock" : "Out of Stock"}</h6>
                                </div>
                                <div>
                                    <h5>Brand :</h5>
                                    <h6>{company}</h6>
                                </div>
                            </div>

                            <div className='single-product-color-picker'>
                                <div className='single-product-colors-row'>
                                    {colors?.map((curColor, index) => {
                                        return <button key={index} style={{ backgroundColor: curColor }}
                                            className={color === curColor ? "single-product-color-button active" : "single-product-color-button"}
                                            onClick={() => setColor(curColor)}
                                        >
                                            {color === curColor && <FaCheck style={{ color: 'white' }} />}

                                        </button>
                                    })}
                                </div>
                            </div>

                            <div className='product-cart-item-increment-decrement'>
                                <button onClick={decrement}>-</button>
                                <p>{amount}</p>
                                <button onClick={increment}> +</button>
                            </div>
                            <NavLink to="/cart"  >
                                <button
                                    onClick={() => addDataToCart(id, color, amount, cartProduct)}
                                    className='add-to-cart-btn'
                                >Add to Cart</button> </NavLink>



                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SingleProduct