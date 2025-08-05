import "./styles.css";

const button = document.querySelector("button");
const nav = document.querySelector("nav");
const hidden = document.querySelector("ul");
button.addEventListener("click", toggleNav);
function toggleNav() {
  hidden.className = hidden.className == "hidden" ? "shown" : "hidden";
}
