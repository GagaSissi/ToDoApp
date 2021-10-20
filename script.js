"use strict";
let listDoSave = [];

fetchAPIData();

function fetchAPIData() {
  fetch("http://localhost:4730/todos")
    .then((responce) => responce.json())
    .then((data) => {
      listDoSave = data;
      createDataFromAPI();
    });
}

function createNewTodo(desc) {
  fetch("http://localhost:4730/todos", {
    method: "POST",
    body: JSON.stringify({ description: desc, done: false }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}

function deleteTodo(idParameter) {
  fetch("http://localhost:4730/todos/" + idParameter, {
    method: "DELETE",
  });
}

// deleteTodo(5);

const btn = document.querySelector("#btn");
btn.addEventListener("click", catchData);

// Funktion
function catchData() {
  const newTodo = document.querySelector("#textbox");
  const toDoValue = newTodo.value.trim().toLowerCase();
  listDoSave.push(createNewTodo(toDoValue));

  const newLi = document.createElement("li");
  const list = document.querySelector("#list");
  list.appendChild(newLi);
  const todoCheckboxEl = document.createElement("input");
  todoCheckboxEl.setAttribute("type", "checkbox");
  newLi.appendChild(todoCheckboxEl);

  // Text in Wert umwandeln, überprüfen mit Consolenausgabe
  newLi.innerText = toDoValue;
  console.log(toDoValue);
  // Wert in Textfeld auf Leer ändern
  newTodo.value = "";
}

function createDataFromAPI() {
  const anotherListForListElements = document.querySelector("#list");
  anotherListForListElements.innerHTML = "";
  listDoSave.forEach(function (element) {
    const newList2 = document.createElement("li");
    newList2.innerText = element.description;
    anotherListForListElements.appendChild(newList2);
    const todoCheckboxEl2 = document.createElement("input");
    todoCheckboxEl2.setAttribute("type", "checkbox");
    newList2.appendChild(todoCheckboxEl2);
    // Update todos ( when changing the done state) using a put request
  });
}
