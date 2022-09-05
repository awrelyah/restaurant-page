function loadMainPage (){

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
        if (e.className === 'main'){
            content.append(e);
        } else if (e.className === 'title' || e.className === 'subtitle' || e.className === 'buttons'){
            const mainDiv = document.querySelector('.main');
            mainDiv.append(e);
        } else {
            const buttonsDiv = document.querySelector('.buttons');
            buttonsDiv.append(e);
        };
    };

    //DOM elements
    const main = createElement('div', '', 'main');
    const title = createElement('div', 'Restaurant La Luna', 'title');
    const subtitle = createElement('div', 'Enjoy divine dining with us - you deserve it.', 'subtitle');
    const buttons = createElement('div', '', 'buttons');

    const menuBtn = createElement('button', 'Menu', 'menu-button');
    const reserveBtn = createElement('button', 'Reserve', 'reserve-button');



};

export { loadMainPage };