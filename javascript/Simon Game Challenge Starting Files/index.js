var button_colors = ["red","blue","green","yellow"];
var gamePattern = [];
var user_clicked_pattern = [];
var level = 0;
var started = false;

function addSound(input){
    switch(input){
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;
        default:
            console.log("error");
    }
}


function animate_pressed(color){
    var selected_color = "#"+color;
    $(selected_color).addClass("pressed");
    setTimeout(function () {
        $(selected_color).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===user_clicked_pattern[currentLevel]){
        if(gamePattern.length===user_clicked_pattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    } else{
        addSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}

function nextSequence(){
    user_clicked_pattern = [];
    $("#level-title").text("Level " + ++level);
    var randomNumber = Math.floor(Math.random()*4);
    var color_chosen = button_colors[randomNumber];
    gamePattern.push(color_chosen);
    var color = "#"+color_chosen;
    $(color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    addSound(color_chosen);
}

$('div[type="button"]').on("click",function(e){
   var user_chosen_color = e.target.id;
   user_clicked_pattern.push(user_chosen_color);
   addSound(user_chosen_color);
   animate_pressed(user_chosen_color);
   checkAnswer(user_clicked_pattern.length-1);
});

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }