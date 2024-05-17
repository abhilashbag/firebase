
// Get the cart element and cart count element
const cartElement = document.getElementById('product-list');
// const cartCountElement = document.getElementById('cartCount');

// Retrieve cart items and count from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let count = localStorage.getItem('count') || 0;

const tableBody = document.querySelector("#productTable tbody");

// Display each cart item in the cart element
cart.forEach((productData) => {
   
const newRow = document.createElement("tr");

const imageCell = document.createElement("td");
const imageElement = document.createElement("img");
imageElement.classList.add("image-small")
imageElement.src = productData.image;
imageElement.alt = productData.title;
imageCell.appendChild(imageElement);


const nameCell = document.createElement("td");
nameCell.textContent = productData.title;

const priceCell = document.createElement("td");
priceCell.textContent = `$${productData.price}`;

const totalCell = document.createElement("td");
totalCell.textContent = `$${productData.price}`;

newRow.appendChild(imageCell);
newRow.appendChild(nameCell);
newRow.appendChild(priceCell);
newRow.appendChild(totalCell);

tableBody.appendChild(newRow);

});
// const productData = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
// };

