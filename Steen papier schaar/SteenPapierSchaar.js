const humanOutput    = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput   = document.querySelector("#result");

const scoreSpelerEl   = document.querySelector("#scoreSpeler");
const scoreGelijkEl   = document.querySelector("#scoreGelijk");
const scoreComputerEl = document.querySelector("#scoreComputer");

let scoreSpeler   = 0;
let scoreGelijk   = 0;
let scoreComputer = 0;

function getComputerKeuze() {
const keuzes = ["steen", "papier", "schaar"];
const randomNumber = Math.floor(Math.random() * 3);
return keuzes[randomNumber];
}

function bepaalWinnaar(speler, computer) {
if (speler === computer) {
    return "gelijk";
}

switch (speler) {
case "steen":
            return computer === "schaar" ? "speler" : "computer";
case "papier":
            return computer === "steen" ? "speler" : "computer";
case "schaar":
return computer === "papier" ? "speler" : "computer";
}
}

function updateScore(winnaar) {
switch (winnaar) {
case "speler":
scoreSpeler++;
scoreSpelerEl.textContent = scoreSpeler;
break;
case "computer":
scoreComputer++;
scoreComputerEl.textContent = scoreComputer;
break;
case "gelijk":
scoreGelijk++;
scoreGelijkEl.textContent = scoreGelijk;
break;
}
}

function speelRonde(spelerKeuze) {
 const computerKeuze = getComputerKeuze();
const winnaar = bepaalWinnaar(spelerKeuze, computerKeuze);

humanOutput.textContent    = spelerKeuze;
computerOutput.textContent = computerKeuze;

resultOutput.className = "";
    switch (winnaar) {
     case "speler":
     resultOutput.textContent = "Jij wint!";
    resultOutput.className   = "win";
    break;
    case "computer":
    resultOutput.textContent = "Computer wint!";
    resultOutput.className   = "loss";
    break;
case "gelijk":
    resultOutput.textContent = "Gelijkspel!";
    resultOutput.className   = "draw";
    break;
}

 updateScore(winnaar);
}

const btns = document.querySelectorAll("button");

btns.forEach(function(btn) {
btn.addEventListener("click", function(event) {
  const spelerKeuze = event.target.id;
  speelRonde(spelerKeuze);
    });
});