// home.js
import Storage from "./storage";
import createLayout from "./layout";

const storage = Storage();
const body = document.querySelector("body");

export default function Home() {
  const mainContent = document.createElement("main");
  mainContent.classList.add("home-container");

  const homeLogo = document.createElement("div");
  homeLogo.classList.add("home-logo");
  const logoLink = document.createElement("a");
  homeLogo.appendChild(logoLink);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.classList.add("home-Text");
  nameLabel.textContent = "Your Name, Please:";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.classList.add("home-input");

  const submitButton = document.createElement("button");
  submitButton.classList.add("home-btn");
  submitButton.textContent = "Submit";

  // Append elements to main content
  mainContent.appendChild(homeLogo);
  mainContent.appendChild(nameLabel);
  mainContent.appendChild(nameInput);
  mainContent.appendChild(submitButton);

  // Append main content to the body
  document.body.appendChild(mainContent);

  // Create custom alert box and add it to the body
  const customAlertHTML = `
        <div id="custom-alert" class="custom-alert">
            <div class="custom-alert-content">
                <p>Please enter your name.</p>
                <button id="close-alert">OK</button>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", customAlertHTML);

  const customAlert = document.querySelector("#custom-alert");
  const closeAlertButton = document.querySelector("#close-alert");

  submitButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
      storage.saveUserName(name);
      body.innerHTML = ``;
      body.appendChild(createLayout());
    } else {
      customAlert.style.display = "block";
    }
  });

  closeAlertButton.addEventListener("click", () => {
    customAlert.style.display = "none";
  });

  return mainContent;
}
