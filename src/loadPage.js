function loadPage (){

    const content = document.getElementById('content');


    //constructor for all DOM elements
    function createElement(type, content, className){
        const el = document.createElement(type);
        el.classList.add(className);
        el.textContent = content;
        appendElement(el);
    };

    //appending all elements and nesting them correctly
    function appendElement(e){
        if(e.className === 'nav'){
            content.append(e);
        } else if (e.className === 'main'){
            content.append(e);
        } else if (e.className === 'title' || e.className === 'subtitle' || e.className === 'buttons'){
            const mainDiv = document.querySelector('.main');
            mainDiv.append(e);
        } else if(e.className === 'menu-button' || e.className === 'reserve-button' ){
            const buttonsDiv = document.querySelector('.buttons');
            buttonsDiv.append(e);
        } else {
            const navbar = document.querySelector('.nav');
            navbar.append(e);
            if(e.className === 'material-symbols-outlined'){
                const logoDiv = document.querySelector('.logo');
                logoDiv.append(e);
            }
        }
    };

    //DOM elements
    const nav = createElement('div', '', 'nav');
    const about = createElement('div', 'About', 'about');
    const reservations = createElement('div', 'Reservations', 'reservations');
    const logo = createElement('div', '', 'logo');
    const logoPic = createElement('span', 'dark_mode', 'material-symbols-outlined');
    const menu = createElement('div', 'Menu', 'menu');
    const restaurants = createElement('div', 'Restaurants', 'resto');

    const main = createElement('div', '', 'main');
    const title = createElement('div', 'Restaurant La Luna', 'title');
    const subtitle = createElement('div', 'Enjoy divine dining with us - you deserve it.', 'subtitle');
    const buttons = createElement('div', '', 'buttons');

    const menuBtn = createElement('button', 'Menu', 'menu-button');
    const reserveBtn = createElement('button', 'Reserve', 'reserve-button');



};

export { loadPage };