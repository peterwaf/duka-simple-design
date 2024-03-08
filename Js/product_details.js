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

let heading = document.getElementById("heading");
let pricing = document.getElementById("pricing");
let details = document.getElementById("details");
let image = document.getElementById("product_image1");

let receivedID = window.location.search;//get the searched after ? in the url
let productID = decodeURIComponent(receivedID).substring(1); // decode the url and split it to remover the ?
if (productID == product1.productId) {
    heading.innerText = product1.name;
    pricing.innerText = `KES : ${product1.price}`
    details.innerHTML = product1.details;
    image.src = product1.image;
}

else if (productID == product2.productId) {
    heading.innerText = product2.name;
    pricing.innerText = `KES : ${product2.price}`
    details.innerHTML = product2.details;
    image.src = product2.image;
}

else if (productID == product3.productId) {
    heading.innerText = product3.name;
    pricing.innerText = `KES : ${product3.price}`
    details.innerHTML = product3.details;
    image.src = product3.image;
}
else if (productID == product4.productId) {
    heading.innerText = product4.name;
    pricing.innerText = `KES : ${product4.price}`
    details.innerHTML = product4.details;
    image.src = product4.image;
}
else if (productID == product5.productId) {
    heading.innerText = product5.name;
    pricing.innerText = `KES : ${product5.price}`
    details.innerHTML = product5.details;
    image.src = product5.image;
}
else if (productID == product6.productId) {
    heading.innerText = product6.name;
    pricing.innerText = `KES : ${product6.price}`
    details.innerHTML = product6.details;
    image.src = product6.image;
}
else if (productID == product7.productId) {
    heading.innerText = product7.name;
    pricing.innerText = `KES : ${product7.price}`
    details.innerHTML = product7.details;
    image.src = product7.image;
}
else if (productID == product8.productId) {
    heading.innerText = product8.name;
    pricing.innerText = `KES : ${product8.price}`
    details.innerHTML = product8.details;
    image.src = product8.image;
}