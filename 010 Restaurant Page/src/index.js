
import createHomeContent from '../src/home.js';
import createHeader from '../src/header.js';
import createFooter from '../src/footer.js';
import createMenu from '../src/menu.js';
import ContactUsModule from '../src/contactus.js';
import createAboutUsSection from '../src/aboutus.js';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('main');

    const header = createHeader();
    document.body.insertBefore(header, content);

    const footer = createFooter();
    document.body.appendChild(footer);

    content.appendChild(createHomeContent());

    document.getElementById('home-btn').addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(createHomeContent());
    });

    document.getElementById('about-btn').addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(createAboutUsSection());
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(ContactUsModule());
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(createMenu());
    });
});