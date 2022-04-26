import alienguy from './images/aliensguy.jpg'

function contact() {
    const contentDiv = document.querySelector('#content');
    const tabTitle = document.createElement('div');
    tabTitle.classList.add('tabTitle');
    tabTitle.innerHTML = 'Contact';
    contentDiv.appendChild(tabTitle);

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = '123 Lakeside Blvd in the Waterfront district <br> Phone: (216)-999-0000 <br> Email: ligmabigburger@gorskygourmet.com';
    contentDiv.appendChild(info);

    const alienguyimg = new Image();
    alienguyimg.src = alienguy;
    alienguyimg.classList.add('extraImg');
    contentDiv.appendChild(alienguyimg);
}

export default contact