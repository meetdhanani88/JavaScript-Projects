var counter = 0;

//function call when any box clicked
function myfun1(ele) {
  var clickedbtn = ele.id;

  if (counter % 2 == 0) {
    if (document.getElementById(clickedbtn).value == "") {
      document.getElementById(clickedbtn).value = "0";
    }
  } else if (counter % 2 == 1) {
    if (document.getElementById(clickedbtn).value == "") {
      document.getElementById(clickedbtn).value = "X";
    }
  }
  counter++;
}

//function call when any box clicked
function checkwinner() {
  const box = [
    document.getElementById("b1").value,
    document.getElementById("b2").value,
    document.getElementById("b3").value,
    document.getElementById("b4").value,
    document.getElementById("b5").value,
    document.getElementById("b6").value,
    document.getElementById("b7").value,
    document.getElementById("b8").value,
    document.getElementById("b9").value,
  ];

  let val = "0";

  //Loop check same condition 1st time for player 0 & 2nd time for player Player-X
  for (i = 0; i < 2; i++) {
    //horizontal check
    if (
      //horizontal check
      (box[0] == val && box[1] == val && box[2] == val) ||
      (box[3] == val && box[4] == val && box[5] == val) ||
      (box[6] == val && box[7] == val && box[8] == val) ||
      //vertical check
      (box[0] == val && box[3] == val && box[6] == val) ||
      (box[1] == val && box[4] == val && box[7] == val) ||
      (box[2] == val && box[5] == val && box[8] == val) ||
      //cross check
      (box[0] == val && box[4] == val && box[8] == val) ||
      (box[2] == val && box[4] == val && box[6] == val)
    ) {
      for (j = 0; j < 9; j++) {
        document.getElementsByTagName("input")[j].disabled = true;
        document.getElementsByTagName("input")[j].style.backgroundColor="#eee";
        document.getElementsByTagName("input")[j].style.color="#000";
      }
      document.getElementById("winner").innerHTML =
        "player" + " " + val + " " + "win" + "</br>";
      gameendreset();
      var flag = 1;
    }
    val = "X";
  }
  if (box.filter(Boolean).length == 9 && flag != 1) {
    document.getElementById("winner").innerHTML = "Game Over";
    gameendreset();
  }
}
//when reset button press

function reset() {
  for (i = 0; i < 9; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
  document.getElementById("winner").innerHTML = "";

  for (j = 0; j < 9; j++) {
    document.getElementsByTagName("input")[j].disabled = false;
  }

  counter = 0;
}

//do this when game-end or any player win

function gameendreset() {
  setTimeout(function () {
    document.getElementById("instruction").innerHTML = "Auto Reset in 3 second";
    document.getElementById("instruction").style.fontSize = "2rem";
  }, 0000);
  setTimeout(function () {
    document.getElementById("instruction").innerHTML = "Auto Reset in 2 second";
  }, 1000);
  setTimeout(function () {
    document.getElementById("instruction").innerHTML = "Auto Reset in 1 second";
  }, 2000);
  setTimeout(function () {
    document.getElementById("instruction").innerHTML = "Auto Reset in 0 second";
  }, 3000);
  setTimeout(function () {
    document.getElementById("instruction").innerHTML =
      " <p>> Click on any box to start</p> <p>> First player start as player-0</p><p>> Second player start as player-X</p>";
    reset();
  }, 3100);
}
