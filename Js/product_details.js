let product1 = {
    name: "Lip Balm Costa",
    price: 178,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/cover-1-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Make Up",
    productId: 'dfefrewscw'
}

let product2 = {
    name: "Better Roses",
    price: 145,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "/images/best_sellers/Cover-15-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Others",
    productId: 'hdhdhdhrsf'
}

let product3 = {
    name: "Magical Roses",
    price: 354,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/Cover-16-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Others",
    productId: 'hyyffhdhrsf'
}

let product4 = {
    name: "Mexican Texture",
    price: 205,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/Cover-17-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Others",
    productId: 'ffrestt'
}

let product5 = {
    name: "South Africa Texture",
    price: 478,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/Cover-19-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Others",
    productId: 'dfrssefd'
}


let product6 = {
    name: "Hills Ingredient",
    price: 506,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/Cover-22-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Ingredient",
    productId: 'dfredrtd'
}


let product7 = {
    name: "Organic Ingredient",
    price: 587,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/Cover-18-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Organic",
    productId: 'gfsxerr'
}


let product8 = {
    name: "Amazon Ingredient",
    price: 900,
    details: "Lorem IpsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, error quibusdam iure quos esse optio laborum voluptate, officiis explicabo ea nemo inventore laboriosam? Blanditiis quis obcaecati hic similique consequatur!",
    image: "images/best_sellers/cover-4-271x281.jpg",
    tag1: "Accessories",
    tag2: "Lips",
    tag3: "Organic",
    productId: 'hfijdhge'
}

let locationsCharges = {
    Nairobi: 200,
    Nakuru: 400,
    Mombasa: 900,
    Eldoret: 600,
    Kisumu: 500,
}


let heading = document.getElementById("heading");
let pricing = document.getElementById("pricing");
let details = document.getElementById("details");
let image = document.getElementById("product_image1");
let deliveryLocations = document.getElementById("delivery_locations");
let buttonAddQty = document.getElementById("add");
let buttonRemoveQty = document.getElementById("remove");
let productFullAmountTracker;

for (const [key, value] of Object.entries(locationsCharges)) {
    deliveryLocations.innerHTML += `<option value="${key}" id= "${key}">${key}</option>`
}

let receivedID = window.location.search;//get the searched after ? in the url
let productID = decodeURIComponent(receivedID).substring(1); // decode the url and split it to remover the ?
if (productID == product1.productId) {
    heading.innerText = product1.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product1.price}</span>`;
    details.innerHTML = product1.details;
    image.src = product1.image;
    qtyAmount(product1.price);
}

else if (productID == product2.productId) {
    heading.innerText = product2.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product2.price}</span>`;
    details.innerHTML = product2.details;
    image.src = product2.image;
    qtyAmount(product2.price);
}

else if (productID == product3.productId) {
    heading.innerText = product3.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product3.price}</span>`;
    details.innerHTML = product3.details;
    image.src = product3.image;
    qtyAmount(product3.price);
}
else if (productID == product4.productId) {
    heading.innerText = product4.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product4.price}</span>`;
    details.innerHTML = product4.details;
    image.src = product4.image;
    qtyAmount(product4.price);
}
else if (productID == product5.productId) {
    heading.innerText = product5.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product5.price}</span>`;
    details.innerHTML = product5.details;
    image.src = product5.image;
    qtyAmount(product5.price);
}
else if (productID == product6.productId) {
    heading.innerText = product6.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product6.price}</span>`;
    details.innerHTML = product6.details;
    image.src = product6.image;
    qtyAmount(product6.price);
}
else if (productID == product7.productId) {
    heading.innerText = product7.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product7.price}</span>`;
    details.innerHTML = product7.details;
    image.src = product7.image;
    qtyAmount(product7.price);
}
else if (productID == product8.productId) {
    heading.innerText = product8.name;
    pricing.innerHTML = `KES : <span id="fullAmount"> ${product8.price}</span>`;
    details.innerHTML = product8.details;
    image.src = product8.image;
    qtyAmount(product8.price);
}


function locationCharges(selectedDeliveryLocation) {
    let chargedAmount = 0;

    //loop in the locationsCharges object to get keys and values

    for (const [key, value] of Object.entries(locationsCharges)) {
        if (key == selectedDeliveryLocation) {
            chargedAmount = parseInt(value);
            break;
        }
        else if (key == "") {
            chargedAmount = 0;
            break;
        }
    }
    return chargedAmount;
}

deliveryLocations.onchange = function () {
    let deliveryAmnt = document.getElementById("deliveryAmnt");
    let location = document.getElementById("delivery_locations").value;
    let changedDeliveryAmount = locationCharges(location);
    deliveryAmnt.innerText = changedDeliveryAmount;
}


function qtyAmount(price) {
    document.getElementById("product_count_tracker").onkeyup = function () {
        if (parseInt(document.getElementById("product_count_tracker").value) < 1) {
            alert("Must be greater than 1");
        }
        let qty = document.getElementById("product_count_tracker").value;
        qtyInt = parseInt(qty);
        let finalAmount = qtyInt * price;
        productFullAmountTracker = finalAmount;
        pricing.innerHTML = `KES : <span id="fullAmount"> ${finalAmount}</span>`;
        if (isNaN(finalAmount)) {
            pricing.innerHTML = `KES : <span id="fullAmount"> ${price}</span>`;
        }
    }

}

function addQty() {
    let availableQty = document.getElementById("product_count_tracker").value;
    let availableQtyNum = parseInt(availableQty);
    let incrementQyantity = availableQtyNum += 1;
    document.getElementById("product_count_tracker").value = incrementQyantity;
}

function removeQty() {
    let availableQty = document.getElementById("product_count_tracker").value;
    let availableQtyNum = parseInt(availableQty);
    let incrementQyantity = availableQtyNum -= 1;
    document.getElementById("product_count_tracker").value = incrementQyantity;
    if (parseInt(document.getElementById("product_count_tracker").value) < 1) {
        alert("Must be greater than 1");
        document.getElementById("product_count_tracker").value = 1;
    }
}

buttonAddQty.addEventListener("click", function () {
    addQty();
    incrementQtyAmount(product1, product1.productId);
    incrementQtyAmount(product2, product2.productId);
    incrementQtyAmount(product3, product3.productId);
    incrementQtyAmount(product4, product4.productId);
    incrementQtyAmount(product5, product5.productId);
    incrementQtyAmount(product6, product6.productId);
    incrementQtyAmount(product7, product7.productId);
    incrementQtyAmount(product8, product8.productId);

})

buttonRemoveQty.addEventListener("click", function () {
    removeQty();
    incrementQtyAmount(product1, product1.productId);
    incrementQtyAmount(product2, product2.productId);
    incrementQtyAmount(product3, product3.productId);
    incrementQtyAmount(product4, product4.productId);
    incrementQtyAmount(product5, product5.productId);
    incrementQtyAmount(product6, product6.productId);
    incrementQtyAmount(product7, product7.productId);
    incrementQtyAmount(product8, product8.productId);
})

function incrementQtyAmount(product, id) {
    let qtyProductAmount;
    let availableQty = document.getElementById("product_count_tracker").value;
    let availableQtyNum = parseInt(availableQty);
    let dbProductID = window.location.search;
    let decordedProductID = decodeURIComponent(dbProductID);
    let productID = decordedProductID.substring(1);
    if (productID == id) {
        qtyProductAmount = product.price * availableQtyNum;
        pricing.innerHTML = `KES : <span id="fullAmount"> ${qtyProductAmount}</span>`;
    }

}





