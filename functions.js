function totalFunction() {
    var styleChoices = document.getElementsByName('styleChoice');
	var styleChoice_value;
	for(var i = 0; i < styleChoices.length; i++){
		if(styleChoices[i].checked){
		styleChoice_value = styleChoices[i].value;
		}
    }
    var tipChoices = document.getElementsByName('tipChoice');
	var tipChoice_value;
	for(var i = 0; i < tipChoices.length; i++){
		if(tipChoices[i].checked){
		tipChoice_value = tipChoices[i].value;
		}
    }
    document.getElementById("total").innerHTML = "Total: $" + styleChoice_value * tipChoice_value; 
    <!-- document.getElementById("total").innerHTML = "Total: $10";-->
}


function display(){
	document.getElementById("banner").
	innerHTML = "Free Delivery";   
}
setTimeout(display, 5000);

function myFunction(){
	window.scrollTo(0, document.body.scrollHeight);
	//var btn = document.createElement("BUTTON");        // Create a <button> element
	//var t = document.createTextNode("CLICK ME");       // Create a text node
	//btn.appendChild(t);                                // Append the text to <button>
	//document.body.appendChild(btn);    
}

function checkZipcodeFunction(){
	
	var x = document.getElementById("myForm");
	var zipcode = "";
	//var i;
	//for (i = 0; i < x.length ;i++) {
    //    zipcode += x.elements[i].value + "<br>";
    //}
	zipcode = x.elements[0].value;
	//alert("Yey! You entered zipcode: " + zipcode);	
	//var form = document.getElementById("myForm");
	//form.addEventLister("submit", function(){
	//alert("Form was submitted!"};
	
	
	if(zipcode > 20000){
		alert("You entered zipcode: " + zipcode + ". We\'ve got your area covered!");
		//return true;		
	}
	else{
		alert("Sorry, we haven\'t expanded to that area yet.");
		//return false;	
	}
    
	//function myFunction(){
	//window.scrollTo(0, document.body.scrollHeight);
}
	
	