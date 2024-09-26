
//for contact us form 
function contSubmit (){
    if(document.getElementById('textName').value == "")
    {
        document.getElementById("errName").innerHTML = "Please Enter your Full Name"
    }
    else if(document.getElementById('textName').value.length<=2 || document.getElementById('textName').value.length >=20)
    {
        document.getElementById("errName").innerHTML = "please type 3 to 19 character in Your Name"
    }
    if(document.getElementById('textEmail').value == "")
    {
        document.getElementById("errEmail").innerHTML = "Please Enter your Email"
    }
    if(document.getElementById('textNumber').value == "")
    {
        document.getElementById("errNumber").innerHTML = "Please Enter your Phone Number"
    }
    else if(document.getElementById('textNumber').value.length!=10)
    {
        document.getElementById("errNumber").innerHTML = "please enter your valid phon number"
    }
    else{
        document.getElementById("errName").innerHTML = ""
        document.getElementById("errEmail").innerHTML = ""
        document.getElementById("errNumber").innerHTML = ""
        document.getElementById("textName").value = ""
        document.getElementById("textEmail").value = ""
        document.getElementById("textNumber").value = ""
        document.getElementById("textQuerry").value = ""
        alert("Thank You For your Feedback");
    }
}


// for sign Up form

function signSubmit (){
    if(document.getElementById('textName1').value == "")
    {
        document.getElementById("errName1").innerHTML = "Please Enter your Full Name";
    }
    else if(document.getElementById('textName1').value.length<=2 || document.getElementById('textName1').value.length >=20)
    {
        document.getElementById("errName1").innerHTML = "please type 3 to 19 character in Your Name";
    }
    if(document.getElementById('textEmail1').value == "")
    {
        document.getElementById("errEmail1").innerHTML = "Please Enter your Email";
    }
    if(document.getElementById('textNumber1').value == "")
    {
        document.getElementById("errNumber1").innerHTML = "Please Enter your Phone Number";
    }
    else if(document.getElementById('textNumber1').value.length!=10)
    {
        document.getElementById("errNumber1").innerHTML = "please enter your valid phon number";
    }
    if(document.getElementById('textPassword1').value == "")
    {
        document.getElementById("errPassword1").innerHTML = "Please Enter your Password";
    }
    else if(document.getElementById('textPassword1').value.length<=8 || document.getElementById('textPassword1').value.length >=20)
    {
        document.getElementById("errPassword1").innerHTML = "please enter 8 to 20 character in your password";
    }
    else{
        document.getElementById("errName1").innerHTML = "";
        document.getElementById("errEmai1l").innerHTML = "";
        document.getElementById("errNumber1").innerHTML = "";
        document.getElementById("errPassword1").innerHTML = "";
        document.getElementById("textName1").value = "";
        document.getElementById("textEmail1").value = "";
        document.getElementById("textNumber1").value = "";
        document.getElementById("textPassword1").value = "";
        alert("Thank You For Sign In");
    }
}

// for Address form

function addressOff(){
    document.getElementById("detailForm").style.display = "none";
    document.getElementById("showAdd").style.display = "block";
}

function addSubmit(){
    if(document.getElementById('textName2').value.length == 0)
    {
        document.getElementById("errName2").innerHTML = "Please Enter your Full Name";
    }
    if(document.getElementById('textName2').value.length<=2 || document.getElementById('textName2').value.length >=20)
    {
        document.getElementById("errName2").innerHTML = "please type 3 to 19 character in Your Name";
    }
    if(document.getElementById('textPin').value.length == 0)
    {
        document.getElementById("errPin").innerHTML = "Please Enter your pin";
    }
    if(document.getElementById('textPin').value.length<=6 || document.getElementById('textPin').value.length >=10)
    {
        document.getElementById("errPin").innerHTML = "please type 6 to 10 digit in Pincode";
    }
    if(document.getElementById('textNumber2').value.lengthe == 0)
    {
        document.getElementById("errNumber2").innerHTML = "Please Enter your Phone Number";
    }
    if(document.getElementById('textNumber2').value.length!=10)
    {
        document.getElementById("errNumber2").innerHTML = "please enter your valid phone number";
    }
    if(document.getElementById('textAdd').value.length == 0)
    {
        document.getElementById("errAdd").innerHTML = "Please Enter your Address";
    }
    if(document.getElementById('textAdd').value.length<=2 || document.getElementById('textAdd').value.length >=30)
    {
        document.getElementById("errAdd").innerHTML = "please type 3 to 30 character in Your Address";
    }
    if(document.getElementById('textArea').value.length == 0)
    {
        document.getElementById("errArea").innerHTML = "Please Enter your Area";
    }
    if(document.getElementById('textArea').value.length<=2 || document.getElementById('textArea').value.length >=20)
    {
        document.getElementById("errArea").innerHTML = "please type 3 to 19 character in Area";
    }
    if(document.getElementById('textLand').value.length == 0)
    {
        document.getElementById("errLand").innerHTML = "Please Enter your Landmark";
    }
    if(document.getElementById('textLand').value.length<=2 || document.getElementById('textLand').value.length >=20)
    {
        document.getElementById("errLand").innerHTML = "please type 3 to 19 character in Landmark";
    }
    else{
        document.getElementById("errName2").innerHTML = "";
        document.getElementById("errNumber2").innerHTML = "";
        document.getElementById("errPin").innerHTML = "";
        document.getElementById("errAdd").innerHTML = "";
        document.getElementById("errArea").innerHTML = "";
        document.getElementById("errLand").innerHTML = "";
        document.getElementById("textName2").value = "";
        document.getElementById("textNumber2").value = "";
        document.getElementById("textPin").value = "";
        document.getElementById("textAdd").value = "";
        document.getElementById("textArea").value = "";
        document.getElementById("textLand").value = "";
        addressOff()
    }
}