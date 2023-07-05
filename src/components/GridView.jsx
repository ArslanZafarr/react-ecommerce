import React from 'react'
import ProductCard from './ProductCard'
import { useFilterContext } from '../context/filterContext';

const GridView = () => {
    const { isFilterLoading, filterProducts } = useFilterContext();

    if (isFilterLoading) {
        return <>
            <div className='loading-content'>
                <h1>Loading.........</h1>
            </div>
        </>
    }

    return (
        <div className='products-list'>
            {filterProducts.map((curElem) => {
                return <ProductCard key={curElem.id} {...curElem} />
            })}

        </div>
    )
}

export default GridView