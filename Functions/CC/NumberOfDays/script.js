function calculate()
{
   var sdate = document.getElementById("start").value.split("/");
   var edate = document.getElementById("end").value.split("/");
   
   var smm = sdate[0];
   var sdd = sdate[1];
   var syyyy = sdate[2];
   var sdateC = syyyy+"-"+smm+"-"+sdd;
   var startDate = new Date(sdateC);
   console.log(startDate)
   
   var emm = edate[0];
   var edd = edate[1];
   var eyyyy = edate[2];
   var edateC = eyyyy+"-"+emm+"-"+edd;
   var endDate = new Date(edateC);
   console.log(endDate)
   
   var elem = document.getElementById("result");
   var diff = ((endDate - startDate)/ (1000 * 60 * 60 * 24));
   var nextDate = startDate;
   var finalCount = 0;
   for(var j=1;j<=diff;j++){
	   nextDate.setDate(startDate.getDate() + j);
	   if(nextDate.getDay() != 1 || nextDate.getDay() != 6){
		  finalCount = finalCount + 1; 
	   }
   }
   elem.innerHTML = "Number of working days is :" + finalCount;
   elem.style.display = "block";
   
   
   
}