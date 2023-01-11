const input = document.querySelector("input");
const btn = document.querySelector("button");
const bottom = document.querySelector(".bottom");
const clear = document.querySelector(".clear");

if (localStorage.key("todolist")) {
} else {
  localStorage.setItem("todolist", JSON.stringify([]));
}

btn.addEventListener("click", () => {
  let array = JSON.parse(localStorage.getItem("todolist"));
  array.push(input.value);
  localStorage.setItem("todolist", JSON.stringify(array));
  const div = document.createElement("div");
  div.className = "todo";
  const paragraph = document.createElement("p");
  paragraph.textContent = input.value;
  bottom.append(div);
  div.appendChild(paragraph);
  input.value = "";
});

let arr = JSON.parse(localStorage.getItem("todolist"));

for (i = 0; i < arr.length; i++) {
  const div = document.createElement("div");
  div.className = "todo";
  const paragraph = document.createElement("p");
  paragraph.textContent = arr[i];
  bottom.append(div);
  div.appendChild(paragraph);
  input.value = "";
}

const todo = document.querySelectorAll(".todo");

clear.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("todolist", JSON.stringify([]));
  let arr = JSON.parse(localStorage.getItem("todolist"));
  bottom.innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.className = "todo";
    const paragraph = document.createElement("p");
    paragraph.textContent = arr[i];
    bottom.append(div);
    div.appendChild(paragraph);
    input.value = "";
  }
});


