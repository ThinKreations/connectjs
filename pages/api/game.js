let socket = io();
let symbol;
$(function () {

  //Termina el juego napoles, yo quiero mimir UnU; O te hago una bromita jsjsjsj
  $(".board button").attr("disabled", true);
  $(".board> button").on("click", makeMove);
  // Evento es llamado cuando un jugador hace un movimiento
  socket.on("move.made", function (data) {
    // Renderisar el mov
    $("#" + data.position).text(data.symbol);
    // Si el simbolo es igual al del jugador,
    // se asume que es el turno del oponente

    myTurn = data.symbol !== symbol;

    // Si el juego sigue, mostraremos de quien es el turno
      if (!isGameOver()) {
      if (gameTied()) {
        $("#messages").text("Los 2 perdieron jajaja");
        $(".board button").attr("disabled", true);
      } else {
        renderTurnMessage();
      }
      // si el juego termino
    } else {
      // Mostramos el mensaje de que ella jugo contigo OwO
      if (myTurn) {
        $("#messages").text("Perdiste el de ella, y también el juego UnU.");
        // Mostramos el mensaje de quien te la bajo
      } else {
        $("#messages").text("Ganaste, pero a que costo? U.U");
      }
      // Desactivamos el tablero, o lo que sea con lo que estemos jugando
      $(".board button").attr("disabled", true);
    }
  });

  // Establecemos quien es el turno inicial
  socket.on("game.begin", function (data) {
    // El server asigna X or O al jugo
    symbol = data.symbol;
    // daremos x al 1er jugo
    myTurn = symbol === "X";
    renderTurnMessage();
  });

  // Desactivamos el tablero si dejo la página, bueno, la cerro
  socket.on("opponent.left", function () {
    $("#messages").text("Tu oponente te tuvo miedo.");
    $(".board button").attr("disabled", true);
  });
});

function getBoardState() {
  let obj = {};
  $(".board button").each(function () {
    obj[$(this).attr("id")] = $(this).text() || "";
  });
  return obj;
}
/*
function gameTied() {
  let state = getBoardState();

  if (
      state.btn1 !== "" &&
      state.btn2 !== "" &&
      state.btn3 !== "" &&
      state.btn4 !== "" &&
      state.btn5 !== "" &&
      state.btn6 !== "" &&
      state.btn7 !== "" &&
      state.btn8 !== "" &&
      state.btn9 !== ""
  ) {
    return true;
  }
}
*/
/*
function isGameOver() {
  let state = getBoardState(),
      //ESTO ES PARA LA WIN
    matches = ["XXX", "OOO"],
    // Todas las posibles combinaciones
    // Para ganar el jueguito UvU
    rows = [
      state.btn1 + state.btn2 + state.btn3,
      state.btn4 + state.btn5 + state.btn6,
      state.btn7 + state.btn8 + state.btn9,
      state.btn1 + state.btn5 + state.btn9,
      state.btn3 + state.btn5 + state.btn7,
      state.btn1 + state.btn4 + state.btn7,
      state.btn2 + state.btn5 + state.btn8,
      state.btn3 + state.btn6 + state.btn9,
    ];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === matches[0] || rows[i] === matches[1]) {
      return true;
    }
  }
}
*/

function renderTurnMessage() {
  //Desactivaremos el tablero cuando el oponente toque jugar con tu corazón
  if (!myTurn) {
    $("#messages").text("Espera a tu turno.");
    $(".board button").attr("disabled", true);
    // Activaremos cuando sea su turno de jugar con el corazón del jugo 2
  } else {
    $("#messages").text("Es momento de destuir a tu oponente.");
    $(".board button").removeAttr("disabled");
  }
}

function makeMove(e) {
  e.preventDefault();
  // No es tu turno
  if (!myTurn) {
    return;
  }
  // Los espacios son revisados
  if ($(this).text().length) {
    return;
  }

  // Le decimos al server sobre los mov
  socket.emit("make.move", {
    symbol: symbol,
    position: $(this).attr("id"),
  });
}
