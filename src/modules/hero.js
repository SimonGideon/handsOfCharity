import heroImg from '../images/a-new-design.jpg';

const hero = () => {
  const main = document.querySelector('main');
  let html = '';
  html += `
        <div class="hero">
        <div class="hero-overlay">
            <img src="${heroImg}" class="heroImg" alt="hero image">
        </div>
            <div class="hero-text">
                <h1>CareClub</h1>
                <h2>Giving is Good Medicine</h2>
                <p>Our sucess is measured in terms of lives changed</p>
            </div>
        </div>`;
  main.innerHTML = html;
};

export default hero;