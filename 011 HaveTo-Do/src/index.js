// index.js

import "./style.css";
import Home from "./home";
import Storage from "./storage";
import createLayout from "./layout";

document.addEventListener("DOMContentLoaded", () => {
  const storage = Storage();
  const userName = storage.getUserName();
  const body = document.querySelector("body");

  if (!userName) {
    Home();
  } else {
    body.innerHTML = ``;
    body.appendChild(createLayout());
  }
});
