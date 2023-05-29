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

export default createHomePage;