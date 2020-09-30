$(".XImage").hide();
$(".OImage").hide();

let gameOver = false;
let scoreO = 0;
let scoreX = 0;
let gameCount = 0;

let turn = 1;

//Player can choose if they if they would like to be X or O
const player = function (player){

  player =  prompt("Are you x or o?");
  if (player === "o"){
  turn = 1;
  }
  else if (player === "x"){
  turn = 2;
};
};

// const gameFinish = function(){
//   if (score)
//
//
// };

//calculates the score
const scoreBoard = function(player){

    if ( player === "O" ){
      scoreO = scoreO + 1;
      $(`#O`).text(`${scoreO}`);
      $(".block").removeClass("X");
    }
      else if ( player === "X" ){
      scoreX = scoreX + 1;
      $(`#X`).text(`${scoreX}`);
      $(".block").removeClass("O");
    }
};


$(document).ready(function(){

  $('#newGame').on('click', function(){
    $(".block").css({backgroundColor: "red"});
    $(".block").removeClass("X");
    $(".block").removeClass("O");
  });

    $('#reset').on('click', function(){
    $(".block").css({backgroundColor: "red"});
    $("#X").text("0");
    $("#O").text("0");
    player();
  });

  $('#start').on('click', function(){
    $(".block").css({backgroundColor: "red"});
    $("#X").text("0");
    $("#O").text("0");
    player();
  });

//Goes between Players and adds a class when the player clicks a space
  $(".block").click(function() {
    if (turn === 1) {
      console.log("Player O");
      turn = 2;
      $(this).find(".OImage").show();
      $(this).addClass("O");
      winCheck("O", "O");

    }
    else {
      console.log("Player X");
      $(this).find(".XImage").show();
      $(this).addClass("X");
      // $("#X").show();
      turn = 1;
      winCheck("X", "X");
      }

});


//conditions to check if any player has won
const winCheck = function(symbol, player) {

      if  ($("#0").hasClass(symbol) &&
          $("#1").hasClass(symbol) &&
          $("#2").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "#daffe7"});
            $("#1").css({backgroundColor: "#daffe7"});
            $("#2").css({backgroundColor: "#daffe7"});
            scoreBoard(player);
            return true;
        }
        else if ($("#3").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#5").hasClass(symbol))
        {
            $("#3").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#5").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;

          } else if ($("#6").hasClass(symbol)
                && $("#7").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#6").css({backgroundColor: "green"});
            $("#7").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;

        } else if ($("#0").hasClass(symbol)
                && $("#3").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "green"});
            $("#3").css({backgroundColor: "green"});
            $("#6").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;

        } else if ($("#1").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#7").hasClass(symbol))
        {
            $("#1").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#7").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#5").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#2").css({backgroundColor: "green"});
            $("#5").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;
        }
        else if ($("#0").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#2").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#6").css({backgroundColor: "green"});
            scoreBoard(player);
            return true;
        } else {
            return false;
        }
    }
});
