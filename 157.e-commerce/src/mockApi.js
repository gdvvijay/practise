const mockProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 199.99, rating: 4.5 },
  { id: 2, name: 'Running Shoes', category: 'Apparel', price: 120.00, rating: 4.8 },
  { id: 3, name: 'Coffee Maker', category: 'Home Goods', price: 89.99, rating: 4.3 },
  { id: 4, name: 'React Cookbook', category: 'Books', price: 39.99, rating: 4.9 },
  { id: 5, name: 'Smart Watch', category: 'Electronics', price: 299.99, rating: 4.7 },
  { id: 6, name: 'Graphic T-Shirt', category: 'Apparel', price: 25.00, rating: 4.2 },
  { id: 7, name: 'The Design of Everyday Things', category: 'Books', price: 19.99, rating: 5.0 },
  { id: 8, name: 'Blender', category: 'Home Goods', price: 150.00, rating: 4.6 },
];
export const fetchProducts = () => {
  console.log("API: Fetching all products...");
  return new Promise(resolve => setTimeout(() => resolve(mockProducts), 500));
};