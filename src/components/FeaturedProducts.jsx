import React from 'react'
import { useProductContext } from '../context/productcontext';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProducts = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log("🚀 ~ file: FeaturedProducts.jsx:6 ~ FeaturedProducts ~ featureProducts:", featureProducts)

    if (isLoading) {
        return <>
        <div className='loading-content'>
        <h1>Loading.........</h1>
        </div>
          
        </>
    }

    return (
        <>

            <section className='featured-section'>
                <div className='container-fluid featured-container'>
                    <div className='featured-products-row'>
                        {featureProducts.map((curElem) => {
                            return <FeaturedProductCard key={curElem.id} {...curElem} />
                        })}


                    </div>
                </div>
            </section>


        </>
    )
}

export default FeaturedProducts