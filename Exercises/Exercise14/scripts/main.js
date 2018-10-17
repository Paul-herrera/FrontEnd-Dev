function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

getElm('submit').addEventListener("click", function(){
    var message = [];

    if (!getValue('userName')) {
        message.push("First Name is required");
        getElm('userName').classList.add("invalid");
    } else {
        getElm('userName').classList.remove("invalid");
    }

    if (!getValue('eMail')) {
        message.push("Email Address is required");
        getElm('eMail').classList.add("invalid");
    } else {
        getElm('eMail').classList.remove("invalid");
    }

    if (getValue('eMail').indexOf('@') == -1) {
        message.push("Enter a valid Email");
        getElm('eMail').classList.add("invalid");
    } else {
        getElm('eMail').classList.remove("invalid");
    }

    if (!getValue('password')) {
        message.push("Password is required");
        getElm('password').classList.add("invalid");
    } else {
        getElm('password').classList.remove("invalid");
    }

    if (!getValue('timeZone') > 0) {
        message.push('Timezone is required');
        getElm('timeZone').classList.add("invalid");
    } else {
        getElm('timeZone').classList.remove("invalid");
    }

    if (!getElm('terms').checked ) {
        message.push('You must accept the terms and conditions');
    } 
    
    var htmlString = "";

    for( var i = 0; i < message.length; i++) {
	    htmlString = htmlString + '<li>' + message[i] + '</li>';
    }

    if (!message.length > 0) {
        htmlString = '<h1>Thank you for registering</h1>';
    }

    getElm("message").innerHTML = htmlString;
        
});

getElm('reset').addEventListener("click", function(){
    
    getElm('userName').value = '';

    getElm('userName').classList.remove("invalid");

    getElm('eMail').value = '';

    getElm('eMail').classList.remove("invalid");

    getElm('eMail').value = '';

    getElm('eMail').classList.remove("invalid");

    getElm('password').value = '';

    getElm('password').classList.remove("invalid");

    getElm('timeZone').selectedIndex =0;

    getElm('timeZone').classList.remove("invalid");

    getElm('message').innerHTML = '';

});
