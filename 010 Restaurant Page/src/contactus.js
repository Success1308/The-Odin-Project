
export default function ContactUsModule(){
    const contactUsSection = document.createElement('section');
    contactUsSection.classList.add('contact-us');

    const formHtml = `
        <h2>Contact Us</h2>
        <form action="/submit_form" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br>
            <button type="submit">Submit</button>
        </form>
        <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
        </div>
    `;

    contactUsSection.innerHTML = formHtml;


    return contactUsSection
    ;
};
