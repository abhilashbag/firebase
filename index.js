const ProductsDiv = document.getElementById("Products");
const cartCount = document.getElementById("cartCount");
// const cartBtn = document.getElementById("cart")


let count =  0 ;
let cart = [];
const url = 'https://fakestoreapi.com/products'

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayData(data)
        
    } catch (error) {
        console.log('We are facing a error checkout to it...', error);
        
    }
}
//Calling fetch product 
fetchData()

//Displaying all Products to the page
const displayData = (data) =>{

    data.forEach(product => {
        // console.log(product);
        const div = document.createElement('div');
        div.classList.add("product");
        const buttonDiv = document.createElement('div');
        const detailDiv = document.createElement('div');
        detailDiv.classList.add("detail");

        const image  = document.createElement("img");
        image.setAttribute("src", product.image);
        image.setAttribute("alt", product.title);
        image.classList.add("image");

        const title = document.createElement('h3');
        title.textContent = product.title ;

        const price  = document.createElement("span");
        price.textContent = `$ ${product.price}`;

        const rate = document.createElement("p");
        rate.textContent = `Rating : ${product.rating.rate}`

        const cartButton = document.createElement("button");
        cartButton.textContent = "Add to Cart";
        cartButton.classList.add("buttons")

        cartButton.addEventListener('click' , ()=>{ AddtoCart(product) })

        const anchor = document.createElement('a');
        anchor.href = `./product.html?pid=${product.id}`
        anchor.target = "_blank"
        anchor.appendChild(image);

        buttonDiv.appendChild(cartButton);

        detailDiv.append(title , price , rate)
        div.append( anchor ,detailDiv ,buttonDiv  );
        ProductsDiv.append(div);

        // cartBtn.addEventListener("click", ()=> { CartProductList(product)}  )
        
    });
}

//Add to cart functionality

export const AddtoCart = (product) =>{
    
    console.log(product);
    count++;
    cartCount.textContent = count;
    cart.push(product);

    alert("product  add successfully!");
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('count', count)
}
//Checkout page redirection from cart icon
// cartBtn.addEventListener("click", () => {
//     cartBtn.setAttribute("href", "./checkout.html");
//     // window.location.href = "www.google.com";
// });
