function update() {
    /* ===================
        Your code starts here
    =====================*/
	
    //Create new array.
var message = [];
    //If first name is empty. Add it to the array
	
if (!getValue('firstName')) {
	message.push("First Name is required");
}
	
    //If last name is empty. Add it to the array
if (!getValue('lastName')) {
	message.push("Last Name is required");
}

    //Email is empty. Add it to the array
if (!getValue('emailAddress')) {
	message.push("Email is required");
}

    //Loop through array
var htmlString = "";
for( var i = 0; i < message.length; i++) {
	htmlString = htmlString + '<p>' + message[i] + '</p>';
}
	getElm("error-list").innerHTML = htmlString;

    //Create javascript object for the user
var user = {
	firstName: getElm('firstName'),
	lastName: getElm('lastName'),
	email: getElm('emailAddress'),
	fullname: function(){
		var field = this;
		return field.firstName + " " + field.lastName;
	}
};
	
    //log the user object to the console
console.log(user); //cant get this to work properly!?!?

    //Check to see if everything is valid
if (message.length <=0){
	
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
	var submittedDate = new Date().toDateString();
	
    //Make the alert box.
	window.alert("Submitted on " + submittedDate);
}
    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}