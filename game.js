

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColour;
var userClickedPattern = [];
var keypressedornot = false;
var level = 0;

//____________________________________________________________START GAME

$("body").keydown(function() {
  if(!keypressedornot) {
    keypressedornot = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
})

//____________________________________________________________USER CLICKING BUTTON
  $(".btn").on("click", function() {
    userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1);
  });

//____________________________________________________________PLAY A SOUND
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//_____________________________________________________________PRESSED BUTTON COLOR
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//_____________________________________________________________ADD RANDOM BUTTON TO SEQUENCE
function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  var randonNumber = Math.round(Math.random() * 3);
  var randChosenColour = buttonColours[randonNumber];
  gamePattern.push(randChosenColour);

  $("#" + randChosenColour).fadeOut(50).fadeIn(100).fadeOut(100).fadeIn(50);

playSound(randChosenColour);
}

//________________________________________________________________REVIEW USER INPUT
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success"); //Keep going, you are righhhtthttht

    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {
    startOver();
    console.log("wrong"); //You are WRONGGGG
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over. Press any key to restart.");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
  }
}

//______________________________________________________________________ RESTART FUNCTION
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = []; 
  keypressedornot = false;
}































//lala
