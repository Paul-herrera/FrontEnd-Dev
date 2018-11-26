$(document).ready(function () {
    $('#btnSubmit').on('click', submitForm);


    function submitForm() {

            $('form').fadeOut('slow', function () {
                $("#thankyou").fadeIn('slow');
            });

    }



});