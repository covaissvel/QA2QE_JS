var dyn_functions = [];
dyn_functions['populate_Colours'] = function (arg1, arg2) { 
                // function body
           };
itemArr = [];
function getItemDetails() {
  itemArr = createItem();
  
  var elem = document.getElementById("myTable");
  var text = "";
  for(var i=0;i<itemArr.length;i++){
	  var arrElem = itemArr[i];
  	text += "<tr><td><input type='checkbox' id='check"+i+"'></input><td>"+arrElem.itemName+"</td><td>"+arrElem.price+"</td><td>"+arrElem.availableQuantity+"</td><td><input type='text' id='text"+i+"' onkeyup='compute()'></input></td></tr>";
  }
  elem.innerHTML += text;
  
  
  compute();
  
  
}
 
  
function compute(){
   var cb0 = document.getElementById("check0");
   var cb1 = document.getElementById("check1");
   var cb2 = document.getElementById("check2");
   var cb3 = document.getElementById("check3");
   var cb4 = document.getElementById("check4");
   var cb5 = document.getElementById("check5");
   var tb0 = document.getElementById("text0");
   var tb1 = document.getElementById("text1");
   var tb2 = document.getElementById("text2");
   var tb3 = document.getElementById("text3");
   var tb4 = document.getElementById("text4");
   var tb5 = document.getElementById("text5");
	var cost = 0;
   if(cb0.checked){
	   cost += varArr[0] * tb0.value; 
   }
   
   var res = document.getElementById("result");
   res.innerHtml = "The total purchased cost is "+cost;
   res.style.display = "inline";
}

    
function Item(itemName,price,availableQuantity)
{
    this.itemName = itemName;
    this.price = price;
    this.availableQuantity = availableQuantity;
}

function createItem(){
    var itemArray=new Array();
    var element;
    element=new Item("Computer","35000",5);
    itemArray.push(element);
     element=new Item("Laptop","45000",9);
    itemArray.push(element);
     element=new Item("Mobile","15000",15);
    itemArray.push(element);
     element=new Item("Television","25000",8);
    itemArray.push(element);
    element=new Item("Refrigerator","30000",6);
    itemArray.push(element);
    
    return itemArray;
}
