import helpImg from '../images/help.jpg';

const help = () => {
  const section = document.querySelector('section3');
  let html = '';
  html += `
  <div class="help">
    <h1>Help Someone Today</h1>
    <img src="${helpImg}" alt="helpImg" class="helpImg"/>
    <p> Your kind donation will allow us to continue fighting for everyone's health, education, and financial security in your neighborhood and around the world.</p>
    <button type='submit'>Donate Now<button>
    </div>
  `;
  section.innerHTML = html;
};

export default help;