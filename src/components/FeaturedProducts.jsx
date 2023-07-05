import React from 'react'
import { useProductContext } from '../context/productcontext';
import FeaturedProductCard from './FeaturedProductCard';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const { isLoading, featureProducts } = useProductContext();

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
                    <div className='featured-products-heading'>
                    <h3>Featured Products</h3>
                    </div>
                    <div className='featured-products-row'>
                        {featureProducts.map((curElem) => {
                            return <ProductCard key={curElem.id} {...curElem} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts