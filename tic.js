  // "use strict";
var p1 = '';
var p2 = '';


  var moveCount = 0;

  var turn = "X";

  var square1;
  var square2;
  var square3;
  var square4;
  var square5;
  var square6;
  var square7;
  var square8;
  var square9;

$( document ).ready(function() {
  document.getElementById("btn").addEventListener("click", function(){ reset()});
  //alert('uugu');
  startGame();
});
      $.ajax({
          url: "https://4geeksacademy.github.io/code-projects/javascript-begginer/games/tictactoe/data.json",
              type: "GET",
          dataType: "JSON",
          success: function(data) {

            p1 = data.players[1].name ;
             p2 = data.players[0].name ;
          },

          error: function(xhr, ajaxOptions, thrownError) {
              alert('error');
          }
});
  function startGame() {

      for (i = 1; i < 10; i++) {

          document.getElementById("square" + i).textContent = "     ";
      }

      getCurrentSquareVals();
      turn = "X";
      moveCount = 0;
  }

  function check() {

      getCurrentSquareVals();

      if ((square1 == " X " && square2 == " X " && square3 == " X ") ||
          (square4 == " X " && square5 == " X " && square6 == " X ") ||
          (square7 == " X " && square8 == " X " && square9 == " X ") ||
          (square1 == " X " && square5 == " X " && square9 == " X ") ||
          (square1 == " X " && square4 == " X " && square7 == " X ") ||
          (square2 == " X " && square5 == " X " && square8 == " X ") ||
          (square3 == " X " && square6 == " X " && square9 == " X ") ||
          (square1 == " X " && square5 == " X " && square9 == " X ") ||
          (square3 == " X " && square5 == " X " && square7 == " X ")) {

          alert(" X  Wins!");

          reset();

          return true;

      }
      else {


          check2();
      }

      return false;

  }

  function check2() {

      if (!drawCheck()) {

          getCurrentSquareVals();

          if ((square1 == " O " && square2 == " O " && square3 == " O ") ||
              (square4 == " O " && square5 == " O " && square6 == " O ") ||
              (square7 == " O " && square8 == " O " && square9 == " O ") ||
              (square1 == " O " && square5 == " O " && square9 == " O ") ||
              (square1 == " O " && square4 == " O " && square7 == " O ") ||
              (square2 == " O " && square5 == " O " && square8 == " O ") ||
              (square3 == " O " && square6 == " O " && square9 == " O ") ||
              (square1 == " O " && square5 == " O " && square9 == " O ") ||
              (square3 == " O " && square5 == " O " && square7 == " O ")) {

              alert(" O  Wins!");

              reset();
          }
      }
  }

  function getCurrentSquareVals() {

      for (i = 1; i < 10; i++) {

          window["square" + i] = document.getElementById("square" + i).textContent;
      }
  }

  function drawCheck() {

      if (moveCount == 9) {

          alert("Draw");
          reset();
          return true;
      }

      return false;
  }

  function setMessage(message) {
      document.getElementById("message").innerText = message;
  }


  function onClickAction(square) {

      if (square.textContent != "     ") {
          return;
      }

      if (turn == "X") {

          square.textContent = " X ";
          moveCount++;
          turn = "O";
          setMessage("It's " + p1 + "s turn.");

      }
      else if (turn == "O") {

          square.textContent = " O ";
          moveCount++;
          turn = "X";
          setMessage("It's " + p2 + "s turn.");
      }
      setTimeout(function() {

          var gameOver = check();

          if (gameOver == false) {


              drawCheck();
          }
      }, 50);

}
    function reset() {
    
        for (i = 1; i < 10; i++) {
            document.getElementById("square" + i).textContent = "     ";
         
 document.getElementById("btn").addEventListener("click", function(){ reset()});
        }

        getCurrentSquareVals();
        turn = "0";
        moveCount = 0;
    }

   