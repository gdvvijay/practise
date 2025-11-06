const ALL_PRODUCTS = Array.from({ length: 100 }, (_, i) => {
  const categories = ['Electronics', 'Books', 'Home Goods', 'Apparel'];
  const price = parseFloat((Math.random() * 200 + 10).toFixed(2));
  const stock = Math.floor(Math.random() * 250);
  const category = categories[i % categories.length];
  return {
    id: i + 1,
    name: `Product #${String(i + 1).padStart(3, '0')}`,
    category: category,
    price: price,
    stock: stock,
  };
});


export const mockApiFetch = (params) => {
  const { page = 1, limit = 10, search = '', sortKey = 'name', sortDirection = 'ascending' } = params;

  console.log('API FETCHING WITH PARAMS:', params);
  
  let data = [...ALL_PRODUCTS];
  
  // Filtering
  if (search) {
    data = data.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Sorting
  if (sortKey) {
    data.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      
      let comparison = 0;
      if (aVal > bVal) comparison = 1;
      else if (aVal < bVal) comparison = -1;
      
      return sortDirection === 'descending' ? comparison * -1 : comparison;
    });
  }

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / limit);

  // Pagination
  const paginatedData = data.slice((page - 1) * limit, page * limit);

  // Simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: paginatedData,
        totalPages: totalPages,
        totalItems: totalItems,
        currentPage: page
      });
    }, Math.random() * 500 + 200); // Random delay between 200ms and 700ms
  });
};