var compName = [];
var compCost = [];

function addCompanyQuote() {
	var resultElem = document.getElementById("result");
	resultElem.innerHTML = "";
	var compElem = document.getElementById("companyName");
	var costElem = document.getElementById("cost");
	compName[compElem.value] = costElem.value;
	compCost.push(costElem.value);
	compElem.value = "";
	costElem.value = "";
}
function displayAll() {
	var text = "<table id='resultTable' border=1 width=200 cellpadding=10><tr><td>Company name</td><td>Quoted Cost</td></tr>";
	var resultElem = document.getElementById("result");
	for ( var key in compName) {
		text += "<tr><td>" + key + "</td><td>" + compName[key] + "</td></tr>";
	}
	text += "</table>";
	resultElem.innerHTML = "The company details are <br>"+text;
	resultElem.style.display = "inline";
}
function displayLowestQuotedCompany() {
	var text = "The lowest quoted company is ";
	var resultElem = document.getElementById("result");
	var sorted = sortBasedOnCost(compCost);
	console.log(sorted);
	var lowestCost = sorted[0];
		for(var name in compName){
			if (compName[name] == lowestCost){
				text += name + " and the cost is "+lowestCost;
			}
		}
		resultElem.innerHTML = text;
		resultElem.style.display = "inline";	
}
function displayHighestQuotedCompany() {
	var text = "The highest quoted company is ";
	var resultElem = document.getElementById("result");
	var sorted = sortBasedOnCost(compCost);
	console.log(sorted);
	var highCost = sorted[sorted.length-1];
		for(var name in compName){
			if (compName[name] == highCost){
				text += name + " and the cost is "+highCost;
			}
		}
		resultElem.innerHTML = text;
		resultElem.style.display = "inline";
}

function sortBasedOnCost(arr) {
	return arr.sort((a,b)=>a-b);
}
