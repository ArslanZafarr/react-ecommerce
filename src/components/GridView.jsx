import React from 'react'
import ProductCard from './ProductCard'
import { useFilterContext } from '../context/filterContext';

const GridView = () => {
    const { filterProducts } = useFilterContext();
    return (
        <div className='products-list'>
            {filterProducts.map((curElem) => {
                return <ProductCard key={curElem} {...curElem} />
            })}

        </div>
    )
}

export default GridView