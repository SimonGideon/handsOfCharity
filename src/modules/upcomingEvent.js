import calendar from '../images/calendar.png';
import clock from '../images/clock.png';
import location from '../images/location.png';

const section2 = document.querySelector('section2');

const upcommingEvents = () => {
  let html = '';
  html += `
<div class="upcoming-event">
    <div class="budgeting">
        <div class="event">
            <img id="event-ico" src="${calendar}" alt="calendar" class="calendar"/> Wednesday, June 15, 2022 |
            <img id="event-ico" src="${clock}" alt="clock" class="clock"/>10AM - 12:30PM
            <img id="event-ico" src="${location}" alt="location" class="location"/>London, UK
        </div>
        <h2>Budgeting, Reporting, amd Futureproofing Our Charity Finance Series</h2>
        <p>>Apply Now</p>
    </div>
    <div class="budgeting">
        <div class="event">
            <img id="event-ico" src="${calendar}" alt="calendar" class="calendar"/> Wednesday, June 15, 2022 |
            <img id="event-ico" src="${clock}" alt="clock" class="clock"/>10AM - 12:30PM
            <img id="event-ico" src="${location}" alt="location" class="location"/>London, UK
        </div>
        <h2>Webinar: How to Host a Successful Charity Fundraiser</h2>
        <p>>Apply Now</p>
    </div>
    <div class="budgeting">
        <div class="event">
            <img id="event-ico" src="${calendar}" alt="calendar" class="calendar"/> Wednesday, June 15, 2022 |
            <img id="event-ico" src="${clock}" alt="clock" class="clock"/>10AM - 12:30PM
            <img id="event-ico" src="${location}" alt="location" class="location"/>London, UK
        </div>
        <h2>Podcast: Tips on how to use Social Media for Charities</h2>
        <p>>Apply Now</p>
    </div>
</div>

    `;
  section2.innerHTML = html;
};

export default upcommingEvents;