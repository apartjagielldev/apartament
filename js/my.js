
$(document).ready(function(){

    for(var i = 1; i <= 9; i++){
        $("#gallery" + i ).append("<img src='img/" + i + "-min.jpg' class='img-responsive' alt='img'>");
    }
});