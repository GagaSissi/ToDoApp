"use strict";

console.log("Hallo ToDoApp!");

const btn = document.querySelector("#btn");

btn.addEventListener("click", meine_funktion);
function meine_funktion() {
  const neuesToDo = document.querySelector("#textbox");
  const ToDoValue = neuesToDo.value;

  const newLi = document.createElement("li");
  newLi.innerText = neuesToDo;

  newToDoInputEl.value = "";
}
