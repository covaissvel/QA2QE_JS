function Customer(name, address, number){
	this.name = name;
	this.address = address;
	this.number = number;
}
function display(){
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var number = document.getElementById("number").value;
	var customer = new Customer(name, address, number);
	var text = "Name :"+customer.name+"<br>"+"Address :"+customer.address+"<br>"+"Phone Number :"+customer.number;
	document.getElementById("result").innerHTML = text;
	document.getElementById("result").style.display = "inline";  
}


