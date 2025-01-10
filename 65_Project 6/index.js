// Create a TODO list app capable of storing your Todos in LocalStorage. Add an Option to create, delete and access all the TODO,s.
// Try to make UI as good as Possible.

const inputfeed = document.getElementById("input-feed");
const listeditems = document.getElementById("listed-items");

const addtask = () => {
  if (inputfeed.value === "") {
    alert("Empty todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputfeed.value;
    listeditems.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputfeed.value = "";
  saveinfo();
};
listeditems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("clicked");
      saveinfo();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveinfo();
    }
  },
  false
);
const saveinfo = () => {
  localStorage.setItem("data", listeditems.innerHTML);
};
const taskinfo = () => {
  listeditems.innerHTML = localStorage.getItem("data");
};
taskinfo();
