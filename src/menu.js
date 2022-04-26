import pic1 from './images/burger1.jpg'
import pic2 from './images/burger2.jpg'
import pic3 from './images/burger3.jpg'
import pic4 from './images/burger4.jpg'
import pic5 from './images/burger5.jpg'
import pic6 from './images/burger6.jpg'

function menu() {

    const contentDiv = document.querySelector('#content');
    const tabTitle = document.createElement('div');
    tabTitle.classList.add('tabTitle');
    tabTitle.innerHTML = 'Menu';
    contentDiv.appendChild(tabTitle);


    class burger{
        constructor(name, meat, cheese, toppings, bun, image){
            this.name = name
            this.meat = meat
            this.cheese = cheese
            this.toppings = toppings
            this.bun = bun
            this.image = image
        }
    };

    const burger1 = new burger('Basic Burger', 'All beef', 'American', 'bacon, tomato, red onion, fried onions', 'basic grilled', pic1)
    const burger2 = new burger('Classic double', 'dual all beef', 'American', 'Lettuce, pickels, tomato','classic sesame', pic2)
    const burger3 = new burger('Hangover classic', 'Sausage burger', 'Swiss', 'Pepper and a mound full of fried onions', 'Classic plain', pic3)
    const burger4 = new burger('Breakfast classic', 'All beef', 'N/A', 'Egg, spinach, tomato', 'sesame wheat', pic4)
    const burger5 = new burger('Bulking breakfast', '1lb all beef', 'N/A', 'Egg, onions, pickels, sriracha', 'Honey wheat', pic5)
    const burger6 = new burger('Pretentious basic', 'All beef', 'American', 'Anything you want', 'fancy bun', pic6)

    //const burgerX = new burger('', '', '', '', '', '')

    let myMenu = [];
    myMenu.push(burger1, burger2, burger3, burger4, burger5, burger6);
    console.log(myMenu)
    console.log(myMenu.length)

    function createMenu() {
        for (let i = 0; i < myMenu.length; i++){
            const containerBurger = document.createElement('div');
            containerBurger.classList.add('burgerContainer')
            contentDiv.appendChild(containerBurger);

            const displayImage = new Image();
            displayImage.src = myMenu[i].image;
            displayImage.classList.add('burgerImage');
            containerBurger.appendChild(displayImage);

            const burgerName = document.createElement('div');
            burgerName.innerHTML = myMenu[i].name;
            burgerName.classList.add('burgerName');
            containerBurger.appendChild(burgerName);

            const burgerMeat = document.createElement('div');
            burgerMeat.innerHTML ='Meat: ' + myMenu[i].meat;
            burgerMeat.classList.add('burgerstat');
            containerBurger.appendChild(burgerMeat);

            const burgerCheese = document.createElement('div');
            burgerCheese.innerHTML ='Cheese: ' + myMenu[i].cheese;
            burgerCheese.classList.add('burgerstat');
            containerBurger.appendChild(burgerCheese);

            const burgerToppings = document.createElement('div');
            burgerToppings.innerHTML ='Toppings: ' + myMenu[i].toppings;
            burgerToppings.classList.add('burgerstat');
            containerBurger.appendChild(burgerToppings);

            const burgerBun = document.createElement('div');
            burgerBun.innerHTML ='Bun: ' + myMenu[i].bun;
            burgerBun.classList.add('burgerstat');
            containerBurger.appendChild(burgerBun);
        };
    };
    createMenu();
};

export default menu