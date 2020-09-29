
let gameOver = false;
let gameCount = 0;

let turn = 1;

const player = function (player){

  player =  prompt("Are you x or o?");
  if (player === "o"){
  turn = 1;
  }
  else if (player === "x"){
  turn = 2;
};
};

$(document).ready(function(){

  $('#start').on('click', function(){
    player();
  });


  $(".block").click(function() {
    if (turn === 1) {
      console.log("Player O");
      turn = 2;
      $(this).addClass("O");
      winCheck("O", "O");
    }
    else {
      console.log("Player X");
      $(this).addClass("X");
      turn = 1;
      winCheck("X", "X");
      }

});

const winCheck = function(symbol, win) {

      if  ($("#0").hasClass(symbol) &&
          $("#1").hasClass(symbol) &&
          $("#2").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "green"});
            $("#1").css({backgroundColor: "green"});
            $("#2").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;
        }
        else if ($("#3").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#5").hasClass(symbol))
        {
            $("#3").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#5").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;

          } else if ($("#6").hasClass(symbol)
                && $("#7").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#6").css({backgroundColor: "green"});
            $("#7").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;

        } else if ($("#0").hasClass(symbol)
                && $("#3").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "green"});
            $("#3").css({backgroundColor: "green"});
            $("#6").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;

        } else if ($("#1").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#7").hasClass(symbol))
        {
            $("#1").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#7").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#5").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#2").css({backgroundColor: "green"});
            $("#5").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;
        }
        else if ($("#0").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#8").hasClass(symbol))
        {
            $("#0").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#8").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;
        }
        else if ($("#2").hasClass(symbol)
                && $("#4").hasClass(symbol)
                && $("#6").hasClass(symbol))
        {
            $("#2").css({backgroundColor: "green"});
            $("#4").css({backgroundColor: "green"});
            $("#6").css({backgroundColor: "green"});
            gameCount = gameCount + 1;
            return true;
        } else {
            return false;
        }
    }
});
