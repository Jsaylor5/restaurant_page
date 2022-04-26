import fatguy from './images/fatguy.jpeg'

function about() {
    const contentDiv = document.querySelector('#content');
    const tabTitle = document.createElement('div');
    tabTitle.classList.add('tabTitle');
    tabTitle.innerHTML = 'About';
    contentDiv.appendChild(tabTitle);

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = 'The manifesto of any hipster gourmet burger shop<br> is to waste words acting like a burger joint is a life<br> changing experiance. You keep coming for the burger. <br><br> Memento Mori';
    contentDiv.appendChild(info);

    const fatguyimg = new Image();
    fatguyimg.src = fatguy;
    fatguyimg.classList.add('extraImg')
    contentDiv.appendChild(fatguyimg)
}

export default about