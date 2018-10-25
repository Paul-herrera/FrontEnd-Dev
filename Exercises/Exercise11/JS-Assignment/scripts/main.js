var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1 - First Name and Last name
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

	///p1 bullet1
document.getElementById("p1_fullName").innerHTML= firstName + " " + lastName;

	///p1 bullet 2
	
var p1_valid = firstName.length >0 && lastName.length >0;
	
document.getElementById("p1_valid").innerHTML= p1_valid;
	
	///p1 bullet3
var p1_fullNameLength = firstName.length + lastName.length;

document.getElementById("p1_fullNameLength").innerHTML= p1_fullNameLength;
	
    // Part 2 - Email Address
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
	
	//p2 bullet1
document.getElementById("p2_email").innerHTML= emailAddress;
	
	//p2 bullet 2
var p2_valid = (emailAddress.indexOf('@') > -1);
	
document.getElementById("p2_valid").innerHTML= p2_valid;
	
	//p2 bullet 3
var p2_emailLength = emailAddress.length;

document.getElementById("p2_emailLength").innerHTML= p2_emailLength;

    // Part 3 - Numbers
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
	
	// p3 bullet 1
document.getElementById("p3_number").innerHTML= randomNumber;
	
	// p3 bullet 2
if (isNaN(randomNumber)) {
	document.getElementById("p3_valid").innerHTML= "False";
}else if(randomNumber.length >-1){
	document.getElementById("p3_valid").innerHTML= "False";
}else{
	document.getElementById("p3_valid").innerHTML= "True";
}

    // Part 4 - Arrays
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

	// p4 bullet 1
	if (arrayItems.length >-1){
		var arrayField = document.getElementById("arrayValue");
    arrayField.classList.add("invalid");
	} else{
		//I dont know why this doesnt work???
	arrayItems.push(arrayInput);
	console.log(arrayItems);
	}
	
	// p4 bullet 2
var p4_arraylength = arrayItems.length;
	document.getElementById("p4_arraylength").innerHTML= p4_arraylength;

	//p4 bullet 3
document.getElementById("p4_valid").innerHTML= arrayItems;

	// Additional Challenge
if (firstName.length <=0){
    var fNameField = document.getElementById("firstName");
    fNameField.classList.add("invalid");
}

if (lastName.length <=0){
    var lNameField = document.getElementById("lastName");
    lNameField.classList.add("invalid");
}
	
if (!p2_valid){
    var emAddressField = document.getElementById("emailAddress");
    emAddressField.classList.add("invalid");
}

if (isNaN(randomNumber)){
    var numberField = document.getElementById("randomNumber");
    numberField.classList.add("invalid");
} else if (randomNumber.length >-1){
	var number_Field = document.getElementById("randomNumber");
    number_Field.classList.add("invalid");
}
	
	// Additional Challenge Bullet 2
	
	//I dont know why this doesnt work???
function myFunction() {
    debugger;
    var element = document.getElementById("myDIV");
    element.classList.remove("mystyle");
}
	
    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

