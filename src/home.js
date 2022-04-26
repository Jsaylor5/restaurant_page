import mainPic from './images/mainBurger.jpg'

function homePage() {
    const contentDiv = document.querySelector('#content')

    const myMainPic = new Image();
    myMainPic.src = mainPic;
    myMainPic.classList.add('extraImg')
    contentDiv.appendChild(myMainPic)

};

export default homePage
