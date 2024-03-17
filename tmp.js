// Sample product data
const products = [
    { name: 'Striped T-shirt', price: 25, size: 'M', color: 'blue', dateAdded: '2024-03-15', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Denim Jeans', price: 45, size: 'L', color: 'blue', dateAdded: '2024-03-14', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Hooded Sweatshirt', price: 35, size: 'XL', color: 'gray', dateAdded: '2024-03-13', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Printed Dress', price: 55, size: 'S', color: 'pink', dateAdded: '2024-03-12', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Leather Jacket', price: 85, size: 'L', color: 'black', dateAdded: '2024-03-11', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Checked Shirt', price: 30, size: 'M', color: 'red', dateAdded: '2024-03-10', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Chinos', price: 40, size: 'L', color: 'brown', dateAdded: '2024-03-09', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Sweater', price: 60, size: 'XL', color: 'orange', dateAdded: '2024-03-08', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Floral Skirt', price: 50, size: 'S', color: 'green', dateAdded: '2024-03-07', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Trench Coat', price: 75, size: 'L', color: 'navy', dateAdded: '2024-03-06', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Printed Blouse', price: 35, size: 'M', color: 'purple', dateAdded: '2024-03-05', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Cargo Pants', price: 45, size: 'L', color: 'khaki', dateAdded: '2024-03-04', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Suede Jacket', price: 80, size: 'XL', color: 'tan', dateAdded: '2024-03-03', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Maxi Dress', price: 65, size: 'S', color: 'pink', dateAdded: '2024-03-02', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Denim Skirt', price: 30, size: 'M', color: 'blue', dateAdded: '2024-03-01', imageUrl: 'https://via.placeholder.com/150' }
];

// Function to render products
function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Size: ${product.size}</p>
      <p>Color: <span style="color: ${product.color}">${product.color}</span></p>
      <p>Date Added: ${product.dateAdded}</p>
    `;
        productList.appendChild(productCard);
    });
}

// Initial rendering of products
renderProducts(products);


// Function to filter products
function filterProducts() {
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Number.MAX_VALUE;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;

    const filteredProducts = products.filter(product => {
        const priceInRange = (minPrice <= product.price && product.price <= maxPrice);
        const sizeMatches = (size === '' || product.size === size);
        const colorMatches = (color === '' || product.color === color);
        return priceInRange && sizeMatches && colorMatches;
    });

    renderProducts(filteredProducts);
}

// Function to sort products
function sortProducts() {
    const sortOption = document.getElementById('sort').value;

    const sortedProducts = [...products];

    switch (sortOption) {
        case 'priceLowToHigh':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'priceHighToLow':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'dateAddedNewest':
            sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'dateAddedOldest':
            sortedProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
            break;
    }

    renderProducts(sortedProducts);
}

// Event listeners for filtering and sorting
document.getElementById('minPrice').addEventListener('input', filterProducts);
document.getElementById('maxPrice').addEventListener('input', filterProducts);
document.getElementById('size').addEventListener('change', filterProducts);
document.getElementById('color').addEventListener('change', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);
