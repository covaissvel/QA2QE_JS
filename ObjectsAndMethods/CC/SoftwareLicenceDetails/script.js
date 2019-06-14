function Licence(num, name, amt) {
	this.licenceNumber = num;
	this.licenceName = name;
	this.licenceAmount = amt;

}
var amount, licNum;
function getLicenceDetails() {
	var licenceArray = [];
	var licence = new Licence(0, "Select", "");
	licenceArray.push(licence);
	var licence = new Licence("123456789abc", "Mozilla Public License 2.0",
			5000);
	licenceArray.push(licence);
	licence = new Licence("1237X54", "Apache License 2.0", 15000);
	licenceArray.push(licence);
	licence = new Licence("A7746771", "Eclipse Public License", 10000);
	licenceArray.push(licence);
	licence = new Licence("Z8954554", "GNU General Public License (GPL)",
			20000);
	licenceArray.push(licence);
	licence = new Licence("9875624X", "MIT license", 30000);
	licenceArray.push(licence);
	return licenceArray;
}

function populateLicenceDetails() {
	var licArr = getLicenceDetails();
	var selElem = document.getElementById("licenseName");

	for (var i = 0; i < licArr.length; i++) {
		var opt = document.createElement('option');
		opt.appendChild(document.createTextNode(licArr[i].licenceName));
		opt.value = licArr[i].licenceNumber;
		selElem.appendChild(opt);
	}

}

function getLicence() {
	var licArr = getLicenceDetails();
	var selElem = document.getElementById("licenseName");
	licNum = selElem.value;
	for(var i = 0; i < licArr.length; i++){
		if (licArr[i].licenceNumber == licNum){
			amount = licArr[i].licenceAmount;
			document.getElementById("amount").value = amount;
			break;
		}
	}
}

function compute() {
	var qty = document.getElementById("quantity").value;
	var totalCost = qty * amount;
	var resElem = document.getElementById("result");
	resElem.innerHTML = "The total purchased quantity of license "+licNum+" is "+qty+" and the amount is Rs."+totalCost;
	resElem.style.display = "inline";

}
