function loadNav (){

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

};

export { loadNav };