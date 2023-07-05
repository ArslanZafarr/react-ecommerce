import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import { useFilterContext } from '../context/filterContext'

const ProductsList = () => {
    const { gridView } = useFilterContext();
    if (gridView === true) {
        return <>
            <GridView />
        </>
    }

    if (gridView === false) {
        return <>
            <ListView />
        </>
    }
   
}

export default ProductsList