

///make an array for positions
//make arrays for the player positions
let gameO = [];
let gameX = [];

const win1 = ["left top", "middle top", "right top"];
const win2 = ["left middle", "middle", "right middle"];
const win3 = ["left bottom", "middle bottom", "right bottom"];
const win4 = ["left top", "left middle", "left bottom"];
const win5 = ["middle top", "middle", "middle bottom"];
const win6 = ["right top", "right middle", "right bottom"];
const win7 = ["left top", "middle", "right bottom"];
const win8 = ["right top", "middle", "left bottom"];

// console.log(wins.win1);

const gamePositions = ["", "", "", "", "", "","", "", ""];

const htmlPos = function (){


}



console.log(gamePositions);

const player = function (player){

  player =  prompt("Are you x or o?");
  if (player === "o"){
  playerOturn();
  }
  else if (player === "x"){
  playerXturn();
  }
};

const playerOturn = function(){

    if (gameO.length >= 3){
      gameO = gameO.push()
    }


};

const playerXturn = function(){




};



  let winO = false;
  let winX = false;

const com = function () {
        if (gameO.length >= 3){

          if (gameO.includes(win1[0])){

              if (gameO.includes(win1[1])){

                if (gameO.includes(win1[2])){
                  console.log("I'm pretty sure this is a win1" + "2");
                  winO = true;
                }
              }
              if (gameO.includes(win4[1])){

                if (gameO.includes(win4[2])){
                  console.log("I'm pretty sure this is a win4" + "2");
                  winO = true;
                }
              }
              if (gameO.includes(win7[1])){

                if (gameO.includes(win7[2])){
                  console.log("I'm pretty sure this is a win7" + "2");
                  winO = true;
                }
              }
              }

              else if (gameO.includes(win2[1])){

                  if (gameO.includes(win2[0])){

                    if (gameO.includes(win2[2])){
                      console.log("I'm pretty sure this is a win2" + "2");
                      winO = true;
                    }
                  }
                  if (gameO.includes(win5[0])){

                    if (gameO.includes(win5[2])){
                      console.log("I'm pretty sure this is a win5" + "2");
                      winO = true;
                    }
                  }
                  if (gameO.includes(win8[0])){

                    if (gameO.includes(win8[2])){
                      console.log("I'm pretty sure this is a win8" + "2");
                      winO = true;
                    }
                  }
                  }

                  else if (gameO.includes(win3[2])){

                      if (gameO.includes(win3[0])){

                        if (gameO.includes(win3[1])){
                          console.log("I'm pretty sure this is a win3" + "2");
                          winO = true;
                        }
                      }
                      if (gameO.includes(win6[0])){

                        if (gameO.includes(win6[1])){
                          console.log("I'm pretty sure this is a win6" + "2");
                          winO = true;
                        }
                      }
                      else {
                        console.log(promptingX());//going to be X insteady of O
                        console.log("I'm here now O - else in if")
                      };
                      }
}
          else if ( winX === false ) {
            console.log(promptingX());//going to be X insteady of O
            console.log("I'm here now O else")
          };

};


const plX = function(){
          console.log(gameX.length);
          if (gameX.length >= 3){

            if (gameX.includes(win1[0])){

                if (gameX.includes(win1[1])){

                  if (gameX.includes(win1[2])){
                    console.log("I'm pretty sure this is a win1" + "2");
                    winX = true;
                  }
                }
                if (gameX.includes(win4[1])){

                  if (gameX.includes(win4[2])){
                    console.log("I'm pretty sure this is a win4" + "2");
                    winX = true;
                  }
                }
                if (gameX.includes(win7[1])){

                  if (gameX.includes(win7[2])){
                    console.log("I'm pretty sure this is a win7" + "2");
                    winX = true;
                  }
                }
                // return winO;
                }

                else if (gameX.includes(win2[1])){

                    if (gameX.includes(win2[0])){

                      if (gameX.includes(win2[2])){
                        console.log("I'm pretty sure this is a win2" + "2");
                        winX = true;
                      }
                    }
                    if (gameX.includes(win5[0])){

                      if (gameX.includes(win5[2])){
                        console.log("I'm pretty sure this is a win5" + "2");
                        winX = true;
                      }
                    }
                    if (gameX.includes(win8[0])){

                      if (gameX.includes(win8[2])){
                        console.log("I'm pretty sure this is a win8" + "2");
                        winX = true;
                      }
                    }
                    }

                    else if (gameX.includes(win3[2])){

                        if (gameX.includes(win3[0])){

                          if (gameX.includes(win3[1])){
                            console.log("I'm pretty sure this is a win3" + "2");
                            winX = true;
                          }
                        }
                        if (gameX.includes(win6[0])){

                          if (gameX.includes(win6[1])){
                            console.log("I'm pretty sure this is a win6" + "2");
                            winX = true;
                          }
                        }
                        else {
                          console.log(promptingX());//going to be X insteady of O
                          console.log("I'm here now X - else in if")
                        };
                        }

            else if ( winO === false ) {
              console.log(promptingO());//going to be X insteady of O
              console.log("I'm here now X else")
            };
}
};


$(document).ready(function(){

  $(`#start`).on(`click`, function(){
    player();

  });





});
