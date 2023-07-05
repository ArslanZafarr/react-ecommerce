import React from 'react'
import { useFilterContext } from '../context/filterContext';

const ProductSorting = () => {
  const {
    isGridView,
    isListView,
    gridView,
    sorting,
    filterProducts,
  } = useFilterContext();

  return (
    <div className="product-grid-view-toggle-and-sorting">
      <div className="product-view-toggle-btns">
        <button
          onClick={isGridView}
          className={
            gridView
              ? "product-layout-toggle-btn active"
              : "product-layout-toggle-btn"
          }
        >
          Grid
        </button>
        <button
          onClick={isListView}
          className={
            !gridView
              ? "product-layout-toggle-btn active"
              : "product-layout-toggle-btn"
          }
        >
          List
        </button>
      </div>
      <div>
        <p>{`${filterProducts.length} item found `}</p>
      </div>

      <select
        id="sort"
        onClick={sorting}
        className="form-select product-price-sorting-selecter"
        aria-label="Default select example"
      >

        <option value="lowest">
          Price(lowest)
        </option>
        <option value="highest">Price (highest)</option>
        <option value="a-z">(a-z)</option>
        <option value="z-a">(z-a)</option>
      </select>
    </div>

  )
}

export default ProductSorting