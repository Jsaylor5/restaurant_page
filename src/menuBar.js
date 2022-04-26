
function menuBar() {
    let content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    const contentDiv = document.querySelector('#content');
    const fullMenuBar = document.createElement('div');
    fullMenuBar.classList.add('fullMenuBar');
    contentDiv.appendChild(fullMenuBar);

    const title = document.createElement('div');
    title.innerHTML = 'Gorsky\'s Gourmet Burgers';
    title.classList.add('title');
    contentDiv.appendChild(title);

    const home = document.createElement('button');
    home.innerHTML = 'Home';
    home.id = 'home';
    home.classList.add('menu');
    fullMenuBar.appendChild(home);

    const menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.id = 'menu';
    menu.classList.add('menu');
    fullMenuBar.appendChild(menu);

    const about = document.createElement('button');
    about.innerHTML = 'About Us';
    about.id = 'about';
    about.classList.add('menu');
    fullMenuBar.appendChild(about);

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact';
    contact.id = 'contact';
    contact.classList.add('menu');
    fullMenuBar.appendChild(contact);
};

export default menuBar
