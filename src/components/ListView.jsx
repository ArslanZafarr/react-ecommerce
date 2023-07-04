import React from 'react'
import ProductCard from './ProductCard'
import { useFilterContext } from '../context/filterContext';

const ListView = () => {
    const { filterProducts } = useFilterContext();
    return (
        <div className='products-list-view'>
            {filterProducts.map((curElem) => {
                return <ProductCard key={curElem} {...curElem} />
            })}


        </div>

    )
}

export default ListView