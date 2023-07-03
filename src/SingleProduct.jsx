import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext';

const API = "https://api.pujakaitem.com/api/products/"

const SingleProduct = () => {
    const { id } = useParams();
    const { getSingleProduct, isSingleLoading, singleProduct, isSingleError } = useProductContext();
    console.log("🚀 ~ file: SingleProduct.jsx:10 ~ SingleProduct ~ singleProduct:", singleProduct)

    useEffect(() => {
        getSingleProduct(`${API}${id}`)
    }, [])

    const { name } = singleProduct

    if (isSingleLoading) {
        return <>
            <div className='loading-content'>
                <h1>Loading.........</h1>
            </div>

        </>
    }

    return (
        <>
            <h1>Single Product {name} </h1></>
    )
}

export default SingleProduct