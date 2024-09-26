// Function to get the number of items in the cart
function getCartLength() {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.length;
}

// Example usage:
function displayCartLength(){
    let cartLength = 0;
    cartLength = getCartLength();
    document.getElementById("count").innerHTML = cartLength;
}

displayCartLength();

function Total(){
    let total = document.getElementById("total").innerHTML;
    console.log(total);
    document.getElementById("total2").innerHTML = total;
}