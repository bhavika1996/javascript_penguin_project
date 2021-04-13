var score = 0;
var high = 0;
$("#Score").text("Score" + " " + score);
$(document).ready(function () {
    var elementsArray = randomArray($("#gameholder div"));
    $("#gameholder").empty();
    $("#gameholder").append(elementsArray);
    //$("#gameholder div").mousedown(function () {
    $('body').on('mousedown', '#gameholder div', function () {
        
        // For yeti image to be triggeres when clicked
        
        if ($(this).attr("id") == "yeti") {
            $(this).css("background-image", $(this).css("background-image"));

            // for music

            $('#yetisound').trigger('play');
            $("#high").text("High Score" + " " + high);
            setTimeout(function () {
                alert("Yaaaaaaarrrrrrrr!" + "\nGame over!!!");
                resetgame();
            }, 500);
        } else {
            
            // For no actions while same penguin triggered.
            
            if ($(this).attr('style') == undefined && score < 16) {
                
             // For penguin image to be triggeres when clicked
                
                $(this).css("background-image", $(this).css("background-image"));
                $('#playsound').trigger('play');
                $("#high").text("High Score" + " " + high);
                score++;

                $("#Score").text("Score" + " " + score);
                if (score > high) {
                    high = score;
                    $("#high").text("High Score : " + " " + high);

                }
            } else if (score == 16) {
                $(this).css("background-image", $(this).css("background-image"));
                $('#playsound').trigger('play');
                score++;
                $("#Score").text("Score" + " " + score);
                $("#high").text("High Score" + " " + 17);
                alert("You won!!!!!!!");
                resetgame();
            }
        }
    });
});

// For random array generator
function randomArray(elementsArray) {
    for (var i = elementsArray.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        [elementsArray[i - 1], elementsArray[j]] = [elementsArray[j], elementsArray[i - 1]];
    }
    return elementsArray;
}

// reset game 
function resetgame() {
    $("#gameholder div").removeAttr("style");
    var elementsArray = randomArray($("#gameholder div"));
    $("#gameholder").empty();
    $("#gameholder").append(elementsArray);

    //score
    $("#Score").text("0");
    if (score > high) {
        high = score;
    }
    score = 0;
    //    console.log(score);
    //    console.log(high);
}
