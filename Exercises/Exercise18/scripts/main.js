$(document).ready(function() {

    //List Titles
    var appendUrl = "http://jsonplaceholder.typicode.com/posts?userId=1";

    $.ajax({
        url: appendUrl,
        method: "get",
        success: function(response) { 
            debugger;
            for(var i = 0; i < response.length; i++){
                $('#append').append("<li>Index: " + i + " Title: " + response[i].title + "</li>");
            }
        },
        failure: function() {
          console.log("failure to append");
        }
    });

    //
    var prependUrl = "http://jsonplaceholder.typicode.com/photos?albumId=1";

    $.ajax({
        url: prependUrl,
        method: "get",
        success: function(response) {
            for(var i =0; i < response.length; i++){
                $('#prepend').prepend("<li>Index: " + i + " Title: " + response[i].title + "</li>");
            }
        },
        failure: function (){
            console.log("failure to prepend");
        }
    });

});

