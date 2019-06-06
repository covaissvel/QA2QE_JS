function getVowels() {

	var string = document.getElementById("string").value.split("");
	var count = 0;
	for(var i=0;i<string.length;i++){
		if(string[i] == "a" || string[i] == "e" ||string[i] == "i" ||string[i] == "o" ||string[i] == "u" ){
			count = count+1;
		}
	}
	document.getElementById("result").innerHTML = "Number of vowels : " + count;
	document.getElementById("result").style.display = "inline";
	
}
