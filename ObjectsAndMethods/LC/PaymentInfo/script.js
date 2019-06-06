function Card(paymentOption, cardType, cardNumber, cvv, expireDate, amount) {
	this.paymentOption = paymentOption;
	this.cardType = cardType;
	this.cardNumber = cardNumber;
	this.cvv = cvv;
	this.expireDate = expireDate;
	this.amount = amount;
}
function validate() {
	var ow = document.getElementById("optionWarning");
	var tw = document.getElementById("typeWarning");
	var cw = document.getElementById("cardWarning");
	var cvvw = document.getElementById("cvvWarning");
	var warn = document.getElementById("dateWarning");
	var aw = document.getElementById("amountWarning");
	
	

	var status = true;
	console.log("I am in")
	var po = document.getElementById("paymentOption").value;	console.log(po)
	if (po == "please") {
		ow.innerHTML = "Please select the payment option";
		ow.style.display = "inline";
		ow.style.color = "red";
		status = false;
	}else{
		ow.style.display = "none";
	}
	
	
	var ct = document.getElementById("cardType").value;
	if (ct == "please") {
		tw.innerHTML = "Please select the card type";
		tw.style.display = "inline";
		tw.style.color = "red";
		status = false;
	}else{
		tw.style.display = "none";
	}
	
	var cn = document.getElementById("cardNumber").value;
	if (cn == "") {
		cw.innerHTML = "Please enter the card number";
		cw.style.display = "inline";
		cw.style.color = "red";
		status = false;
	}else{
		cw.style.display = "none";
	}
	
	var cvv = document.getElementById("cvv").value;
	if (cvv == "") {
		cvvw.innerHTML = "Please enter the cvv number";
		cvvw.style.display = "inline";
		cvvw.style.color = "red";
		status = false;
	}else{
		cvvw.style.display = "none";
	}

	var ep = document.getElementById("expireDate").value;
	if (ep == "") {
		warn.innerHTML = "Please enter the expiry date";
		warn.style.color = "red";
		warn.style.display = "block";
		status = false;
	}else{
		warn.style.display = "none";
	}
		
	var today = new Date();
	var expiryDate = new Date(ep);
	if (expiryDate < today) {
		warn.innerHTML = "ExpiryDate should be a future date";
		warn.style.color = "red";
		warn.style.display = "block";
		status = false;
	}

	var am = document.getElementById("amount").value;
	if (am == "") {
		aw.innerHTML = "Please enter the amount";
		aw.style.color = "red";
		aw.style.display = "block";
		status = false;
	}else{
		aw.style.display = "none";	
	}
	
	if (status) {
		proceedPayment();
	}
}
function proceedPayment() {

}
