// layout.js

import { createHeader } from "./header";
import { createLeftSide } from "./projectDOM";
import { createTodoBody } from "./todoDom";
import { createRightSide } from "./notesdom";
import { createFooter } from "./footer";

// createLayout.js
export default function createLayout() {
  const layoutSection = document.createElement("section");
  layoutSection.classList.add("layout");

  const header = createHeader();
  layoutSection.appendChild(header);

  // //   // Create and append left side content
  const leftSide = createLeftSide();
  layoutSection.appendChild(leftSide);

  //     // Create and append body content
  const body = createTodoBody();
  layoutSection.appendChild(body);

  //   // Create and append right side content
  const rightSide = createRightSide();
  layoutSection.appendChild(rightSide);

  // Create and append footer
  const footer = createFooter();
  layoutSection.appendChild(footer);

  return layoutSection;
}
