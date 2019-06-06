var pol = [];
function addPolicy() {
	var elem = document.getElementById("claimNumber");
	var textVal = elem.value.split("");
	var policyNum = textVal[0] + textVal[1] + textVal[2] + textVal[3];
	console.log(policyNum);
	pol.push(policyNum);
	elem.value = "";
}
function displayPolicy() {
	var elem = document.getElementById("result");
	var text = "";

//	for (var i = 0; i < pol.length; i++) {
//		if (i == 0) {
//			text = pol[i]
//		} else {
//			text = text + "," + pol[i]
//		}
//	}

	elem.innerHTML = "The Policy numbers are " + pol
	elem.style.display = "inline"
	pol = [];
}
