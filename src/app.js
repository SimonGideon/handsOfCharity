import components from './components.js';
// styles
import './styles/styles.css';
// Navbar
import navRender from './modules/navbar.js';
import hero from './modules/hero.js';

hero();
navRender();
document.body.appendChild(components());
