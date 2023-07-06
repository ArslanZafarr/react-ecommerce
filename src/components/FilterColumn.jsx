import React from 'react'
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from 'react-icons/fa'

const FilterColumn = () => {
  const { updateSearchFilter, filters: { text, colors, price, minPrice, maxPrice }, allProducts } = useFilterContext()

  const getUniqueValue = (data, property) => {
    let dataValue = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      return (dataValue = ["all", ...new Set([].concat(...dataValue))])

    }
    return dataValue = ["all", ...new Set(dataValue)]


  }

  // To get All CategoryFilter 
  const categoryFilterValue = getUniqueValue(allProducts, "category")
  //    To get Company Filter  
  const companyFilterValue = getUniqueValue(allProducts, "company")

  const colorFilterValue = getUniqueValue(allProducts, "colors")


  return (
    <div className="product-filter-column">
      <div className="product-filter-search-field">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            name="text"
            value={text}
            onChange={updateSearchFilter}
            type="text"
            placeholder="Search.."
          />
        </form>
      </div>
      <div className="product-category-filter">
        <h3 className="filter-heading">Category</h3>
        {categoryFilterValue.map((curElem) => {
          return <button
            onClick={updateSearchFilter}
            type='button'
            name='category'
            value={curElem}
          > {curElem} </button>
        })
        }

      </div>
      <div className="product-category-filter">
        <h3 className="filter-heading">Company</h3>
        <form >
          <select
            name='company'
            className="form-select"
            aria-label="Default select example"
            onClick={updateSearchFilter} >
            {
              companyFilterValue.map((curElem) => {
                return (
                  <option name="company" value={curElem}>{curElem}</option>
                )
              })}
          </select>
        </form>
      </div>

      <div className="product-category-filter">
        <h3 className="filter-heading">Color</h3>
        <div className='filter-colors-row'>
          {colorFilterValue.map((curColor, index) => {
            if (curColor === "all") {
              return <button key={index} className='color-filter-all-btn' type='button' onClick={updateSearchFilter} name='colors' value={curColor}  > All</button>
            }
            return (

              <button key={index} className='filter-color-btn' type='button' onClick={updateSearchFilter} name='colors' value={curColor} style={{ width: "24px", backgroundColor: `${curColor}` }} >
                {colors === curColor ? <FaCheck style={{ color: 'white' }} /> : null}

              </button>

            )
          })}
        </div>
      </div>

      <div className="product-category-filter">
        <h3 className="filter-heading">Price</h3>
        <p>Rs {price}</p>
        <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateSearchFilter} />

      </div>

      <button className="clear-filter-btn">Clear Filter</button>
    </div>
  )
}

export default FilterColumn

