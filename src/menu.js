import './style.css';

function menu() {
    const contentDiv = document.querySelector('#content');
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.innerHTML = 'Menu';
    contentDiv.appendChild(menuTitle);
    console.log('works23')
}

export default menu
