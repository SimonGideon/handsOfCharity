import headerimg from '../images/footer.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedIn from '../images/linkedIn.png';
import google from '../images/google-plus.png';

const footer = () => {
  const footer = document.querySelector('footer');
  const Daite = document.write(`2006 - ${new Date().getFullYear()}`);
  let html = '';
  html += `
    <div class="foot-data">
    <img src="${headerimg}" alt="headerimg" class="headerimg"/>
        <div class="en">
            <img src="${facebook}" alt="headerimg" class="ico"/>
            <img src="${twitter}" alt="headerimg" class="ico"/>
            <img src="${instagram}" alt="headerimg" class="ico"/>
            <img src="${linkedIn}" alt="headerimg" class="ico"/>
            <img src="${google}" alt="headerimg" class="ico"/>

        </div>
    <div>
        <h4>Unsubscribe</h4>
        <p>Our mailing address is:</p>
        <p>123 Nairobi Kenya Kenyatta Avenue</p>
    </div>
    Copyright &copy; 2023
    </div>
    
    `;
  footer.innerHTML = html;
};

export default footer;