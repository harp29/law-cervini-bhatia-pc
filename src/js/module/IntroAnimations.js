import SplitText from './SplitText';
import HomeSlider from './HomeSlider';

class IntroAnimations{
    constructor() {


    }

    loadAnimations(){

        let loadingPage   = document.querySelector('.loading'),
            heading1      = document.querySelector('#js-loading-heading-company-name-part-1'),
            heading2      = document.querySelector('#js-loading-heading-company-name-part-2'),
            headingChars1 = new SplitText().implementDomElement(heading1),
            headingChars2 = new SplitText().implementDomElement(heading2),
            subHeading    = document.querySelector('#js-loading-sub-heading'),
            tlLoad        = new TimelineMax({});

        tlLoad
            .add(function(){
                for(let i = 0; i < headingChars1.length; i+=1){
                    TweenLite.set(headingChars1[i], {webkitFilter: 'blur(10px)', x: -10, opacity: 0})
                    TweenLite.set(headingChars2[i], {webkitFilter: 'blur(10px)', x: 10, opacity: 0})
                }
            })
            .set(subHeading, {y: 10, opacity: 0})
            .addLabel('headings-in')
            .staggerTo(headingChars1, 1, {webkitFilter: 'blur(0px)', x: 0, opacity: 1, ease: Power4.easeIn}, 0.1, 'headings-in')
            .staggerTo(headingChars2, 1, {webkitFilter: 'blur(0px)', x: 0, opacity: 1, ease: Power4.easeIn}, -0.1, 'headings-in')
            .to(subHeading, 1, {y: 0, opacity: 1, ease: Power4.easeOut}, '-=.5')
            .addLabel('headings-out')
            .staggerTo(headingChars1, .5, {webkitFilter: 'blur(10px)', x: 10, opacity: 0, ease: Power4.easeIn}, 0.1, 'headings-out')
            .staggerTo(headingChars2, .5, {webkitFilter: 'blur(0px)', x: -10, opacity: 0, ease: Power4.easeIn}, -0.1, 'headings-out')
            .to(subHeading, .5, {y: 10, opacity: 0, ease: Power4.easeOut}, '-=.4')
            .call(HomeSlider.showFirstSlide)
            .to(loadingPage, 1, {opacity: 0, autoAlpha: 0, ease: Power4.easeOut});

    }
};

export default IntroAnimations;

