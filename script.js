"use strict";
const listDoSave = [];
// Teilaufgabe "Hallo" in die Konsole ausgeben
console.log("Hallo ToDoApp!");

const btn = document.querySelector("#btn");
// Bei click auf Button, Funktion ausführen
btn.addEventListener("click", meine_funktion);

// Funktion
function meine_funktion() {
  const neuesToDo = document.querySelector("#textbox");
  //Leerstellen raus nehmen, in kleinbuchstaben umwandeln
  const toDoValue = neuesToDo.value.trim().toLowerCase();
  listDoSave.push(toDoValue);
  // Erzeugen eines Listenelements
  const newLi = document.createElement("li");
  // Anhängen der Liste in den DOM
  const list = document.querySelector("#list");
  list.appendChild(newLi);
  // Mit Attribut Checkbox einfügen
  const todoCheckboxEl = document.createElement("input");
  todoCheckboxEl.setAttribute("type", "checkbox");
  list.appendChild(todoCheckboxEl);
  // Text in Wert umwandeln, überprüfen mit Consolenausgabe
  newLi.innerText = toDoValue;
  console.log(toDoValue);
  // Wert in Testfeld auf Leer ändern
  neuesToDo.value = "";

  // Test, localstorage übergeben
  const saveData = localStorage.setItem("saveData", `${listDoSave + 1}`);

  // if (saveData !== null) {
  //   localStorage.setItem("Servus", saveData);
  // } else {
  //   console.warn("No Item in List.");
  // }
}
