
$(document).ready(function(){

    for(var i = 1; i <= 11; i++){
        if (i === 7 || i === 8 || i === 10){
            $("#gallery" + i ).append("<img src='img/" + i + "-min.jpg' class='img-responsive' alt='obraz' style='padding-left:25%'>");
        }
        else{
            $("#gallery" + i ).append("<img src='img/" + i + "-min.jpg' class='img-responsive' alt='obraz'>");
        }
    }
});