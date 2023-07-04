import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import { useFilterContext } from '../context/filterContext'

const ProductsList = () => {
    const { filterProducts, gridView } = useFilterContext();
    console.log("🚀 ~ file: ProductsList.jsx:8 ~ ProductsList ~ filterProducts:", filterProducts)
    if (gridView === true) {
        return <>
            <GridView />
        </>
    }

    return (
        <ListView />
    )
}

export default ProductsList