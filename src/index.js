const content = document.querySelector('#content');

const createHeader = (function () {
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
   ul.childNodes[2].textContent = 'About';
   console.log(ul.childNodes[1]);
   nav.appendChild(ul);
   header.appendChild(logo);
   header.appendChild(nav);
   content.appendChild(header);
})();
