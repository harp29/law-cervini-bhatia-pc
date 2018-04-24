// import $ from 'jquery';
// import gsap from 'greensock';

/*
*
* OBJECTIVE: Retrieve h1 tag from user and break h1 text value into chars
*            and then animate each char onto the screen.
*            *Make it robust/provide options*
*
*            Task:
*            1. retrieve h1 tag/dom element
*            2. place the chars into the h1 via a span tag
*
* */

class SplitText{
    constructor(){

    }

    implementDomElement(domElement){

        // console.log(domElement.textContent);


       let splitDomElement = domElement.textContent.split(''),
           span;
           let spans = [];

       domElement.textContent = '';
        let length =splitDomElement.length;
       for(let i = 0; i < length; i++){
               span = document.createElement('span');
               span.textContent = splitDomElement[i];
               span.style.display ='inline-block';
               span.id = 'span'+(i+1);
               if(splitDomElement[i] === ' '){
                   span.style.paddingRight="2rem";
               }

               domElement.appendChild(span);
               spans.push(span);

       };

       return spans;

    };


};


export default SplitText;