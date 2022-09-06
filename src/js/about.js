function loadAbout (){

    const content = document.getElementById('content');


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
        if(e.className === 'about-info'){
            content.append(e);
        } else if (e.className === 'title' || e.className === 'about-text' || e.className === 'for-order' || e.className === 'contact' || e.className === 'wolt'){
            if (e.className === 'wolt'){
                e.innerHTML = `<a href="#"> <img src="/src/img/wolt.png" alt="wolt" width="80px"> </a>`;
            };
            const aboutInfo = document.querySelector('.about-info');
            aboutInfo.append(e);
        } else if (e.className === 'para'){
            const aboutTextDiv = document.querySelector('.about-text');
            aboutTextDiv.append(e);
        } else if (e.className === 'cont-info') {
            const contactDiv = document.querySelector('.contact');
            contactDiv.append(e);
        };
    }
    //DOM elements
    const aboutContainer = createElement('div', '', 'about-info');
    const title = createElement('div', 'About us', 'title');

    const aboutText = createElement('div', '', 'about-text');
    const p1 = createElement('p', 'Small and cozy family restaurant, founded in 2022.', 'para');
    const p2 = createElement('p', "We have a variety of different foods cateing to your every need. Don't also forget to check out our fantastic drink menu!", 'para');
    const textDiv = createElement('div', 'For ordering place a call or find us on Wolt.', 'for-order');

    const contact = createElement('div', '', 'contact');
    const number = createElement('div', '+372 5555666', 'cont-info');
    const email = createElement('div', 'info@laluna.com', 'cont-info');
    const address = createElement('div', 'Imaginary Street 42, Tallinn', 'cont-info');

    const wolt = createElement('div', '', 'wolt');
};

export { loadAbout };