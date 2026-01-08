 import React, { useState, useEffect } from 'react';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import CartSidebar from './CartSidebar';
import { fetchProducts } from './mockApi';
import './App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setFilters] = useState({ searchTerm: '', category: 'All' });
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchProducts().then(products => {
      setAllProducts(products);
    });
  },[]);

  const handleFilterChange = (e) => {
    setFilters(prev=>({...prev, [e.target.name]: e.target.value }));
  };
  const handleAddToCart = (productToAdd) => {
    let newCart = structuredClone(cartItems);
    console.log(newCart)
    const isIncludes=newCart.find(item=>item.id.toString().includes(productToAdd.id))
    if(isIncludes){
      newCart=newCart.map(item=> item.id == productToAdd.id ? {...item, quantity:item.quantity + 1} : item)
    }else{
    newCart.push({ ...productToAdd, quantity: 1 });
    }
    setCartItems(newCart);
  };
  
  const handleRemoveFromCart = (productId) => {
    const newCart = cartItems.filter(item => item.id != productId);
    setCartItems(newCart);
  };

  const filteredProducts = allProducts.filter(item=>item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())).filter(item=>item.category.includes(filters.category == 'All' ? '' : filters.category));
  const cartItemCount = cartItems.length;

  return (
    <div className="app-container">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <div className="main-layout">
        <FilterSidebar onFilterChange={handleFilterChange} filtersValue={filters}/>
        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>
      <CartSidebar
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;