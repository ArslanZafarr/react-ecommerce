import React from 'react'
import ProductCard from './components/ProductCard';
import ProductsList from './components/ProductsList';
import { useFilterContext } from './context/filterContext';

const Products = () => {
    const { isGridView, isListView, gridView } = useFilterContext();
    return (
        <>
            <section className='products-section'>
                <div className='container-fluid products-container'>
                    <div className='product-filter-column'>
                        <div className='product-filter-search-field'>
                            <input type="text" placeholder='Search..' />
                        </div>
                        <div className='product-category-filter'>
                            <h3 className='filter-heading'>Category</h3>
                            <button>All</button>
                            <button>Mobile</button>
                            <button>Laptop</button>
                            <button>Computer</button>
                            <button>Accessories</button>
                            <button>Watch</button>
                        </div>
                        <div className='product-category-filter'>
                            <h3 className='filter-heading'>Company</h3>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className='product-category-filter'>
                            <h3 className='filter-heading'>Color</h3>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className='product-category-filter'>
                            <h3 className='filter-heading'>Price</h3>
                            <input type="range" />
                        </div>

                        <button className='clear-filter-btn'>Clear Filter</button>
                    </div>
                    <div className='product-listing-column'>
                        <div className='product-grid-view-toggle-and-sorting'>
                            <div className='product-view-toggle-btns'>
                                <button onClick={isGridView} className={gridView ? "product-layout-toggle-btn active" : "product-layout-toggle-btn"} >Grid</button>
                                <button onClick={isListView} className={!gridView ? "product-layout-toggle-btn active" : "product-layout-toggle-btn"}>List</button>
                            </div>
                            <div>
                                <p>40 item found</p>
                            </div>

                            <select className="form-select product-price-sorting-selecter" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <ProductsList />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products

// {
//     filterProducts.map((curElem) => {
//         return <ProductCard key={curElem.id} {...curElem} />
//     })
// }