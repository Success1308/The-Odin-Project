/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutUsSection)\n/* harmony export */ });\n// aboutus.js\r\n\r\n// Function to create the about us section\r\nfunction createAboutUsSection() {\r\n    const section = document.createElement('section');\r\n    section.classList.add('about');\r\n\r\n    const contentDiv = document.createElement('div');\r\n    contentDiv.classList.add('about-content');\r\n\r\n    const mainCardDiv = document.createElement('div');\r\n    mainCardDiv.classList.add('card-main');\r\n\r\n    const mainCardHeading = document.createElement('h3');\r\n    mainCardHeading.textContent = 'About Us';\r\n\r\n    const mainCardImage = document.createElement('img');\r\n    mainCardImage.src = 'Assets/about/About_Us_Hero_1260x560_Desktop-1 hero-desktop.jpg';\r\n    mainCardImage.alt = 'McDonald\\'s Logo';\r\n\r\n    const storyDiv = document.createElement('div');\r\n    storyDiv.classList.add('story');\r\n\r\n    const storyParagraph1 = document.createElement('p');\r\n    storyParagraph1.textContent = 'Step into a world where the iconic flavors of the Big Mac®, Quarter Pounder® sandwich, and the joy of the Happy Meal® are reimagined at MacD, a culinary destination where every bite tells a story of innovation and delight.';\r\n    \r\n    const storyParagraph2 = document.createElement('p');\r\n    storyParagraph2.textContent = '\"MacD is not just another restaurant; it\\'s a culinary experience crafted with passion and dedication. Our journey began with a vision to redefine fast food, blending innovation with tradition. Since our inception, we\\'ve strived to create a space where quality meets affordability, where every bite tells a story of flavor and freshness. From our humble beginnings to becoming a beloved fixture in communities nationwide, MacD has remained committed to serving more than just meals. We\\'re a hub for connection, a place where hardworking individuals, students, seniors, and volunteers come together to savor not only our delicious offerings but also the warmth of community spirit. Join us at MacD and embark on a gastronomic adventure that\\'s as enriching as it is fulfilling.\"';\r\n\r\n    storyDiv.appendChild(storyParagraph1);\r\n    storyDiv.appendChild(storyParagraph2);\r\n\r\n    mainCardDiv.appendChild(mainCardHeading);\r\n    mainCardDiv.appendChild(mainCardImage);\r\n    mainCardDiv.appendChild(storyDiv);\r\n\r\n    contentDiv.appendChild(mainCardDiv);\r\n\r\n    const gridDiv = document.createElement('div');\r\n    gridDiv.classList.add('grid');\r\n\r\n    // Sub-cards creation\r\n    const subCardsData = [\r\n        { imageSrc: 'Assets/about/Our_history_574x249 1-2-full-bleed-tile-desktop.jpg', title: 'Our History', description: 'A proud history in Canada since 1967.' },\r\n        { imageSrc: 'Assets/about/PressRoom-24-1 1-2-full-bleed-tile-desktop.jpg', title: 'Press Room', description: 'See our latest news.' },\r\n        { imageSrc: 'Assets/about/investor-relations_574x249 1-2-full-bleed-tile-desktop.jpg', title: 'Investor Relations', description: 'Our plans for the future.' },\r\n        { imageSrc: 'Assets/about/Franchising_574x249 1-2-full-bleed-tile-desktop.jpg', title: 'Franchising', description: 'Become a McDonald\\'s franchisee.' }\r\n    ];\r\n\r\n    subCardsData.forEach(data => {\r\n        const subCardDiv = document.createElement('div');\r\n        subCardDiv.classList.add('sub-card');\r\n\r\n        const subCardImage = document.createElement('img');\r\n        subCardImage.src = data.imageSrc;\r\n        subCardImage.alt = data.title;\r\n\r\n        const subCardContentDiv = document.createElement('div');\r\n        subCardContentDiv.classList.add('sub-card-content');\r\n\r\n        const subCardTitle = document.createElement('h4');\r\n        subCardTitle.textContent = data.title;\r\n\r\n        const subCardDescription = document.createElement('p');\r\n        subCardDescription.textContent = data.description;\r\n\r\n        subCardContentDiv.appendChild(subCardTitle);\r\n        subCardContentDiv.appendChild(subCardDescription);\r\n\r\n        subCardDiv.appendChild(subCardImage);\r\n        subCardDiv.appendChild(subCardContentDiv);\r\n\r\n        gridDiv.appendChild(subCardDiv);\r\n    });\r\n\r\n    contentDiv.appendChild(gridDiv);\r\n    section.appendChild(contentDiv);\r\n\r\n    return section;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutus.js?");

/***/ }),

/***/ "./src/contactus.js":
/*!**************************!*\
  !*** ./src/contactus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactUsModule)\n/* harmony export */ });\n\r\nfunction ContactUsModule(){\r\n    const contactUsSection = document.createElement('section');\r\n    contactUsSection.classList.add('contact-us');\r\n\r\n    const formHtml = `\r\n        <h2>Contact Us</h2>\r\n        <form action=\"/submit_form\" method=\"post\">\r\n            <label for=\"name\">Name:</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" required><br>\r\n            <label for=\"email\">Email:</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" required><br>\r\n            <label for=\"message\">Message:</label><br>\r\n            <textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"50\" required></textarea><br>\r\n            <button type=\"submit\">Submit</button>\r\n        </form>\r\n        <div class=\"contact-info\">\r\n            <h3>Contact Information</h3>\r\n            <p>Email: info@example.com</p>\r\n            <p>Phone: +1234567890</p>\r\n            <p>Address: 123 Street, City, Country</p>\r\n        </div>\r\n    `;\r\n\r\n    contactUsSection.innerHTML = formHtml;\r\n\r\n\r\n    return contactUsSection\r\n    ;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactus.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\n// footer.js\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.className = 'footer';\r\n\r\n    const footerContainer = document.createElement('div');\r\n    footerContainer.className = 'footer-container';\r\n\r\n    // Footer Logo\r\n    const footerLogo = document.createElement('div');\r\n    footerLogo.className = 'footer-logo';\r\n    const logoImg = document.createElement('img');\r\n    logoImg.src = 'Assets/logo_transparent.png';\r\n    logoImg.alt = 'Restaurant Logo';\r\n    footerLogo.appendChild(logoImg);\r\n\r\n    // Quick Links\r\n    const footerLinks = document.createElement('div');\r\n    footerLinks.className = 'footer-links';\r\n    const quickLinksHeader = document.createElement('h3');\r\n    quickLinksHeader.textContent = 'Quick Links';\r\n    const quickLinksList = document.createElement('ul');\r\n    const quickLinks = ['Home', 'Menu', 'About', 'Contact Us'];\r\n    quickLinks.forEach(link => {\r\n        const listItem = document.createElement('li');\r\n        const anchor = document.createElement('a');\r\n        anchor.href = `#${link.toLowerCase().replace(' ', '-')}-btn`;\r\n        anchor.textContent = link;\r\n        listItem.appendChild(anchor);\r\n        quickLinksList.appendChild(listItem);\r\n    });\r\n    footerLinks.append(quickLinksHeader, quickLinksList);\r\n\r\n    // Contact Information\r\n    const footerContact = document.createElement('div');\r\n    footerContact.className = 'footer-contact';\r\n    const contactHeader = document.createElement('h3');\r\n    contactHeader.textContent = 'Contact Us';\r\n    const contactInfo = [\r\n        { icon: 'fa-phone', text: '+1(438)722-9612' },\r\n        { icon: 'fa-envelope', text: 'info@restaurant.com' },\r\n        { icon: 'fa-location-dot', text: '1234 Street Name, City, Country' }\r\n    ];\r\n    const contactParagraphs = contactInfo.map(item => {\r\n        const paragraph = document.createElement('p');\r\n        const icon = document.createElement('i');\r\n        icon.className = `fa-solid ${item.icon}`;\r\n        paragraph.appendChild(icon);\r\n        paragraph.innerHTML += ` ${item.text}`;\r\n        return paragraph;\r\n    });\r\n    footerContact.append(contactHeader, ...contactParagraphs);\r\n\r\n    // Social Media Links\r\n    const footerSocial = document.createElement('div');\r\n    footerSocial.className = 'footer-social';\r\n    const socialHeader = document.createElement('h3');\r\n    socialHeader.textContent = 'Follow Us';\r\n    const socialIcons = document.createElement('div');\r\n    socialIcons.className = 'social-icons';\r\n    const socialPlatforms = ['fa-square-instagram', 'fa-x-twitter', 'fa-square-facebook'];\r\n    socialPlatforms.forEach(platform => {\r\n        const anchor = document.createElement('a');\r\n        anchor.href = '#'; // Update with actual social media links\r\n        const icon = document.createElement('i');\r\n        icon.className = `fa-brands ${platform}`;\r\n        anchor.appendChild(icon);\r\n        socialIcons.appendChild(anchor);\r\n    });\r\n    footerSocial.append(socialHeader, socialIcons);\r\n\r\n    // Footer Bottom\r\n    const footerBottom = document.createElement('div');\r\n    footerBottom.className = 'footer-bottom';\r\n    const copyrightParagraph = document.createElement('p');\r\n    copyrightParagraph.innerHTML = '&copy; 2024 Restaurant. All Rights Reserved.';\r\n    footerBottom.appendChild(copyrightParagraph);\r\n\r\n    footerContainer.append(footerLogo, footerLinks, footerContact, footerSocial);\r\n    footer.append(footerContainer, footerBottom);\r\n\r\n    return footer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\n// header.js\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('header');\r\n    const nav = document.createElement('nav');\r\n    const btnMenuDiv = document.createElement('div');\r\n    btnMenuDiv.className = 'btn-menu';\r\n\r\n    const logoImg = document.createElement('img');\r\n    logoImg.src = 'Assets/logo_transparent.png';\r\n    logoImg.id = 'home-logo';\r\n    logoImg.alt = 'logo';\r\n\r\n    const btnDiv = document.createElement('div');\r\n    btnDiv.className = 'btn-div';\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.id = 'home-btn';\r\n    homeBtn.textContent = 'Home';\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.id = 'menu-btn';\r\n    menuBtn.textContent = 'Menu';\r\n\r\n    const aboutBtn = document.createElement('button');\r\n    aboutBtn.id = 'about-btn';\r\n    aboutBtn.textContent = 'About';\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.id = 'contact-btn';\r\n    contactBtn.textContent = 'Contact Us';\r\n\r\n    btnDiv.append(homeBtn, menuBtn, aboutBtn, contactBtn);\r\n\r\n    const rightDiv = document.createElement('div');\r\n    rightDiv.className = 'right-div';\r\n\r\n    const envelopeIcon = document.createElement('i');\r\n    envelopeIcon.className = 'fa-solid fa-envelope';\r\n\r\n    const searchIcon = document.createElement('i');\r\n    searchIcon.className = 'fa-solid fa-magnifying-glass';\r\n\r\n    const locationIcon = document.createElement('i');\r\n    locationIcon.className = 'fa-solid fa-location-dot';\r\n\r\n    rightDiv.append(envelopeIcon, searchIcon, locationIcon);\r\n\r\n    btnMenuDiv.append(logoImg, btnDiv, rightDiv);\r\n    nav.append(btnMenuDiv);\r\n    header.append(nav);\r\n\r\n    return header;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\n// home.js\r\n\r\nfunction createHomeContent() {\r\n    const homeContent = document.createElement('div');\r\n    homeContent.classList.add('home-content');\r\n\r\n    const heroSection = document.createElement('section');\r\n    heroSection.classList.add('hero');\r\n\r\n    const leftDiv = document.createElement('div');\r\n    leftDiv.classList.add('left');\r\n\r\n    const headDiv = document.createElement('div');\r\n    headDiv.classList.add('head');\r\n    headDiv.innerHTML = '<span>Spicy BIG</span><br><span>MAC</span>';\r\n\r\n    const heroBtnMainDiv = document.createElement('div');\r\n    heroBtnMainDiv.classList.add('hero-btn-main');\r\n    const startOrderBtn = document.createElement('button');\r\n    startOrderBtn.classList.add('hero-btn-1');\r\n    startOrderBtn.textContent = 'Start Order';\r\n    const viewMenuBtn = document.createElement('button');\r\n    viewMenuBtn.classList.add('hero-btn-2');\r\n    viewMenuBtn.textContent = 'View Menu';\r\n    heroBtnMainDiv.append(startOrderBtn, viewMenuBtn);\r\n\r\n    leftDiv.append(headDiv, heroBtnMainDiv);\r\n\r\n    const phoneDiv = document.createElement('div');\r\n    phoneDiv.classList.add('phone');\r\n    phoneDiv.innerHTML = '<i class=\"fa-solid fa-phone\"></i> +1(438)722-9612';\r\n\r\n    const cIconDiv = document.createElement('div');\r\n    cIconDiv.classList.add('c-icon');\r\n    cIconDiv.innerHTML = `\r\n        <i class=\"fa-brands fa-square-instagram\"></i>\r\n        <i class=\"fa-brands fa-x-twitter\"></i>\r\n        <i class=\"fa-brands fa-square-facebook\"></i>\r\n    `;\r\n\r\n    heroSection.append(leftDiv, phoneDiv, cIconDiv);\r\n\r\n    const secondSection = document.createElement('section');\r\n    secondSection.classList.add('second');\r\n\r\n    const secondLeftDiv = document.createElement('div');\r\n    secondLeftDiv.classList.add('second-left');\r\n\r\n    const secondLeft1Div = document.createElement('div');\r\n    secondLeft1Div.classList.add('second-left-1');\r\n    const secondLeft1TextDiv = document.createElement('div');\r\n    secondLeft1TextDiv.classList.add('second-left-text');\r\n    secondLeft1TextDiv.textContent = 'Order Online';\r\n    const secondPic1Div1 = document.createElement('div');\r\n    secondPic1Div1.classList.add('second-pic-1');\r\n    secondLeft1Div.append(secondLeft1TextDiv, secondPic1Div1);\r\n\r\n    const secondLeft2Div = document.createElement('div');\r\n    secondLeft2Div.classList.add('second-left-2');\r\n    const secondLeft2TextDiv = document.createElement('div');\r\n    secondLeft2TextDiv.classList.add('second-left-text');\r\n    secondLeft2TextDiv.textContent = 'Order Online';\r\n    const secondPic1Div2 = document.createElement('div');\r\n    secondPic1Div2.classList.add('second-pic-1');\r\n    secondLeft2Div.append(secondLeft2TextDiv, secondPic1Div2);\r\n\r\n    secondLeftDiv.append(secondLeft1Div, secondLeft2Div);\r\n\r\n    secondSection.appendChild(secondLeftDiv);\r\n\r\n    homeContent.append(heroSection, secondSection);\r\n\r\n    return homeContent;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/header.js */ \"./src/header.js\");\n/* harmony import */ var _src_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/footer.js */ \"./src/footer.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contactus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contactus.js */ \"./src/contactus.js\");\n/* harmony import */ var _src_aboutus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/aboutus.js */ \"./src/aboutus.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const content = document.querySelector('main');\r\n\r\n    const header = (0,_src_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    document.body.insertBefore(header, content);\r\n\r\n    const footer = (0,_src_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    document.body.appendChild(footer);\r\n\r\n    content.appendChild((0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n    document.getElementById('home-btn').addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    });\r\n\r\n    document.getElementById('about-btn').addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_src_aboutus_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n    });\r\n\r\n    document.getElementById('contact-btn').addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_src_contactus_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n    });\r\n\r\n    document.getElementById('menu-btn').addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_src_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n    });\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/menu.js\r\n\r\nfunction createMenu() {\r\n    const menuSectionMain = document.createElement('div');\r\n    menuSectionMain.classList.add('menu-section-main');\r\n\r\n    const filterSection = document.createElement('section');\r\n    filterSection.classList.add('filter');\r\n\r\n    const menuItemsSection = document.createElement('section');\r\n    menuItemsSection.classList.add('menu-section');\r\n\r\n    const filterContent = `\r\n        <div class=\"column\">\r\n            <img src=\"Assets/french-fries.svg\" alt=\"Menu Item 1\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/burger-solid.svg\" alt=\"Menu Item 2\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/egg-solid.svg\" alt=\"Menu Item 3\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/bowl-food-solid.svg\" alt=\"Menu Item 1\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/pizza-slice-solid.svg\" alt=\"Menu Item 2\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/cookie-solid.svg\" alt=\"Menu Item 3\">\r\n        </div>\r\n        <div class=\"column\">\r\n            <img src=\"Assets/ice-cream-solid.svg\" alt=\"Menu Item 1\">\r\n        </div>\r\n    `;\r\n\r\n    const menuItemsContent = `\r\n        <div class=\"menu-item\">\r\n            <img src=\"Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n            <h3>Hamburger</h3>\r\n            <p>240 Cals</p>\r\n        </div>\r\n        <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-cheeseburger-2 product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Cheeseburger</h3>\r\n                    <p>290 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item//mcdonalds-mcdouble-1 product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>McDouble</h3>\r\n                    <p>370 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Junior Chicken</h3>\r\n                    <p>380 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-sausage-mcmuffin product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Sausage McMuffin</h3>\r\n                    <p>370 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3> World Famous Fries(Small) </h3>\r\n                    <p>240 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item//mcdonalds-vanilla-cone product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Vanilla Cone</h3>\r\n                    <p>240 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-baked-apple-pie product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Baked Apple Pie</h3>\r\n                    <p>270 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-cheeseburger-happy-meal-pineapple product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Cheeseburger Happy Meal</h3>\r\n                    <p>720 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-oreo-mcflurry product-header-desktop.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Oreo McFlurry</h3>\r\n                    <p>570 Cals</p>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=\"Assets/menu item/mcdonalds-chocolate-milkshake-1 product-header-desktop-1.jpg\" alt=\"Menu Item 1\">\r\n                    <h3>Chocolate Triple Thick Milkshake</h3>\r\n                    <p>380 Cals</p>\r\n                </div>\r\n    `;\r\n\r\n    filterSection.innerHTML = filterContent;\r\n    menuItemsSection.innerHTML = menuItemsContent;\r\n\r\n    menuSectionMain.appendChild(filterSection);\r\n    menuSectionMain.appendChild(menuItemsSection);\r\n\r\n    return menuSectionMain;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;