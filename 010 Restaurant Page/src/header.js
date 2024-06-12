// header.js

export default function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const btnMenuDiv = document.createElement('div');
    btnMenuDiv.className = 'btn-menu';

    const logoImg = document.createElement('img');
    logoImg.src = 'Assets/logo_transparent.png';
    logoImg.id = 'home-logo';
    logoImg.alt = 'logo';

    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn-div';

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-btn';
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-btn';
    menuBtn.textContent = 'Menu';

    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about-btn';
    aboutBtn.textContent = 'About';

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contact-btn';
    contactBtn.textContent = 'Contact Us';

    btnDiv.append(homeBtn, menuBtn, aboutBtn, contactBtn);

    const rightDiv = document.createElement('div');
    rightDiv.className = 'right-div';

    const envelopeIcon = document.createElement('i');
    envelopeIcon.className = 'fa-solid fa-envelope';

    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa-solid fa-magnifying-glass';

    const locationIcon = document.createElement('i');
    locationIcon.className = 'fa-solid fa-location-dot';

    rightDiv.append(envelopeIcon, searchIcon, locationIcon);

    btnMenuDiv.append(logoImg, btnDiv, rightDiv);
    nav.append(btnMenuDiv);
    header.append(nav);

    return header;
}