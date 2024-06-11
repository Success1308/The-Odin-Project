// footer.js

export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    // Footer Logo
    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';
    const logoImg = document.createElement('img');
    logoImg.src = 'Assets/logo_transparent.png';
    logoImg.alt = 'Restaurant Logo';
    footerLogo.appendChild(logoImg);

    // Quick Links
    const footerLinks = document.createElement('div');
    footerLinks.className = 'footer-links';
    const quickLinksHeader = document.createElement('h3');
    quickLinksHeader.textContent = 'Quick Links';
    const quickLinksList = document.createElement('ul');
    const quickLinks = ['Home', 'Menu', 'About', 'Contact Us'];
    quickLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${link.toLowerCase().replace(' ', '-')}-btn`;
        anchor.textContent = link;
        listItem.appendChild(anchor);
        quickLinksList.appendChild(listItem);
    });
    footerLinks.append(quickLinksHeader, quickLinksList);

    // Contact Information
    const footerContact = document.createElement('div');
    footerContact.className = 'footer-contact';
    const contactHeader = document.createElement('h3');
    contactHeader.textContent = 'Contact Us';
    const contactInfo = [
        { icon: 'fa-phone', text: '+1(438)722-9612' },
        { icon: 'fa-envelope', text: 'info@restaurant.com' },
        { icon: 'fa-location-dot', text: '1234 Street Name, City, Country' }
    ];
    const contactParagraphs = contactInfo.map(item => {
        const paragraph = document.createElement('p');
        const icon = document.createElement('i');
        icon.className = `fa-solid ${item.icon}`;
        paragraph.appendChild(icon);
        paragraph.innerHTML += ` ${item.text}`;
        return paragraph;
    });
    footerContact.append(contactHeader, ...contactParagraphs);

    // Social Media Links
    const footerSocial = document.createElement('div');
    footerSocial.className = 'footer-social';
    const socialHeader = document.createElement('h3');
    socialHeader.textContent = 'Follow Us';
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    const socialPlatforms = ['fa-square-instagram', 'fa-x-twitter', 'fa-square-facebook'];
    socialPlatforms.forEach(platform => {
        const anchor = document.createElement('a');
        anchor.href = '#'; // Update with actual social media links
        const icon = document.createElement('i');
        icon.className = `fa-brands ${platform}`;
        anchor.appendChild(icon);
        socialIcons.appendChild(anchor);
    });
    footerSocial.append(socialHeader, socialIcons);

    // Footer Bottom
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    const copyrightParagraph = document.createElement('p');
    copyrightParagraph.innerHTML = '&copy; 2024 Restaurant. All Rights Reserved.';
    footerBottom.appendChild(copyrightParagraph);

    footerContainer.append(footerLogo, footerLinks, footerContact, footerSocial);
    footer.append(footerContainer, footerBottom);

    return footer;
}
