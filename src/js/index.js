import '../css/main.scss';
import '../css/about.scss';
import { loadMainPage } from "./mainPage";
import { loadNav } from "./loadNav";
import { loadAbout } from "./about";

loadNav();
loadMainPage();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function aboutPage () {
    const content = document.getElementById('content');
    removeAllChildNodes(content);
    console.log('wow');
    loadNav();
    loadAbout();
};

const aboutBtn = document.querySelector('.about');
aboutBtn.addEventListener('click', aboutPage);








