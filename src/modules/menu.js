const createMenu = () => {
    const restaurantContent = document.querySelector('restaurant-content');
    createMenuItems(restaurantContent);
}

function createMenuItems (name) {
    let menu = document.createElement('div');
    let menuHeader = document.createElement('div');
    let menuContent = document.createElement('div');
    menuHeader.textContent = 'Menu';
    let hamburger = document.createElement('div');
    for (let i=0; i<6; i++) {
        let hamburgerHeader = document.createElement('div');
        let hamburgerDescription = document.createElement('div');
        hamburgerHeader.classList.add(hamburger-header);
        hamburgerDescription.classList.add(hamburger-description);
        hamburger.appendChild(hamburgerHeader);
        hamburger.appendChild(hamburgerDescription);
    }
    menuContent.appendChild(hamburger);
    menu.appendChild(menuHeader);
    menu.appendChild(menuContent);

}

export default createMenu;