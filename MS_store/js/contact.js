let btn1 = document.getElementById("signin");
let btn2 = document.getElementById("login");

btn1.addEventListener("click",() => {
    document.querySelector("#sign-in").style.display = "block";
    document.querySelector("#log-in").style.display = "none";
}
)

btn2.addEventListener("click",() => {
    document.querySelector("#sign-in").style.display = "none";
    document.querySelector("#log-in").style.display = "block";
}
)

function address(){
    document.getElementById("detailForm").style.display = "block";
}

function addressOff(){
    document.getElementById("detailForm").style.display = "none";
    document.getElementById("showAdd").style.display = "block";
}

function displayPayment(){
    document.getElementById("pay-mathod").style.display = "block";
}

function Payment(){
    document.getElementById("cardPayment").style.display = "block";
}
function PaymentOff(){
    document.getElementById("cardPayment").style.display = "none";
    document.getElementById("showPayment").style.display = "block";
    document.getElementById("PlaceOdr").style.display = "block";
}

function placeOdrOff(){
    document.getElementById("PlaceOdr").style.display = "none";
    document.getElementById("pay-mathod").style.display = "none";
    document.getElementById("showAdd").style.display = "none";
    document.getElementById("showPayment").style.display = "none";
    document.getElementById("bookDisplay").style.display = "block";
    localStorage.clear('cart');
    displayCartLength();
}