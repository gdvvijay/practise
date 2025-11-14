import React from 'react';
import ProductCatalog from './ProductCatalog';
import './App.css';

// Mock product data for the catalog
const mockProducts = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1499.99 },
  { id: 2, name: 'Ergonomic Mouse', category: 'Electronics', price: 79.99 },
  { id: 3, name: 'The Art of Code', category: 'Books', price: 29.99 },
  { id: 4, name: 'Cozy Hoodie', category: 'Apparel', price: 59.99 },
  { id: 5, name: 'Desktop Monitor', category: 'Electronics', price: 299.99 },
  { id: 6, name: 'Running Shoes', category: 'Apparel', price: 119.99 },
  { id: 7, name: 'A Tale of Two Cities', category: 'Books', price: 19.99 },
  { id: 8, name: 'Wireless Keyboard', category: 'Electronics', price: 129.99 },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Product Catalog</h1>
        <p>Use the filters to find products. The filtering logic is flawed.</p>
      </header>
      <main>
        <ProductCatalog allProducts={mockProducts} />
      </main>
    </div>
  );
}

export default App;