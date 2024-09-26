// let cart = document.getElementById("d1");

// function addcart(){
//     let cart1 = document.getElementById("d1").innerHTML;
//     localStorage.setItem("name", cart1);
// }

// function displaycart(){
//     document.getElementById('cartdiv1').innerHTML = localStorage.getItem("name");
//     document.getElementById('cartdiv2').innerHTML = '<div><button class="w3-btn w3-pink w3-hover-red" >Remove</button></div>';
// }

// displaycart();

// function to count


// Function to add an item to the cart
function addToCart(productName, price) {
    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let cartId = document.getElementById(productName).innerHTML;

    // Add the new item to the cart
    var newItem = {
        name: cartId,
        price: price
    };
    cartItems.push(newItem);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartLength();
    alert("Your Order add to cart.");
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update the cart display
    displayCart();
    displayCartLength();
    alert("Your Order remove to cart.");
}



// Function to display cart items on the cart page
function displayCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartList = document.getElementById('cartdiv1');
    var cartPrice = document.getElementById('price');
    var cartRemove = document.getElementById('cartdiv2');
    cartList.innerHTML = ''; // Clear previous contents
    cartPrice.innerHTML = ''; // Clear previous contents
    cartRemove.innerHTML = ''; // Clear previous contents

    cartTotal = 0;
    cartItems.forEach(function(item, index) {
        var li1 = document.createElement('li');
        li1.innerHTML = item.name;
        cartList.appendChild(li1);
        var li2 = document.createElement('li');
        li2.innerHTML = 'Price- '+item.price+'/-';
        cartPrice.appendChild(li2);

        cartTotal=cartTotal+item.price;

        // Create a remove button for each item
        var li4 = document.createElement('li');
        cartRemove.appendChild(li4);

        var li3 = document.createElement('button');
        li3.textContent = 'Remove';
        li3.setAttribute("class", "w3-btn w3-pink w3-hover-red")
        li3.onclick = function(){
            removeFromCart(index);
        }
        li4.appendChild(li3);
        document.getElementById("total").innerHTML = cartTotal+'/-';

        // Create a remove button for each item
        // var removeButton = document.createElement('button');
        // removeButton.textContent = 'Remove';
        // removeButton.onclick = function() {
        //     removeFromCart(index);
    });
}

// Call displayCart function to render cart items on the cart page
displayCart();

// function remove(){
//     localStorage.removeItem('cart');
// }
