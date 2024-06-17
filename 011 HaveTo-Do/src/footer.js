// footer.js

export function createFooter() {
    // Create main elements
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');

    const footerContentDiv = document.createElement('div');
    footerContentDiv.classList.add('footer-content');

    const footerLeftDiv = document.createElement('div');
    footerLeftDiv.classList.add('footer-left');

    const footerRightDiv = document.createElement('div');
    footerRightDiv.classList.add('footer-right');

    // Create content for left and right footer sections
    const leftContent = document.createElement('p');
    leftContent.innerHTML = '&copy; 2024 Success Ambaliya. All Rights Reserved.';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com'; // Replace with actual GitHub link
    githubLink.target = '_blank';
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab', 'fa-github');
    githubLink.appendChild(githubIcon);

    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://linkedin.com'; // Replace with actual LinkedIn link
    linkedinLink.target = '_blank';
    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fab', 'fa-linkedin');
    linkedinLink.appendChild(linkedinIcon);

    // Append elements to respective parent elements
    footerLeftDiv.appendChild(leftContent);
    footerRightDiv.appendChild(githubLink);
    footerRightDiv.appendChild(linkedinLink);

    footerContentDiv.appendChild(footerLeftDiv);
    footerContentDiv.appendChild(footerRightDiv);

    footerDiv.appendChild(footerContentDiv);

    return footerDiv;
}
