// home.js

export default function createHomeContent() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const headDiv = document.createElement("div");
  headDiv.classList.add("head");
  headDiv.innerHTML = "<span>Spicy BIG</span><br><span>MAC</span>";

  const heroBtnMainDiv = document.createElement("div");
  heroBtnMainDiv.classList.add("hero-btn-main");
  const startOrderBtn = document.createElement("button");
  startOrderBtn.classList.add("hero-btn-1");
  startOrderBtn.textContent = "Start Order";
  const viewMenuBtn = document.createElement("button");
  viewMenuBtn.classList.add("hero-btn-2");
  viewMenuBtn.textContent = "View Menu";
  heroBtnMainDiv.append(startOrderBtn, viewMenuBtn);

  leftDiv.append(headDiv, heroBtnMainDiv);

  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("phone");
  phoneDiv.innerHTML = '<i class="fa-solid fa-phone"></i> +1(438)722-9612';

  const cIconDiv = document.createElement("div");
  cIconDiv.classList.add("c-icon");
  cIconDiv.innerHTML = `
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-square-facebook"></i>
    `;

  heroSection.append(leftDiv, phoneDiv, cIconDiv);

  const secondSection = document.createElement("section");
  secondSection.classList.add("second");

  const secondLeftDiv = document.createElement("div");
  secondLeftDiv.classList.add("second-left");

  const secondLeft1Div = document.createElement("div");
  secondLeft1Div.classList.add("second-left-1");
  const secondLeft1TextDiv = document.createElement("div");
  secondLeft1TextDiv.classList.add("second-left-text");
  secondLeft1TextDiv.textContent = "Order Online";
  const secondPic1Div1 = document.createElement("div");
  secondPic1Div1.classList.add("second-pic-1");
  secondLeft1Div.append(secondLeft1TextDiv, secondPic1Div1);

  const secondLeft2Div = document.createElement("div");
  secondLeft2Div.classList.add("second-left-2");
  const secondLeft2TextDiv = document.createElement("div");
  secondLeft2TextDiv.classList.add("second-left-text");
  secondLeft2TextDiv.textContent = "Order Online";
  const secondPic1Div2 = document.createElement("div");
  secondPic1Div2.classList.add("second-pic-1");
  secondLeft2Div.append(secondLeft2TextDiv, secondPic1Div2);

  secondLeftDiv.append(secondLeft1Div, secondLeft2Div);

  secondSection.appendChild(secondLeftDiv);

  homeContent.append(heroSection, secondSection);

  return homeContent;
}
