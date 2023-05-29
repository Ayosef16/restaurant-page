const createHomePage = () => {
    const restaurantContent = document.querySelector('.restaurant-content');
    let aboutUs = document.createElement('div');
    let aboutUsHeader = document.createElement('div');
    let aboutUsContent = document.createElement('div');
    aboutUsHeader.textContent = 'About Us';
    aboutUsContent.textContent = 'Food Maker was created 50 years ago, with the intention of being one of the best burger restaurants out there, our key values are\
    excellence service, kindness and customer oriented attention. We currently have a worldwide variety of burgers, including classic american, peruvian, chilean\
    and japanese.';
    aboutUsHeader.classList.add('about-us-header');
    aboutUsContent.classList.add('about-us-content');
    aboutUs.appendChild(aboutUsHeader);
    aboutUs.appendChild(aboutUsContent);
    aboutUs.classList.add('about-us');
    restaurantContent.appendChild(aboutUs);
}

export default createHomePage;