document.getElementById('submit').addEventListener("click", submitted(){
    
});

document.getElementById('reset').addEventListener("click", reset(){
    
});



function update() {
        //Create new array.
    var message = [];
    if (!getValue('userName')) {
	    message.push("First Name is required");
    }
    if (!getValue(eMail.indexOf('@') > -1)) {
	    message.push("Email is required");
    }
    if (!getValue('password')) {
	    message.push("password is required");
    }

    

    if (!getValue(''))
        //Loop through array
    var htmlString = "";
    for( var i = 0; i < message.length; i++) {
	    htmlString = htmlString + '<p>' + message[i] + '</p>';
    }
	    getElm("message").innerHTML = htmlString;

        //Create javascript object for the user
    /*var user = {
	    firstName: getValue('firstName'),
	    lastName: getValue('lastName'),
	    email: getValue('emailAddress'),
	    fullname: function(){
		    var field = this;
		    return field.firstName + " " + field.lastName;
	    }
    };
        //log the user object to the console
    console.log(user);*/

        //Check to see if everything is valid
    if (message.length <=0){
        //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
	    var submittedDate = new Date().toDateString();
        //Make the alert box.
	    window.alert("Submitted on " + submittedDate);
    }

}

var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}