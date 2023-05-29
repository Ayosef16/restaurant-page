const createMenu = () => {
    const restaurantContent = document.querySelector('.restaurant-content');
    createMenuItems(restaurantContent);
}

function createMenuItems (name) {
    let menu = document.createElement('div');
    let menuHeader = document.createElement('div');
    let menuContent = document.createElement('div');
    menuHeader.textContent = 'Menu';
    for (let i=0; i<6; i++) {
        let hamburger = document.createElement('div');
        let hamburgerHeader = document.createElement('div');
        let hamburgerDescription = document.createElement('div');
        hamburgerHeader.classList.add('hamburger-header');
        hamburgerDescription.classList.add('hamburger-description');
        hamburger.appendChild(hamburgerHeader);
        hamburger.appendChild(hamburgerDescription);
        menuContent.appendChild(hamburger);
    }
    menuContent.childNodes[0].childNodes[0].textContent = 'Classic Hamburger\r\n$20';
    menuContent.childNodes[0].childNodes[1].textContent = '150gr premium beef, cheddar, tomato, lettuce and our secret sauce.';
    menuContent.childNodes[1].childNodes[0].textContent = 'Bacon Hamburger\r\n$20';
    menuContent.childNodes[1].childNodes[1].textContent = '150gr premium beef, bacon, cheddar and our secret sauce.';
    menuContent.childNodes[2].childNodes[0].textContent = 'Double Bacon Hamburger\r\n$25';
    menuContent.childNodes[2].childNodes[1].textContent = '300gr premium beef, bacon, cheddar and our secret sauce.';
    menuContent.childNodes[3].childNodes[0].textContent = 'Chilean Hamburger\r\n$20';
    menuContent.childNodes[3].childNodes[1].textContent = '150gr premium beef, avocado, tomato and mayonnaise.';
    menuContent.childNodes[4].childNodes[0].textContent = 'Peruvian Hamburger\r\n$20';
    menuContent.childNodes[4].childNodes[1].textContent = '150gr premium beef, onions, tomato, pickles and peruvian sauce.';
    menuContent.childNodes[5].childNodes[0].textContent = 'Japanese Hamburger\r\n$20';
    menuContent.childNodes[5].childNodes[1].textContent = '150gr premium beef, pickles, kanikama and soy sauce.';
    menu.appendChild(menuHeader);
    menu.appendChild(menuContent);
    name.appendChild(menu);
}

export default createMenu;