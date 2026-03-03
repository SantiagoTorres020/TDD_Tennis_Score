import Tennis from "./tennis.js";

let tennis = new Tennis();

let resultadoDiv = document.querySelector("#resultado-div");
let p1Button = document.querySelector("#p1-button");
let p2Button = document.querySelector("#p2-button");

function actualizarMarcador(){
  resultadoDiv.innerHTML = tennis.score();
}

p1Button.addEventListener("click", () => {
  tennis.player1Scores();
  actualizarMarcador();
});

p2Button.addEventListener("click", () => {
  tennis.player2Scores();
  actualizarMarcador();
});

actualizarMarcador();