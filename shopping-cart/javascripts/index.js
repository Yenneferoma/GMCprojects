
const cartItems = [
    {
        id: "fty",
        production: "Adidas Sneaker",
        description: "A beautiful pair of adidas sneaker",
        price: 100,
        imageUrl: "assets/baskets.png",
        isFavorite: false,
        quantity: 0,
    },
    {
        id: "rty",
        production: "Adidas Sock",
        description: "A beautiful pair of adidas sock",
        price: 20,
        imageUrl: "assets/socks.png",
        isFavorite: true,
        quantity: 0,
    },
    {
        id: "uty",
        production: "Adidas Bag",
        description: "A beautiful pair of adidas bag",
        price: 50,
        imageUrl: "assets/bag.png",
        isFavorite: false,
        quantity: 0,
    },
];

// target product list div

const listProductsDiv = document.querySelector(".list-products");
const totalPriceSpan = document.querySelector(".total");

// render cart items to the DOM 
function renderCartItems() {
    listProductsDiv.innerHTML = "";
    totalPriceSpan.textContent = "";
    let productTotalPrice = 0;
//     loop through cart items array
for (cartItem of cartItems) {
    productTotalPrice += cartItem.price * cartItem.quantity;

    totalPriceSpan.textContent = `$${productTotalPrice}`;
    //     create a new card div
    const cartCard = document.createElement ("div");
    cartCard.classList.add(`card-body`);

    cartCard.innerHTML = `<div class="card-body">
            <div class="card" style="width: 18rem">
              <img
                src="${cartItem.imageUrl}"
                class="card-img-top"
                alt="baskets"
              />
              <div class="card-body">
                <h5 class="card-title">${cartItem.production}</h5>
                <p class="card-text">${cartItem.description}</p>
                <h4 class="unit-price">$${cartItem.price}</h4>
                <div>
                  <i class="fas fa-plus-circle" value=${cartItem.id}></i>
                  <span class="quantity">${cartItem.quantity}</span>
                  <i class="fas fa-minus-circle" value=${cartItem.id}></i>
                </div>
                <div>
                  <i class="fas fa-trash-alt" value=${cartItem.id}></i>
                  

                  ${
                    cartItem.isFavorite
                    ? `<i class="fas fa-heart favorite" value=${cartItem.id}></i>`
                    : `<i class="fas fa-heart" value=${cartItem.id}></i>`
                  }
                  
                </div>
              </div>
            </div>
          </div>`;

          listProductsDiv.appendChild(cartCard);
    }

    // select all products price / item increase btn

    const increaseItemsBtn = document.getElementsByClassName("fa-plus-circle");

    // select all products price / item decrease btn

    const decreaseItemsBtn = document.getElementsByClassName("fa-minus-circle");

    // select all products price / item delete btn

    const deleteItemsBtn = document.getElementsByClassName("fa-trash-alt");

    const heartItemsBtn = document.getElementsByClassName("fa-heart");




    // loop over the array of increaseItemBtn

    for (increaseItemBtn of increaseItemsBtn) {
        increaseItemBtn.addEventListener("click", increaseCartItemPrice);
    }

    // loop over the array of decreaseItemBtn

    for (decreaseItemBtn of decreaseItemsBtn) {
        decreaseItemBtn.addEventListener("click", decreaseCartItemPrice);
    }

    // loop over the array of deleteItemBtn

    for (deleteItemBtn of deleteItemsBtn) {
        deleteItemBtn.addEventListener("click", deleteCartItem);
    }

    // loop over the array for favoriteItemsBtn 

    for (let heartItemBtn of heartItemsBtn) {
        heartItemBtn.addEventListener("click", toggleFavorite);
    }

}

// call the renderCartItems function on window load

window.addEventListener("load", renderCartItems);

// change cart items quantity and price 

function increaseCartItemPrice(event) {
    // get id of the product

    const productId = event.target.getAttribute("value");

    // find the index of the product on the cart items array 

    const foundProductIndex = cartItems.findIndex(
        (item) => item.id === productId
    );

    // get the actual product on the cart items array by the product index
    const productToUpdate = cartItems [foundProductIndex];

    // update quantity of product on products object 

    const updatedProduct = {
        ...productToUpdate,
        quantity: (productToUpdate.quantity += 1),
    };

    // update cart items array with updated product 
    cartItems[foundProductIndex] = updatedProduct;

    return renderCartItems();
// console.log(productId) 

}

function decreaseCartItemPrice(event) {
    const productId = event.target.getAttribute("value");

    // find the index of the product on the cart items array 

    const foundProductIndex = cartItems.findIndex(
        (item) => item.id === productId
    );

    // get the actual product on the cart items array by the product index
    const productToUpdate = cartItems [foundProductIndex];

    // update quantity of product on products object 

    const updatedProduct = {
        ...productToUpdate,
        quantity: 
        productToUpdate.quantity === 0
        ? (productToUpdate.quantity = 0)
        : (productToUpdate.quantity -= 1),
    };

    // update cart items array with updated product 
    cartItems[foundProductIndex] = updatedProduct;

    return renderCartItems();

    // console.log(productId)
    
}

// To delete cart items quantity and price 

function deleteCartItem(event) {
    
    // get id of the product

    const productId = event.target.getAttribute("value");

    // find the index of the product on the cart items array 

    const foundProductIndex = cartItems.findIndex( item => item.id === productId);

    // Check if the product is found in the cart
    if(foundProductIndex < 0) {
        return

    }
    cartItems.splice(foundProductIndex, 1)
    
    return renderCartItems();
}

function toggleFavorite(event) {
    const productId = event.target.getAttribute("value");
    // Toggle the isFavorite status of the found product
    // Find the index of the product on the cart items array 

    const foundProductIndex = cartItems.findIndex (
        (item)=> item.id === productId
    );

    //get the actual product on the cart items array by the products index
    const productToUpdate = cartItems[foundProductIndex];

    // update quality of product on the products objects
    const updatedProduct = {
        ...productToUpdate,
        isFavorite: productToUpdate.isFavorite ? false : true
    };

    // update cart items array with updated product 

    cartItems[foundProductIndex] = updatedProduct;

    return renderCartItems();
}
