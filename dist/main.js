/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomePage = () => {
    const restaurantContent = document.querySelector('.restaurant-content');
    createAboutUsSection(restaurantContent);
    createScheduleSection(restaurantContent);
}

function createAboutUsSection (name) {
    let aboutUs = document.createElement('div');
    let aboutUsHeader = document.createElement('div');
    let aboutUsContent = document.createElement('div');
    aboutUsHeader.textContent = 'About Us';
    aboutUsContent.textContent = 'Food Maker was created 50 years ago, with the intention of being one of the best burger restaurants out there, our key values are\
    excellence service, kindness and customer oriented attention. We currently have a worldwide variety of burgers, including classic american, peruvian, chilean\
    and japanese.';
    aboutUsHeader.classList.add('about-us-header');
    aboutUsContent.classList.add('about-us-content');
    aboutUs.classList.add('about-us');
    aboutUs.appendChild(aboutUsHeader);
    aboutUs.appendChild(aboutUsContent);
    name.appendChild(aboutUs);
}

function createScheduleSection (name) {
    let schedule = document.createElement('div');
    let scheduleHeader = document.createElement('div');
    let scheduleContent = document.createElement('div');
    scheduleHeader.textContent = 'Schedule';
    scheduleContent.textContent = 'Monday - Friday: 8:00 - 20:00\r\nWeekend and Holidays: 8:00 - 22:00';
    scheduleHeader.classList.add('schedule-header');
    scheduleContent.classList.add('schedule-content');
    schedule.classList.add('schedule');
    schedule.appendChild(scheduleHeader);
    schedule.appendChild(scheduleContent);
    name.appendChild(schedule);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector('#content');

const createHeader = () => {
   let header = document.createElement('header');
   let logo = document.createElement('div');
   logo.classList.add('logo');
   logo.textContent = 'Food Maker';
   let nav = document.createElement('div');
   nav.classList.add('nav');
   let ul = document.createElement('ul');
   for (let i=0; i<3; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
   }
   ul.childNodes[0].textContent = 'Home';
   ul.childNodes[1].textContent = 'Menu';
   ul.childNodes[2].textContent = 'Contact';
   ul.childNodes[0].classList.add('home-nav');
   ul.childNodes[1].classList.add('menu-nav');
   ul.childNodes[2].classList.add('contact-nav');
   nav.appendChild(ul);
   header.appendChild(logo);
   header.appendChild(nav);
   content.appendChild(header);
};

const createContent = () => {
    let restaurantContent = document.createElement('div');
    restaurantContent.classList.add('restaurant-content');
    content.appendChild(restaurantContent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/layout */ "./src/modules/layout.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");




(0,_modules_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_layout__WEBPACK_IMPORTED_MODULE_0__.createContent)();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

const home = document.querySelector('.home-nav');
const menu = document.querySelector('.menu-nav');
const contact = document.querySelector('.contact-nav');

function clearContent () {
    const restaurantContent = document.querySelector('.restaurant-content');
    restaurantContent.innerHTML = '';
}

function refreshHome () {
    clearContent();
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function refreshMenu () {
    clearContent();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

home.addEventListener('click', refreshHome);
menu.addEventListener('click', refreshMenu);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3BDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7OztVQ3JDekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ25CO0FBQ0o7O0FBRXhDLDJEQUFZO0FBQ1osOERBQWE7QUFDYix5REFBYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdGF1cmFudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC1jb250ZW50Jyk7XG4gICAgY3JlYXRlQWJvdXRVc1NlY3Rpb24ocmVzdGF1cmFudENvbnRlbnQpO1xuICAgIGNyZWF0ZVNjaGVkdWxlU2VjdGlvbihyZXN0YXVyYW50Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0VXNTZWN0aW9uIChuYW1lKSB7XG4gICAgbGV0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWJvdXRVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBhYm91dFVzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0VXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0VXNDb250ZW50LnRleHRDb250ZW50ID0gJ0Zvb2QgTWFrZXIgd2FzIGNyZWF0ZWQgNTAgeWVhcnMgYWdvLCB3aXRoIHRoZSBpbnRlbnRpb24gb2YgYmVpbmcgb25lIG9mIHRoZSBiZXN0IGJ1cmdlciByZXN0YXVyYW50cyBvdXQgdGhlcmUsIG91ciBrZXkgdmFsdWVzIGFyZVxcXG4gICAgZXhjZWxsZW5jZSBzZXJ2aWNlLCBraW5kbmVzcyBhbmQgY3VzdG9tZXIgb3JpZW50ZWQgYXR0ZW50aW9uLiBXZSBjdXJyZW50bHkgaGF2ZSBhIHdvcmxkd2lkZSB2YXJpZXR5IG9mIGJ1cmdlcnMsIGluY2x1ZGluZyBjbGFzc2ljIGFtZXJpY2FuLCBwZXJ1dmlhbiwgY2hpbGVhblxcXG4gICAgYW5kIGphcGFuZXNlLic7XG4gICAgYWJvdXRVc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dC11cy1oZWFkZXInKTtcbiAgICBhYm91dFVzQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC11cy1jb250ZW50Jyk7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dC11cycpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYWJvdXRVc0hlYWRlcik7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzQ29udGVudCk7XG4gICAgbmFtZS5hcHBlbmRDaGlsZChhYm91dFVzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVTZWN0aW9uIChuYW1lKSB7XG4gICAgbGV0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHNjaGVkdWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHNjaGVkdWxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlSGVhZGVyLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlJztcbiAgICBzY2hlZHVsZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnTW9uZGF5IC0gRnJpZGF5OiA4OjAwIC0gMjA6MDBcXHJcXG5XZWVrZW5kIGFuZCBIb2xpZGF5czogODowMCAtIDIyOjAwJztcbiAgICBzY2hlZHVsZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY2hlZHVsZS1oZWFkZXInKTtcbiAgICBzY2hlZHVsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGUtY29udGVudCcpO1xuICAgIHNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlJyk7XG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWR1bGVIZWFkZXIpO1xuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKHNjaGVkdWxlQ29udGVudCk7XG4gICAgbmFtZS5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICBsb2dvLnRleHRDb250ZW50ID0gJ0Zvb2QgTWFrZXInO1xuICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgIGZvciAobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgfVxuICAgdWwuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgIHVsLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICB1bC5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgdWwuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdob21lLW5hdicpO1xuICAgdWwuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdicpO1xuICAgdWwuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hdicpO1xuICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgcmVzdGF1cmFudENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN0YXVyYW50Q29udGVudC5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRDb250ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbmV4cG9ydCB7IGNyZWF0ZUNvbnRlbnQgfTsiLCJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhdXJhbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtY29udGVudCcpO1xuICAgIGNyZWF0ZU1lbnVJdGVtcyhyZXN0YXVyYW50Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtcyAobmFtZSkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGZvciAobGV0IGk9MDsgaTw2OyBpKyspIHtcbiAgICAgICAgbGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaGFtYnVyZ2VySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBoYW1idXJnZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoYW1idXJnZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLWhlYWRlcicpO1xuICAgICAgICBoYW1idXJnZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaGFtYnVyZ2VyLmFwcGVuZENoaWxkKGhhbWJ1cmdlckhlYWRlcik7XG4gICAgICAgIGhhbWJ1cmdlci5hcHBlbmRDaGlsZChoYW1idXJnZXJEZXNjcmlwdGlvbik7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlcik7XG4gICAgfVxuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9ICdDbGFzc2ljIEhhbWJ1cmdlclxcclxcbiQyMCc7XG4gICAgbWVudUNvbnRlbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gJzE1MGdyIHByZW1pdW0gYmVlZiwgY2hlZGRhciwgdG9tYXRvLCBsZXR0dWNlIGFuZCBvdXIgc2VjcmV0IHNhdWNlLic7XG4gICAgbWVudUNvbnRlbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gJ0JhY29uIEhhbWJ1cmdlclxcclxcbiQyMCc7XG4gICAgbWVudUNvbnRlbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gJzE1MGdyIHByZW1pdW0gYmVlZiwgYmFjb24sIGNoZWRkYXIgYW5kIG91ciBzZWNyZXQgc2F1Y2UuJztcbiAgICBtZW51Q29udGVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSAnRG91YmxlIEJhY29uIEhhbWJ1cmdlclxcclxcbiQyNSc7XG4gICAgbWVudUNvbnRlbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gJzMwMGdyIHByZW1pdW0gYmVlZiwgYmFjb24sIGNoZWRkYXIgYW5kIG91ciBzZWNyZXQgc2F1Y2UuJztcbiAgICBtZW51Q29udGVudC5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSAnQ2hpbGVhbiBIYW1idXJnZXJcXHJcXG4kMjAnO1xuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9ICcxNTBnciBwcmVtaXVtIGJlZWYsIGF2b2NhZG8sIHRvbWF0byBhbmQgbWF5b25uYWlzZS4nO1xuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9ICdQZXJ1dmlhbiBIYW1idXJnZXJcXHJcXG4kMjAnO1xuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9ICcxNTBnciBwcmVtaXVtIGJlZWYsIG9uaW9ucywgdG9tYXRvLCBwaWNrbGVzIGFuZCBwZXJ1dmlhbiBzYXVjZS4nO1xuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9ICdKYXBhbmVzZSBIYW1idXJnZXJcXHJcXG4kMjAnO1xuICAgIG1lbnVDb250ZW50LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9ICcxNTBnciBwcmVtaXVtIGJlZWYsIHBpY2tsZXMsIGthbmlrYW1hIGFuZCBzb3kgc2F1Y2UuJztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIG5hbWUuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyLCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tICcuL21vZHVsZXMvbGF5b3V0JztcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5cbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlQ29udGVudCgpO1xuY3JlYXRlSG9tZVBhZ2UoKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLW5hdicpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW5hdicpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW5hdicpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHJlc3RhdXJhbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtY29udGVudCcpO1xuICAgIHJlc3RhdXJhbnRDb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoSG9tZSAoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlSG9tZVBhZ2UoKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaE1lbnUgKCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU1lbnUoKTtcbn1cblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZnJlc2hIb21lKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoTWVudSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=