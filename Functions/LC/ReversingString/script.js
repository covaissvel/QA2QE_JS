function reverse() {
	var string = document.getElementById("input").value.split("");
	console.log(string.length)
	var text = "";
	for (var i = string.length - 1; i >= 0; i--) {
		console.log(i)
		text = text + string[i];
	}
	var elem = document.getElementById("result");
	elem.innerHTML = "The Reverse of the String is " + text;
	elem.style.display = "inline";

}