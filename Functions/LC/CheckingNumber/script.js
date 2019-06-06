function myFunction(){
	var number = document.getElementById("input").value;
	var status = isNaN(number);
	var element = document.getElementById("result");
	if(!status){
		console.log("if")
		element.innerHTML = "The Given input is a number";
		element.style.display = "inline";
		element.style.color = "green";
	}else{
		console.log("else")
		element.innerHTML = "The Given input is not a number";
		element.style.display = "inline";
		element.style.color = "red";
	}
}