// Sample product data
const products = [
    { name: 'Pruhované tričko', price: 25, size: ['M'], color: ['modrá', 'ružová'], dateAdded: '2024-03-15', imageUrl: 'https://via.placeholder.com/150', gender: ['muži'], category: ['oblečenie'], subcategory: ['nové', 'obľúbené', 'tenisky'], brand: 'adidas' },
    { name: 'Džínsy', price: 45, size: ['XL'], color: ['modrá'], dateAdded: '2024-03-14', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['obuv'], subcategory: ['výpredaj'], brand: 'puma' },
    { name: 'Kapucňová mikina', price: 35, size: ['XL', 'L'], color: ['sivá'], dateAdded: '2024-03-13', imageUrl: 'https://via.placeholder.com/150', gender: ['muži', 'deti'], category: ['doplnky'], subcategory: ['tenisky'], brand: 'H&M' },
    { name: 'Potlačené šaty', price: 55, size: ['S'], color: ['ružová'], dateAdded: '2024-03-12', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['šport'], subcategory: ['obľúbené', 'tenisky'], brand: 'converse' },
    { name: 'Kožená bunda', price: 85, size: ['XS'], color: ['čierna'], dateAdded: '2024-03-11', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['oblečenie'], subcategory: ['výpredaj'], brand: 'reebok' },
    { name: 'Kockovaná košeľa', price: 30, size: ['M'], color: ['červená'], dateAdded: '2024-03-10', imageUrl: 'https://via.placeholder.com/150', gender: ['muži'], category: ['šport', 'oblečenie'], subcategory: ['nové', 'tenisky'], brand: 'nike' },
    { name: 'Chinos nohavice', price: 40, size: ['S'], color: ['hnedá'], dateAdded: '2024-03-09', imageUrl: 'https://via.placeholder.com/150', gender: ['muži', 'ženy', 'deti'], category: ['obuv'], subcategory: ['obľúbené', 'tenisky'], brand: 'calvin-klein' },
    { name: 'Sveter', price: 60, size: ['S', 'M'], color: ['zelená'], dateAdded: '2024-03-08', imageUrl: 'https://via.placeholder.com/150', gender: ['muži', 'ženy'], category: ['doplnky'], subcategory: ['tenisky'], brand: 'champion' },
    { name: 'Florálna sukňa', price: 50, size: ['XS', 'S'], color: ['zelená'], dateAdded: '2024-03-07', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['oblečenie', 'doplnky'], subcategory: ['nové', 'obľúbené'], brand: 'adidas' },
    { name: 'Plášť', price: 75, size: ['M'], color: ['modrá'], dateAdded: '2024-03-06', imageUrl: 'https://via.placeholder.com/150', gender: ['muži'], category: ['šport'], subcategory: ['tenisky'], brand: 'nike' },
    { name: 'Potlačená blúza', price: 35, size: ['M'], color: ['fialová'], dateAdded: '2024-03-05', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['doplnky'], subcategory: ['nové', 'tenisky'], brand: 'converse' },
    { name: 'Cargo nohavice', price: 45, size: ['XL'], color: ['hnedá'], dateAdded: '2024-03-04', imageUrl: 'https://via.placeholder.com/150', gender: ['muži', 'ženy'], category: ['oblečenie'], subcategory: ['výpredaj', 'tenisky'], brand: 'puma' },
    { name: 'Kožená bunda z semišu', price: 80, size: ['XL'], color: ['hnedá'], dateAdded: '2024-03-03', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['šport'], subcategory: ['tenisky'], brand: 'H&M' },
    { name: 'Maxi šaty', price: 65, size: ['S'], color: ['ružová'], dateAdded: '2024-03-02', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['obuv', 'doplnky'], subcategory: ['obľúbené', 'tenisky'], brand: 'reebok' },
    { name: 'Džínsy sukňa', price: 30, size: ['M'], color: ['modrá'], dateAdded: '2024-03-01', imageUrl: 'https://via.placeholder.com/150', gender: ['ženy'], category: ['oblečenie'], subcategory: ['nové', 'tenisky'], brand: 'calvin-klein' }
];

//mapping
const mapping = {
    'blue': 'modrá',
    'red': 'červená',
    'black': 'čierna',
    'white': 'biela',
    'brown': 'hnedá',
    'yellow': 'žltá',
    'green': 'zelená',
    'pink': 'ružová'
};

function replaceValues(tmp, mapping) {
    return tmp.map(color => mapping[color] || color);
}

function removeOptions(selectElement) {
    let i, l = selectElement.options.length - 1;
    for(i = l; i >= 0; i--) {
        selectElement.remove(i);
    }
}

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
      <p>Brand: ${product.brand}</p>
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

function add_option(selectBox, tmp, cmpr, size, color, check){
    for (let i = 0, l = cmpr.length; i < l; i++){
        if (tmp.includes(cmpr[i]) || check){
            let el = document.createElement("option");
            el.textContent = cmpr[i];
            el.value = cmpr[i];
            if (el.value === size || el.value === color) el.selected = true;
            selectBox.appendChild(el);
        }
        else {
            let el = document.createElement("option");
            el.textContent = cmpr[i];
            el.value = cmpr[i];
            el.disabled = true;
            selectBox.appendChild(el);
        }
    }
}

function fill_filters(arr, color, size) {

    let selectBox = document.getElementById("color");
    removeOptions(selectBox);
    let all = document.createElement("option");
    all.textContent = "All";
    all.value = "";
    if (all.value === color) all.selected = true;
    selectBox.appendChild(all);
    let tmp = [];
    for(let i = 0, l = arr.length; i < l; i++){
        let option = arr[i];
        for (let j = 0, n = option.size.length; j<n; j++){
            if (!(tmp.includes(option.color[j]))) {
                tmp.push(option.color[j]);
            }
        }
    }
    let cmpr = ['modrá', 'červená', 'zelená', 'fialová', 'ružová', 'žltá', 'čierna', 'biela', 'hnedá']
    add_option(selectBox, tmp, cmpr, size, color, size==="");

    selectBox = document.getElementById("size");
    removeOptions(selectBox);
    all = document.createElement("option");
    all.textContent = "All";
    all.value = "";
    if (all.value === size) all.selected = true;
    selectBox.appendChild(all);
    tmp = [];
    for(let i = 0, l = arr.length; i < l; i++){
        let option = arr[i];
        for (let j = 0, n = option.size.length; j<n; j++){
            if (!(tmp.includes(option.size[j]))) {
                tmp.push(option.size[j]);
            }
        }
    }
    cmpr = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    add_option(selectBox, tmp, cmpr, size, color, color==="");
}

// Function to filter products
function filterProducts() {
    // const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    // const maxPrice = parseInt(document.getElementById('maxPrice').value) || Number.MAX_VALUE;
    // const size = document.getElementById('size').value;
    const brands = document.getElementsByClassName('brandNEW');
    const colors = document.getElementsByClassName('selected');
    // const sortOption = document.getElementById('sort').value;

    let filteredProducts = products; // Initialize with all products
    let tmp = [];

    // Extract selected colors
    Array.prototype.forEach.call(colors, function(el) {
        tmp.push(el.id.substring(7));
    });

    // If colors are selected, filter by colors
    if (tmp.length) {
        tmp = replaceValues(tmp, mapping);
        filteredProducts = filteredProducts.filter(product => {
            return product.color.some(color => tmp.includes(color));
        });
    }

    tmp = [];

    // Extract selected brands
    Array.prototype.forEach.call(brands, function(el) {
        tmp.push(el.id);
        console.log(el.id);
    });

    // If brands are selected, filter by brands
    if (tmp.length) {
        console.log(tmp);
        filteredProducts = filteredProducts.filter(product => {
            return tmp.includes(product.brand);
        });
    }

    // Render filtered products
    renderProducts(filteredProducts);



    // const filteredProducts = products.filter(product => {
    //     const priceInRange = (minPrice <= product.price && product.price <= maxPrice);
    //     const sizeMatches = (size==='' || product.size.includes(size));
    //     const colorMatches = (color==='' || product.color.includes(color));
    //     return priceInRange && sizeMatches && colorMatches;
    // });
    //
    // switch (sortOption) {
    //     case 'priceLowToHigh':
    //         filteredProducts.sort((a, b) => a.price - b.price);
    //         break;
    //     case 'priceHighToLow':
    //         filteredProducts.sort((a, b) => b.price - a.price);
    //         break;
    //     case 'dateAddedNewest':
    //         filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    //         break;
    //     case 'dateAddedOldest':
    //         filteredProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    //         break;
    // }
    //

    // fill_filters(filteredProducts, color, size);
}



let expanded = {'testing':false, 'testing1': false};

function showCheckboxes(id) {
    let checkboxes = document.getElementById(id);
    if (!expanded[id]) {
        if (id === 'testing')
            checkboxes.style.display = "flex";
        else
            checkboxes.style.display = "block";
        expanded[id] = true;
    } else {
        checkboxes.style.display = "none";
        expanded[id] = false;
    }
}

function selectMarker(color) {
    let item = document.getElementById('marker_' + color)
    if (item.classList.contains("unselected")){
        item.classList.remove("unselected");
        item.classList.add("selected");
    }
    else {
        item.classList.remove("selected");
        item.classList.add("unselected");
    }
    filterProducts();
}

let selected = {
    'size': false,
    'brand': false
}
function changeSize(clickedDiv) {
    if (selected['size']){
        clickedDiv.classList.remove("checkNEW");
        clickedDiv.classList.add("checkOLD");
        selected['size'] = false;
    }
    else{
        clickedDiv.classList.remove("checkOLD");
        clickedDiv.classList.add("checkNEW");
        selected['size'] = true;
    }
}

function changeBrand(clickedDiv) {
    if (selected['brand']){
        clickedDiv.classList.remove("brandNEW");
        clickedDiv.classList.add("brandOLD");
        selected['brand'] = false;
    }
    else{
        clickedDiv.classList.remove("brandOLD");
        clickedDiv.classList.add("brandNEW");
        selected['brand'] = true;
    }
    filterProducts();
}


// Event listeners for filtering and sorting
document.getElementById('minPrice').addEventListener('input', filterProducts);
document.getElementById('maxPrice').addEventListener('input', filterProducts);
document.getElementById('size').addEventListener('change', filterProducts);
document.getElementById('color').addEventListener('change', filterProducts);
document.getElementById('sort').addEventListener('change', filterProducts);
document.addEventListener( "DOMContentLoaded", filterProducts);
