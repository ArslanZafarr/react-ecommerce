import React from "react";
import ProductsList from "./components/ProductsList";
import FilterColumn from "./components/FilterColumn";
import ProductSorting from "./components/ProductSorting";

const Products = () => {

  return (
    <>
      <section className="products-section">
        <div className="container-fluid products-container">
          <FilterColumn />
          <div className="product-listing-column">
            <ProductSorting />
            <ProductsList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
