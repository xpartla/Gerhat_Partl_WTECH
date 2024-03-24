// Sample product data
const products = [
    {
        name: 'Pruhované tričko',
        price: 25,
        size: ['M'],
        color: ['modrá', 'ružová'],
        dateAdded: '2024-03-15',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži'],
        category: ['oblečenie'],
        subcategory: ['nové', 'obľúbené', 'tenisky'],
        brand: 'adidas'
    },
    {
        name: 'Džínsy',
        price: 45,
        size: ['XL'],
        color: ['modrá'],
        dateAdded: '2024-03-14',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['obuv'],
        subcategory: ['výpredaj'],
        brand: 'puma'
    },
    {
        name: 'Kapucňová mikina',
        price: 35,
        size: ['XL', 'L'],
        color: ['sivá'],
        dateAdded: '2024-03-13',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži', 'deti'],
        category: ['doplnky'],
        subcategory: ['tenisky'],
        brand: 'H&M'
    },
    {
        name: 'Potlačené šaty',
        price: 55,
        size: ['S'],
        color: ['ružová'],
        dateAdded: '2024-03-12',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['šport'],
        subcategory: ['obľúbené', 'tenisky'],
        brand: 'converse'
    },
    {
        name: 'Kožená bunda',
        price: 85,
        size: ['XS'],
        color: ['čierna'],
        dateAdded: '2024-03-11',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['oblečenie'],
        subcategory: ['výpredaj'],
        brand: 'reebok'
    },
    {
        name: 'Kockovaná košeľa',
        price: 30,
        size: ['M'],
        color: ['červená'],
        dateAdded: '2024-03-10',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži'],
        category: ['šport', 'oblečenie'],
        subcategory: ['nové', 'tenisky'],
        brand: 'nike'
    },
    {
        name: 'Chinos nohavice',
        price: 40,
        size: ['S'],
        color: ['hnedá'],
        dateAdded: '2024-03-09',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži', 'ženy', 'deti'],
        category: ['obuv'],
        subcategory: ['obľúbené', 'tenisky'],
        brand: 'calvin-klein'
    },
    {
        name: 'Sveter',
        price: 60,
        size: ['S', 'M'],
        color: ['zelená'],
        dateAdded: '2024-03-08',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži', 'ženy'],
        category: ['doplnky'],
        subcategory: ['tenisky'],
        brand: 'champion'
    },
    {
        name: 'Florálna sukňa',
        price: 50,
        size: ['XS', 'S'],
        color: ['zelená'],
        dateAdded: '2024-03-07',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['oblečenie', 'doplnky'],
        subcategory: ['nové', 'obľúbené'],
        brand: 'adidas'
    },
    {
        name: 'Plášť',
        price: 75,
        size: ['M'],
        color: ['modrá'],
        dateAdded: '2024-03-06',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži'],
        category: ['šport'],
        subcategory: ['tenisky'],
        brand: 'nike'
    },
    {
        name: 'Potlačená blúza',
        price: 35,
        size: ['M'],
        color: ['fialová'],
        dateAdded: '2024-03-05',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['doplnky'],
        subcategory: ['nové', 'tenisky'],
        brand: 'converse'
    },
    {
        name: 'Cargo nohavice',
        price: 45,
        size: ['XL'],
        color: ['hnedá'],
        dateAdded: '2024-03-04',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['muži', 'ženy'],
        category: ['oblečenie'],
        subcategory: ['výpredaj', 'tenisky'],
        brand: 'puma'
    },
    {
        name: 'Kožená bunda z semišu',
        price: 80,
        size: ['XL'],
        color: ['hnedá'],
        dateAdded: '2024-03-03',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['šport'],
        subcategory: ['tenisky'],
        brand: 'H&M'
    },
    {
        name: 'Maxi šaty',
        price: 65,
        size: ['S'],
        color: ['ružová'],
        dateAdded: '2024-03-02',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['obuv', 'doplnky'],
        subcategory: ['obľúbené', 'tenisky'],
        brand: 'reebok'
    },
    {
        name: 'Džínsy sukňa',
        price: 30,
        size: ['M'],
        color: ['modrá'],
        dateAdded: '2024-03-01',
        imageUrl: 'src/products/black_shirt.jpg',
        gender: ['ženy'],
        category: ['oblečenie'],
        subcategory: ['nové', 'tenisky'],
        brand: 'calvin-klein'
    }
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

// Function to render products
function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    if (!products.length) {
        const par = document.createElement('h1');
        par.style.minWidth = '80%';
        par.style.textAlign = 'center';
        par.innerHTML = 'Ľutujeme, ale žiaden s produktov nevyhovuje všetkým vašim požiadavkam.'
        productList.appendChild(par);
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" height="200px" width="200px">
      <h5 style="font-weight: bold">${product.name}</h5>
      <p>${product.brand}</p>
      <p>$${product.price}</p>
      <button type="button" onclick="location.href = 'item.html';" style="background-color: #ffe288; font-weight: bold; border-radius: 12px; padding: 8px;">Zobraziť</button>
    `;
        productList.appendChild(productCard);
    });
}

// Initial rendering of products
renderProducts(products);

function filterProducts() {
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Number.MAX_VALUE;
    const brands = document.getElementsByClassName('brandNEW');
    const colors = document.getElementsByClassName('selected');
    const sizes = document.getElementsByClassName('checkNEW');
    let sortOption = document.getElementById('sort').textContent;

    let filteredProducts = products;

    //colors
    let tmp = [];

    Array.prototype.forEach.call(colors, function (el) {
        tmp.push(el.id.substring(7));
    });

    if (tmp.length) {
        tmp = replaceValues(tmp, mapping);
        filteredProducts = filteredProducts.filter(product => {
            return product.color.some(color => tmp.includes(color));
        });
    }

    //brands
    tmp = [];

    Array.prototype.forEach.call(brands, function (el) {
        tmp.push(el.id);
    });

    if (tmp.length) {
        filteredProducts = filteredProducts.filter(product => {
            return tmp.includes(product.brand);
        });
    }

    //sizes
    tmp = [];

    Array.prototype.forEach.call(sizes, function (el) {
        tmp.push(el.id);
    });

    if (tmp.length) {
        tmp = replaceValues(tmp, mapping);
        filteredProducts = filteredProducts.filter(product => {
            return product.size.some(size => tmp.includes(size));
        });
    }

    //cena
    filteredProducts = filteredProducts.filter(product => {
        return (product.price >= minPrice && product.price <= maxPrice);
    });

    //sort
    sortOption = (sortOption.split(' ')).splice(0,2).join(' ')
    switch (sortOption) {
        case 'Cena: najnižšia':
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'Cena: najvyššia':
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'Dátum: najnovšie':
            filteredProducts = filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'Dátum: najstaršie':
            filteredProducts = filteredProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
            break;
    }

    // Render filtered products
    renderProducts(filteredProducts);
}

let expanded = {'testing': false, 'testing1': false, 'testing2': false, 'testing3': false};

function showCheckboxes(id, el) {
    let checkboxes = document.getElementById(id);
    if (!expanded[id]) {
        if (id === 'testing' || id === 'testing3')
            checkboxes.style.display = "flex";
        else
            checkboxes.style.display = "block";
        expanded[id] = true;
    } else {
        checkboxes.style.display = "none";
        expanded[id] = false;
    }
    let st = window.getComputedStyle(el, null);
    let tr = st.getPropertyValue("transform");
    if (tr === 'none')
        el.style.transform = 'rotate(180deg)';
    else
        el.style.transform = 'none';
}

function selectMarker(color) {
    let item = document.getElementById('marker_' + color)
    if (item.classList.contains("unselected")) {
        item.classList.remove("unselected");
        item.classList.add("selected");
    } else {
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
    if (selected['size']) {
        clickedDiv.classList.remove("checkNEW");
        clickedDiv.classList.add("checkOLD");
        selected['size'] = false;
    } else {
        clickedDiv.classList.remove("checkOLD");
        clickedDiv.classList.add("checkNEW");
        selected['size'] = true;
    }
    filterProducts();
}

function changeBrand(clickedDiv) {
    if (selected['brand']) {
        clickedDiv.classList.remove("brandNEW");
        clickedDiv.classList.add("brandOLD");
        selected['brand'] = false;
    } else {
        clickedDiv.classList.remove("brandOLD");
        clickedDiv.classList.add("brandNEW");
        selected['brand'] = true;
    }
    filterProducts();
}

function select_highlighted(chosen, category) {
    let all_elms = document.getElementsByClassName(category);
    Array.prototype.forEach.call(all_elms, function (el) {
        el.style.textDecoration = 'none';
        el.style.fontWeight = 'normal';
        el.style.color = '#808080';
    });
    chosen.style.textDecoration = 'underline';
    chosen.style.fontWeight = 'bold';
    chosen.style.color = 'black';
}

function selectOption(option) {
    document.getElementById("sort").innerText = option;
    filterProducts();
}


// Event listeners for filtering and sorting
document.getElementById('minPrice').addEventListener('input', filterProducts);
document.getElementById('maxPrice').addEventListener('input', filterProducts);
document.addEventListener("DOMContentLoaded", filterProducts);
