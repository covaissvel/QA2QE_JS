function myFunction()
{
	
	var mnum = document.getElementById("mobileNumber").value;
	var elem = document.getElementById("result");
	var pattern = /^\(?(\d{3})\)?[-]?(\d{3})?[-]?(\d{4})$/;
	if(pattern.test(mnum)){
		 elem.innerHTML = "Mobile number is valid";
	     elem.style.display = "inline";
	     elem.style.color = "green";
	}else{
		 elem.innerHTML = "Mobile number is not valid";
	     elem.style.display = "inline";
	     elem.style.color = "red";
	}
	
}
