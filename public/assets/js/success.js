$(document).ready(function(){

    $("#submit").on("click", function(){

        setTimeout(function(){

            $("#success").css("display", "block");

        }, 2000);


    });

    $("#success").css("display", "hide");

});