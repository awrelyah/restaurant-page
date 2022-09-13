function loadMenu(){

    const content = document.getElementById('content');
    document.body.style.backgroundImage = 'url(/src/img/blur.jpg)';


    //constructor for all DOM elements
    function createElement(type, content, className){
        const el = document.createElement(type);
        if(className !== ''){
            el.classList.add(className);
        };
        el.textContent = content;
        appendElement(el);
    };

    //appending all elements and nesting them correctly
    function appendElement(e){
         if(e.className === 'menu-container'){
            content.append(e);
        } else{
            const menuContainer = document.querySelector('.menu-container');
            menuContainer.append(e)
        }
    //DOM elements
};
    const aboutContainer = createElement('div', '', 'menu-container');
    const title = createElement('div', 'Menu', 'menu-title');
}

export { loadMenu };