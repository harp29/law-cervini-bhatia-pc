const scss = require('../scss/style.scss');
import arrowLeft from '../images/arrow.png';
import svgMenu from '../images/menu.svg';
import logo from '../images/logo.png';

// import Menu from './module/Menu';
import IntroAnimations from './module/IntroAnimations';
import HomeSlider from './module/HomeSlider';

//Import js files


//Instaniate
new IntroAnimations()
    .loadAnimations();

new HomeSlider();

// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
//     (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
//     window.location = 'about.html';
// }



// new VerticalLines().createLines();
// new Slider();

//
// new Menu();

