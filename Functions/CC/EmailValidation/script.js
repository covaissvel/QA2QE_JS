function validate() {
	var emailStr = document.getElementById("email").value;
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var elem = document.getElementById("result");
	if (pattern.test(emailStr)) {
		elem.innerHTML = "Provided E-mail Id is Valid";
		elem.style.display = "block";
		elem.style.color = "green";
	}else{
		elem.innerHTML = "Provided E-mail Id is Invalid";
		elem.style.display = "block";
		elem.style.color = "red";
	}
}