function dateValidate()
{
	var date = document.getElementById("date").value.split("-");
	var divE = document.getElementById("result");
	var dd = date[0];
	var mm = date[1];
	var yyyy = date[2];
	var newDate = new Date(yyyy+"-"+mm+"-"+dd);
	if(!isNaN(newDate)){
		divE.innerHTML = "Date is valid";
		divE.style.display = "inline";
		divE.style.color = "green";
	}else{
		divE.innerHTML = "Date is invalid";
		divE.style.display = "inline";
		divE.style.color = "red";
	}
	
}
		