import heroImg from '../images/a-new-design.jpg';
import headerimg from '../images/heading.png';

const hero = () => {
  const main = document.querySelector('main');
  let html = '';
  html += `
        <div class="hero">
        <div class="hero-overlay">
            <img src="${heroImg}" class="heroImg" alt="hero image">
        </div>
            <div class="hero-text">
                <img src="${headerimg}" class="headerimg" alt="header image">
                <h2>Giving is Good Medicine</h2>
                <p>Our sucess is measured in terms of lives changed</p>
            </div>
        </div>`;
  main.innerHTML = html;
};

export default hero;