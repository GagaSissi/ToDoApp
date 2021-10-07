"use strict";

// Teilaufgabe "Hallo" in die Konsole ausgeben
console.log("Hallo ToDoApp!");

const btn = document.querySelector("#btn");
// Bei click auf Button, Funktion ausführen
btn.addEventListener("click", meine_funktion);

// Test, Einfügen von Daten in localstorage
localStorage.setItem("Nachname", "MeinNachname");
document.getElementById("list").innerHTML =
  window.localStorage.getItem("Nachname");

// Funktion
function meine_funktion() {
  const neuesToDo = document.querySelector("#textbox");
  //Leerstellen raus nehmen, in kleinbuchstaben umwandeln
  const toDoValue = neuesToDo.value.trim().toLowerCase();
  // Neues Listenelement erzeugen
  const newLi = document.createElement("li");
  newLi.innerText = toDoValue;
  console.log(toDoValue);
  // Wert in Testfeld auf Leer ändern
  neuesToDo.value = "";
  // Anhängen der Liste in den DOM
  const list = document.querySelector("#list");
  list.appendChild(newLi);
}
