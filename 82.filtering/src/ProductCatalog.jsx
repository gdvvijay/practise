import React, { useState, useEffect } from 'react';
import FilterControls from './FilterControls';
import ProductGrid from './ProductGrid';

function ProductCatalog({ allProducts }) {
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'All',
    maxPrice: 500,
  });

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
 
  useEffect(() => {
    // This effect should filter the products when filters change
    let products = allProducts;
    if (filters.searchTerm) {
      products = allProducts.filter(p => p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()));
    } else if (filters.category !== 'All') {
      products = allProducts.filter(p => p.category === filters.category);
    } else if (filters.maxPrice) {
      products = allProducts.filter(p => p.price < filters.maxPrice);
    }
    setFilteredProducts(products);
  }, [allProducts,filters]); // Missing dependencies


  const handleFilterChange = (filterName, value) => {
    // const newFilters = filters;
    // newFilters[filterName] = value;
    setFilters(prev=>({...prev,[filterName]:value}));
  };

  const resetFilters = () => {
    setFilters({
    searchTerm: '',
    category: 'All',
    maxPrice: 500,
  });
  location.reload()
  };
  
  return (
    <div className="product-catalog">
      <FilterControls
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default ProductCatalog;