var expArr =[];
function add() {
	document.getElementById("result").innerHTML = "";
	var codeElem = document.getElementById("code");
	var expElem = document.getElementById("amount");
	var value = codeElem.value;
	
	var amt = expElem.value;
	var oldAmt = expArr[value];
	if(!isNaN(oldAmt)){
		expArr[value] = parseInt(amt) + parseInt(oldAmt);
	}else{
		expArr[value] = parseInt(amt);
	}
	
	expElem.value = "";
}

function calculate() {
	var elem = document.getElementById("result");
	var text = "";
	for(var key in expArr){
		text += key + " : " + expArr[key] + "<br>"
	}
	elem.innerHTML = "<h2>Expense Details</h2>"+ text;
	elem.style.display = "inline";
	expArr = [];
}