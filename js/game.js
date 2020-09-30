$(".XImage").hide();
$(".OImage").hide();

let gameOver = false;
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
  $(`.playerX`).css("backgroundColor", "#daffe7"); $(`.playerX`).css({boxShadow: "10px, 10px, 10px, black"});
  $(`.playerO`).css({backgroundColor: "#abc5fe"});
  }
  else if (player === "x"){
  turn = 2;
  $(`.playerO`).css({backgroundColor: "#daffe7"});
  $(`.playerX`).css({boxShadow: "10px, 10px, 10px, black"});
  $(`.playerX`).css({backgroundColor: "#abc5fe"});

};
};

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
    $(`.playerO`).css({backgroundColor: "#daffe7"});
    $(`.playerX`).css({backgroundColor: "#abc5fe"});
    $(`.playerX`).css({boxShadow: "10px, 10px, 10px, black"});
    $(this).find(".OImage").show();
    $(this).addClass("O");
    gameCount = gameCount + 1;
    console.log(gameCount);
    winCheck("O", "O", gameCount);

  }
  else if (turn === 2){
    console.log("Player X");
    turn = 1;
    $(`.playerX`).css({backgroundColor: "#daffe7"});
    $(`.playerO`).css({backgroundColor: "#abc5fe"});
    $(`.playerX`).css({boxShadow: "10px, 10px, 10px, black"});
    $(this).find(".XImage").show();
    $(this).addClass("X");
    gameCount = gameCount + 1;
    console.log(gameCount);
    winCheck("X", "X", gameCount);
    }
});


$("block").on(`click`);

  $('#newGame').on('click', function(){
    $(".block").css({background: "#FFD1DC"});
    winner = null;
    $(".block").removeClass("X");
    $(".block").removeClass("O");
    $(".XImage").hide();
    $(".OImage").hide();
    gameOver = 0;
  });

  $('#start').on('click', function(){
    $(".block").css({background: "#FFD1DC"});
    winner = null;
    $(".block").removeClass("X");
    $(".block").removeClass("O");
    $("#X").text("0");
    $("#O").text("0");
    $(".XImage").hide();
    $(".OImage").hide();
    gameOver = 0;
    player();
  });


// const off = $(".block").click(function() {
//       $("")
// });

//conditions to check if any player has won
const winCheck = function(symbol, player, gameCount) {

      if  ($("#0").hasClass(symbol) &&
          $("#1").hasClass(symbol) &&
          $("#2").hasClass(symbol))
        {
            $("#0").css({background: "#daffe7"});
            $("#1").css({background: "#daffe7"});
            $("#2").css({background: "#daffe7"});
            $("#0").css({border: "3px, solid blue"});
            $("#1").css({border: "3px, solid blue"});
            $("#2").css({border: "3px, solidblue"});
            winner = "symbol";
            console.log(symbol);
            scoreBoard(player);
            return true;
        }
        else if ($("#3").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#5").hasClass(symbol))
        {
            $("#3").css({background: "#daffe7"});
            $("#4").css({background: "#daffe7"});
            $("#5").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;

          } else if ($("#6").hasClass(symbol)
                && $("#7").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#6").css({background: "#daffe7"});
            $("#7").css({background: "#daffe7"});
            $("#8").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;

        } else if ($("#0").hasClass(symbol)
                && $("#3").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#0").css({background: "#daffe7"});
            $("#3").css({background: "#daffe7"});
            $("#6").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;

        } else if ($("#1").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#7").hasClass(symbol))
        {
            $("#1").css({background: "#daffe7"});
            $("#4").css({background: "#daffe7"});
            $("#7").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#5").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#2").css({background: "#daffe7"});
            $("#5").css({background: "#daffe7"});
            $("#8").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#0").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#0").css({background: "#daffe7"});
            $("#4").css({background: "#daffe7"});
            $("#8").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#2").css({background: "#daffe7"});
            $("#4").css({background: "#daffe7"});
            $("#6").css({background: "#daffe7"});
            winner = "symbol";
            scoreBoard(player);
            return true;
        }
        else if (gameCount === 9){
              console.log("Look a draw");
              gameCount = 0;
        } else {
            return false;
        }
    }
});
