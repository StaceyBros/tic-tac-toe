$(".XImage").hide();
$(".OImage").hide();

$("#draw").hide();
$("#x-win").hide();
$("#o-win").hide();

let scoreO = 0;
let scoreX = 0;
let gameCount = 0;
let winner = null;

let turn = 1;

//Player can choose if they if they would like to be X or O
const player = function (player){

  player =  prompt("Are you x or o?");
  if (player === "o"){
  turn = 1;
  $(`.playerO`).addClass("new-playerO");
  $(`.playerX`).removeClass("new-playerX");
  }
  else if (player === "x"){
  turn = 2;
  $(`.playerO`).removeClass("new-playerO");
  $(`.playerX`).addClass("new-playerX");

};
};

const scoreBoard = function(player){

    if ( player === "O" ){
      $("#o-win").fadeIn(1000)
      scoreO = scoreO + 1;
      $(`#O`).text(`${scoreO}`);
      $(".block").removeClass("X");
    }
      else if ( player === "X" ){
      $("#x-win").fadeIn(1000)
      scoreX = scoreX + 1;
      $(`#X`).text(`${scoreX}`);
      $(".block").removeClass("O");
    }
};


$(document).ready(function(){

//Goes between Players and adds a class when the player clicks a space
//counts the turns so we know if there is a draw
//shows the X and O images

$(".block").on(`click`, function() {

    if($(this).hasClass("O") ||
          $(this).hasClass("X") || winner === "symbol")
  {
    console.log("Nothing happens here");
  }
  else if (turn === 1){
    console.log("Player O");
    turn = 2;
    $(`.playerO`).removeClass("new-playerO");
    $(`.playerX`).addClass("new-playerX");
    $(".playerO").fadeTo( "slow", 0.50 );
    $(".playerX").fadeTo( "slow", 1 );
    $(this).find(".OImage").show();
    $(this).addClass("O");
    gameCount = gameCount + 1;
    console.log(gameCount);
    winCheck("O", "O", gameCount);

  }
  else if (turn === 2){
    console.log("Player X");
    turn = 1;
    $(`.playerO`).addClass("new-playerO");
    $(`.playerX`).removeClass("new-playerX");
    $(".playerX").fadeTo( "slow", 0.50 );
    $(".playerO").fadeTo( "slow", 1 );
    $(this).find(".XImage").show();
    $(this).addClass("X");
    gameCount = gameCount + 1;
    console.log(gameCount);
    winCheck("X", "X", gameCount);
    }
});


$("block").on(`click`);

  $('#new-game').on('click', function(){
    winner = null;
    $("#x-win").fadeOut(0);
    $("#o-win").fadeOut(0);
    $("#draw").fadeOut(0);
    $(".block").removeClass("new-block");
    $(".block").removeClass("X");
    $(".block").removeClass("O");
    $(".XImage").hide();
    $(".OImage").hide();
    gameCount = 0;
  });

  $('#start').on('click', function(){
    winner = null;
    $(".block").removeClass("X");
    $(".block").removeClass("O");
    $("#x-win").fadeOut(0);
    $("#o-win").fadeOut(0);
    $("#draw").fadeOut(0);
    $(".block").removeClass("new-block");
    $("#X").text("0");
    $("#O").text("0");
    $(".XImage").hide();
    $(".OImage").hide();
    gameCount = 0;
    scoreO = 0;
    scoreX = 0;
    player();
  });

//conditions to check if any player has won
const winCheck = function(symbol, player, gameCount) {

      if  ($("#0").hasClass(symbol) &&
          $("#1").hasClass(symbol) &&
          $("#2").hasClass(symbol))
        {
            $("#0").addClass("new-block");
            $("#1").addClass("new-block");
            $("#2").addClass("new-block");
            winner = "symbol";
            console.log(symbol);
            scoreBoard(player);
            return true;
        }
        else if ($("#3").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#5").hasClass(symbol))
        {
            $("#3").addClass("new-block");
            $("#4").addClass("new-block");
            $("#5").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;

          } else if ($("#6").hasClass(symbol)
                && $("#7").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#6").addClass("new-block");
            $("#7").addClass("new-block");
            $("#8").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;

        } else if ($("#0").hasClass(symbol)
                && $("#3").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#0").addClass("new-block");
            $("#3").addClass("new-block");
            $("#6").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;

        } else if ($("#1").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#7").hasClass(symbol))
        {
            $("#1").addClass("new-block");
            $("#4").addClass("new-block");
            $("#7").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#5").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#2").addClass("new-block");
            $("#5").addClass("new-block");
            $("#8").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#0").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#0").addClass("new-block");
            $("#4").addClass("new-block");
            $("#8").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#2").addClass("new-block");
            $("#4").addClass("new-block");
            $("#6").addClass("new-block");
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if (gameCount === 9){
              console.log("Look a draw");
              gameCount = 0;
              $("#draw").fadeIn(1000);
              $( ".block" ).slideDown( "slow");

        } else {
            return false;
        }
    }
});
