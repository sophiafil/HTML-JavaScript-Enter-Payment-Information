function validateForm() {
	let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let zip = document.getElementById("zip").value;
    let email = document.getElementById("email").value;
    let nameOnCard = document.getElementById("nameOnCard").value;
    let cardNum = document.getElementById("cardNum").value;
    let cvc = document.getElementById("cvc").value;
    let states = document.getElementById("state").value;
    let expDate = document.getElementById("expDate").value;
	
	if(!validateControl(zip, "Zip", 5)) {
        return false;
    }

    if(!validateEmail(email)) {
        return false;
    }
	
	if(!validateCreditCard(cardNum)) {
        return false;
    }
	
	if(!validateControl(cvc, "CVV2/CVC", 3)) {
        return false;
    }
	
	if(!validateState(states)) {
        return false;
    }

    if(!validateDate(expDate)) {
        return false;
    }
	
	alert("Your payment has been processed and submitted.");
    return false;

}

function testLength(value, length){
	if(value.length == length) {
        return true;
    }
    else {
        return false;
    }
}

function testNumber(value){
	if(isNaN(value)) {
        return false;
    } 
    else {
        return true;
    }
}

function validateControl(control, name, length){
	
	let correctLength = testLength(control, length);
	let correctType = testNumber(control);
	
	//Zip code
	if(name == "Zip" && !correctLength) {
        alert("Please enter in a zip code that is 5 digits long.");
        return false;
	}
	if(name == "Zip" && !correctType) {
        alert("Please enter in a zip code using numbers only.");
        return false;
    }
	if(name == "Zip" && (correctType && correctLength)) {
        return true;
    }
	
	//CVV2/CVC
	if(name == "CVV2/CVC" && !correctLength ) {
        alert("Please enter in a CVV2/CVC that is 3 digits long.");
        return false;
    }
	if(name == "CVV2/CVC" && !correctType) {
        alert("Please enter in a CVV2/CVC using numbers only.");
        return false;
    }
	if(name == "CVV2/CVC" && (correctType && correctLength)) {
        return true;
    }
}

function validateCreditCard(value){
	let cardNum = value;
	cardNum = cardNum.replace(/\s/g, "");
	
	let correctType = testNumber(cardNum);
	
	if(!correctType) {
        alert("Please enter in a valid credit card number.");
        return false;
    }
	
	if((!(cardNum[0] == 3)) && (!(cardNum[0] == 5)) && (!(cardNum[0] == 6)) && (!(cardNum[0] == 4))) {
        alert("Please enter a valid credit card type.");
        return false;
    }
	
	if(!(cardNum[0] == 3 && cardNum.length == 15) && !(cardNum[0] == 6 && cardNum.length == 16) && !(cardNum[0] == 5 && cardNum.length == 16) && !(cardNum[0] == 4 && cardNum.length == 16)) {
        alert("Please enter a valid credit card length.");
        return false;
    }
	
	return true;
}

function validateDate(value) {
	let date = new Date(value);
	let currDate = new Date();
	
	if(date.getTime() <= currDate.getTime()) {
        alert("Please enter a valid experation date.");
        return false;
    }

    return true;
}

function validateEmail(value){
	let email = value;
    let reg = /^([a-z]*[0-9]*)+@([a-z]*[0-9]*)+\.[a-z]+$/i;

    if(!reg.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    return true;
}

function validateState(value){
    let state = value;

    if(state == "select") {
        alert("Pleae select a state from the drop-down.")
        return false;
    }

    return true;
}



