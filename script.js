"use strict";

// Test Leerstellen raus nehmen
let str = "   Hallo ToDoApp!   ";
str.trim();
alert(str);

// Teilaufgabe "Hallo" in die Konsole ausgeben
console.log("Hallo ToDoApp!");

const btn = document.querySelector("#btn");
// Bei click auf Button, Funktion ausführen
btn.addEventListener("click", meine_funktion);

function meine_funktion() {
  const neuesToDo = document.querySelector("#textbox");
  const toDoValue = neuesToDo.value.trim().toLowerCase();

  const newLi = document.createElement("li");
  newLi.innerText = toDoValue;
  console.log(toDoValue);

  neuesToDo.value = "";

  const list = document.querySelector("#list");
  list.appendChild(newLi);
}
