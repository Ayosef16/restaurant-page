const createContact = () => {
    const restaurantContent = document.querySelector('.restaurant-content');
    createContactInfo(restaurantContent);
}

function createContactInfo (name) {
    let contact = document.createElement('div');
    let contactHeader = document.createElement('div');
    let contactContent = document.createElement('div');
    contactHeader.textContent = 'Contact';
    contactContent.textContent = 'Name: Ayosef Rivera\r\nEmail: ayosef@gmail.com\r\nAddress: The walking dead street 1020, CA.';
    contact.classList.add('contact');
    contactHeader.classList.add('contact-header');
    contactContent.classList.add('contact-content');
    contact.appendChild(contactHeader);
    contact.appendChild(contactContent);
    name.appendChild(contact);
}

export default createContact;