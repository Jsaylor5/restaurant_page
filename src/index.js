
import menuBar from './menuBar';
import './style.css';
import homePage from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
menuBar();
homePage();
buttonPress();


function clearDom() {
    const contentDiv = document.querySelector('#content');
    contentDiv.remove();
};

function buttonPress(){
    const homeButton = document.querySelector('#home')
    homeButton.addEventListener('click', () => {
        clearDom();
        menuBar();
        homePage();
        buttonPress();
    });
    
    const menuButton = document.querySelector('#menu')
    menuButton.addEventListener('click', () => {
        clearDom();
        menuBar();
        menu();
        buttonPress();
    });

    const aboutButton = document.querySelector('#about')
    aboutButton.addEventListener('click', () => {
        clearDom();
        menuBar();
        about();
        buttonPress();
    });
    
    const contactButton = document.querySelector('#contact')
    contactButton.addEventListener('click', () => {
        clearDom();
        menuBar();
        contact();
        buttonPress();
    });
};


