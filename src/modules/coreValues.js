import pointer from '../images/pointer.png';
import lense from '../images/lense.png';
import bulb from '../images/bulb.png';

const coreValues = () => {
  const section = document.querySelector('section1');
  let html = '';
  html += `
<div class="core-values">
    <div class="Our-mission">
        <img src="${pointer}" alt="pointer" class="pointer"/>
        <h2>Our Mission</h2>
        <p>Our mission is to provide the best medical care to the people of the world.</p>
    </div>
    <div class="Our-focus">
        <img src="${lense}" alt="pointer" class="pointer"/>
        <h2>Our Focus</h2>
        <p>We advocate universal health, education, and financial security; for people in every neighbourhood.</p>
    </div>
    <div class="Our-work">
        <img src="${bulb}" alt="pointer" class="pointer"/>
        <h2>Our Work</h2>
        <p>By finding fresh solutions to many old problems, we bring about meaningful and lasting change.</p>
    </div>
</div>
`;
  section.innerHTML = html;
};

export default coreValues;