document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        displayProducts(products);
        setupSearch(products);
      });
  });
  
  function displayProducts(products) {
    const productContainer = document.querySelector('#product-container');
    productContainer.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      </div>
    `).join('');
  }
  
  function setupSearch(products) {
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
    });
  }
  