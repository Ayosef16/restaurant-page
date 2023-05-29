import createHeader, { createContent } from './modules/layout';
import createHomePage from './modules/home';
import createMenu from './modules/menu';

createHeader();
createContent();
createHomePage();

const home = document.querySelector('.home-nav');
const menu = document.querySelector('.menu-nav');
const contact = document.querySelector('.contact-nav');

function clearContent () {
    const restaurantContent = document.querySelector('.restaurant-content');
    restaurantContent.innerHTML = '';
}

function refreshHome () {
    clearContent();
    createHomePage();
}

function refreshMenu () {
    clearContent();
    createMenu();
}

home.addEventListener('click', refreshHome);
menu.addEventListener('click', refreshMenu);
