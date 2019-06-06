var address = new Array();
function addAddress() {
	var elem = document.getElementById("address");
	var text = elem.value;
	address.push(text);
	elem.value = "";
}
function displayAddress() {
	var result = document.getElementById("result");
	var allAdd = "<br>";
	for(var i=0;i<address.length;i++){
		allAdd += "Address "+(i+1) + "<br>";
		allAdd += address[i] + "<br>";
	}
	result.innerHTML += allAdd
	result.style.display = "inline"
		address = new Array();
}
