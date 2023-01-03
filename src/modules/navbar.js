import humburger from '../images/humberger.png';
import closeBtn from '../images/close.png';

const navRender = () => {
  const header = document.getElementById('header');
  let html = '';
  html += `
        <img src="${humburger}" alt="humberger" class="humberger">
        <img src="${closeBtn}" alt="close" class="close">
        <div id="navItems">
        <h2 id="navbrand">Compassion</h2>
        <nav class="navSect">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        </div>
`;
  header.innerHTML = html;
};
export default navRender;
