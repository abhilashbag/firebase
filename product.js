import { AddtoCart } from "./index.js";
const ProductsDiv = document.getElementById('SingleProduct');

const fetchData = async () =>
    {
        const url = new URLSearchParams(window.location.search);
        console.log(url.get('pid'))
        const res = await fetch(`https://fakestoreapi.com/products/${url.get("pid")}`)
        const data = await res.json();
        displayData(data)
        
    }
// console.log(id);
fetchData()

//Displaying all Products to the page
const displayData = (product) =>{
    console.log(product);
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');
        const line = document.createElement('hr');
        line.classList.add("line")
        leftDiv.classList.add("left-box");
        rightDiv.classList.add("right-box");
        

        const image  = document.createElement("img");
        image.setAttribute("src", product.image);
        image.setAttribute("alt", product.title);
        image.classList.add("single-image");

        const title = document.createElement('h1');
        title.textContent = product.title ;

        const description = document.createElement('p');
        description.textContent = product.description;

        const category = document.createElement("h3");
        category.textContent = `Category : ${product.category.toUpperCase()}`

        const price  = document.createElement("span");
        price.textContent = `💲${product.price}`;

        const star = document.createElement('span');
        star.textContent = "⭐";
        const rate = document.createElement("p");
        rate.textContent = `Rating : ` 
        rate.appendChild(star);
        rate.textContent += `${product.rating.rate} Reviews : ${product.rating.count}` ;

        const cartButton = document.createElement("button");
        cartButton.textContent = "Add to Cart";
        cartButton.classList.add("cart-btn")

        cartButton.addEventListener('click' , ()=>{ AddtoCart(product) })
        
        leftDiv.appendChild( image );
        rightDiv.append(title  ,line, description , category , price , rate ,cartButton)
        ProductsDiv.append(leftDiv, rightDiv);


}
