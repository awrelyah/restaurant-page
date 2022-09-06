import '../css/main.scss';
import '../css/about.scss';
import { loadMainPage } from "./mainPage";
import { loadNav } from "./loadNav";
import { loadAbout } from "./about";

loadNav();
loadMainPage();
addBtns();

const content = document.getElementById('content');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function aboutPage () {
    removeAllChildNodes(content);
    loadNav();
    loadAbout();
    addBtns();
};

function mainPage() {
    removeAllChildNodes(content);
    console.log('jehu');
    loadNav();
    loadMainPage();
    addBtns();

};

function addBtns(){
    const aboutBtn = document.querySelector('.about');
    const iconBtn = document.querySelector('.material-symbols-outlined');

    aboutBtn.addEventListener('click', aboutPage);
    iconBtn.addEventListener('click', mainPage);
};








