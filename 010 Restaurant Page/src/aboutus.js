// aboutus.js

// Function to create the about us section
export default function createAboutUsSection() {
  const section = document.createElement("section");
  section.classList.add("about");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("about-content");

  const mainCardDiv = document.createElement("div");
  mainCardDiv.classList.add("card-main");

  const mainCardHeading = document.createElement("h3");
  mainCardHeading.textContent = "About Us";

  const mainCardImage = document.createElement("img");
  mainCardImage.src =
    "Assets/about/About_Us_Hero_1260x560_Desktop-1 hero-desktop.jpg";
  mainCardImage.alt = "McDonald's Logo";

  const storyDiv = document.createElement("div");
  storyDiv.classList.add("story");

  const storyParagraph1 = document.createElement("p");
  storyParagraph1.textContent =
    "Step into a world where the iconic flavors of the Big Mac®, Quarter Pounder® sandwich, and the joy of the Happy Meal® are reimagined at MacD, a culinary destination where every bite tells a story of innovation and delight.";

  const storyParagraph2 = document.createElement("p");
  storyParagraph2.textContent =
    "\"MacD is not just another restaurant; it's a culinary experience crafted with passion and dedication. Our journey began with a vision to redefine fast food, blending innovation with tradition. Since our inception, we've strived to create a space where quality meets affordability, where every bite tells a story of flavor and freshness. From our humble beginnings to becoming a beloved fixture in communities nationwide, MacD has remained committed to serving more than just meals. We're a hub for connection, a place where hardworking individuals, students, seniors, and volunteers come together to savor not only our delicious offerings but also the warmth of community spirit. Join us at MacD and embark on a gastronomic adventure that's as enriching as it is fulfilling.\"";

  storyDiv.appendChild(storyParagraph1);
  storyDiv.appendChild(storyParagraph2);

  mainCardDiv.appendChild(mainCardHeading);
  mainCardDiv.appendChild(mainCardImage);
  mainCardDiv.appendChild(storyDiv);

  contentDiv.appendChild(mainCardDiv);

  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");

  // Sub-cards creation
  const subCardsData = [
    {
      imageSrc:
        "Assets/about/Our_history_574x249 1-2-full-bleed-tile-desktop.jpg",
      title: "Our History",
      description: "A proud history in Canada since 1967.",
    },
    {
      imageSrc: "Assets/about/PressRoom-24-1 1-2-full-bleed-tile-desktop.jpg",
      title: "Press Room",
      description: "See our latest news.",
    },
    {
      imageSrc:
        "Assets/about/investor-relations_574x249 1-2-full-bleed-tile-desktop.jpg",
      title: "Investor Relations",
      description: "Our plans for the future.",
    },
    {
      imageSrc:
        "Assets/about/Franchising_574x249 1-2-full-bleed-tile-desktop.jpg",
      title: "Franchising",
      description: "Become a McDonald's franchisee.",
    },
  ];

  subCardsData.forEach((data) => {
    const subCardDiv = document.createElement("div");
    subCardDiv.classList.add("sub-card");

    const subCardImage = document.createElement("img");
    subCardImage.src = data.imageSrc;
    subCardImage.alt = data.title;

    const subCardContentDiv = document.createElement("div");
    subCardContentDiv.classList.add("sub-card-content");

    const subCardTitle = document.createElement("h4");
    subCardTitle.textContent = data.title;

    const subCardDescription = document.createElement("p");
    subCardDescription.textContent = data.description;

    subCardContentDiv.appendChild(subCardTitle);
    subCardContentDiv.appendChild(subCardDescription);

    subCardDiv.appendChild(subCardImage);
    subCardDiv.appendChild(subCardContentDiv);

    gridDiv.appendChild(subCardDiv);
  });

  contentDiv.appendChild(gridDiv);
  section.appendChild(contentDiv);

  return section;
}
