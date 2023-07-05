import React from 'react'
import { useFilterContext } from '../context/filterContext';

const FilterColumn = () => {
    const {updateSearchFilter , filters : {text }  , allProducts } = useFilterContext()

   const getUniqueValue = (data , property ) => {
    let dataValue = data.map(( curElem) => {
     return curElem[property];
    })  ;  
     return(  dataValue = ["All" , ...new Set(dataValue)])
   }

    // To get All CategoryFilter 
     const categoryFilterValue = getUniqueValue( allProducts , "category")

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
      {
        categoryFilterValue.map((curElem , index) =>{
            return <button
            onClick={updateSearchFilter}
            type='button'
             name='category'
              value={curElem}
                key={index} > {curElem} </button>
        })
      }
      {/* <button>All</button>
      <button >Mobile</button>
      <button>Laptop</button>
      <button>Computer</button>
      <button>Accessories</button>
      <button>Watch</button> */}
    </div>
    <div className="product-category-filter">
      <h3 className="filter-heading">Company</h3>
      <select
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue="all">All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div className="product-category-filter">
      <h3 className="filter-heading">Color</h3>
      <select
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue="all">All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div className="product-category-filter">
      <h3 className="filter-heading">Price</h3>
      <input type="range" />
    </div>

    <button className="clear-filter-btn">Clear Filter</button>
  </div>
  )
}

export default FilterColumn