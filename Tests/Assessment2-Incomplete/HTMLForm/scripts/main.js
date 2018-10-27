$(document).ready(function(){

    $('#btnSubmit').on('click', submit);

    function submit(){
        var message = [];

        if (!$('#userName').val()) {
            message.push("First Name is required");
            $('#userName').addClass("invalid");
        } else {
            $('#userName').removeClass("invalid");
        }

        if (!$('#eMail').val()) {
            message.push("Email Address is required");
            $('#eMail').addClass("invalid");
        } else {
            $('#eMail').removeClass("invalid");
        }

        if ($('#eMail').val().indexOf('@') == -1) {
            message.push("Enter a valid Email");
            $('#eMail').addClass("invalid");
        } else {
            $('#eMail').removeClass("invalid");
        }

        if (!$('#how').val() > 0) {
            message.push("Informant disclosure is required");
            $('#how').addClass("invalid");
        } else {
            $('#how').removeClass("invalid");
        }

        var htmlString = "";

        for( var i = 0; i < message.length; i++) {
	        htmlString = htmlString + '<li>' + message[i] + '</li>';
        }

        if (!message.length > 0) {
            htmlString = '<h1>Thank you for registering</h1>';

            var user = {
                firstName: $('#userName').val(),
                eMail: $('#eMail').val(),
                infoSource: $('#how').val(), 
            }
    
            var json = JSON.stringify(user);
    
            console.log(json);
    
            $.post('/AddEntry', json, function() {
                console.log("Success");
            });
            
        }

        $("#message").html(htmlString);

    }

});