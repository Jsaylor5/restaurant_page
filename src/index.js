
import menuBar from './menuBar';
import './style.css';
import homePage from './home';
import menu from './menu'
menuBar();
homePage();

const homeButton = document.querySelector('#home')
homeButton.addEventListener('click', () => {
    clearDom();
    menuBar();
    homePage();
});

const menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', () => {
    clearDom();
    menuBar();
    menu();
});

function clearDom() {
    const contentDiv = document.querySelector('#content');
    //contentDiv.remove();
    contentDiv.innerHTML='';
};




