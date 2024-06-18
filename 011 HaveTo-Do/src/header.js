// header.js
import { getRandomQuote } from "./quotes.js";
import Storage from "./storage.js";

// Function to create the header element
export function createHeader() {
  const storage = Storage();

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("header-logo");
  headerDiv.appendChild(logoDiv);

  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("header-welcome");
  const welcomeP = document.createElement("p");
  welcomeP.classList.add("header-welcome-p");

  const userName = storage.getUserName();
  const currentHour = new Date().getHours();
  let greeting;
  // greeting
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  // username
  if (userName) {
    welcomeP.textContent = `${greeting}, ${userName}!`;
  } else {
    welcomeP.textContent = `${greeting}, Stranger`;
  }
  welcomeDiv.appendChild(welcomeP);
  headerDiv.appendChild(welcomeDiv);

  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("header-Quote");
  const quoteP = document.createElement("p");
  quoteP.classList.add("header-Quote-p");
  quoteP.textContent = getRandomQuote().split(" - ")[0];
  quoteDiv.appendChild(quoteP);
  headerDiv.appendChild(quoteDiv);

  return headerDiv;
}

// prototype
// Function to update the quote dynamically
// export function updateQuote() {
//     if (quoteP) {
//         quoteP.textContent = getRandomQuote().split(' - ')[0]; // Update quote content
//     }
// }
