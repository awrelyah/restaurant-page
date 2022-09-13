import '../css/main.scss';
import '../css/about.scss';
import '../css/menu.scss';

import { loadMainPage } from "./mainPage";
import { loadNav } from "./loadNav";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";

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
    loadNav();
    loadMainPage();
    addBtns();

};

function menuPage(){
    removeAllChildNodes(content);
    loadNav();
    loadMenu();
    addBtns();
}

function addBtns(){
    const aboutBtn = document.querySelector('.about');
    const iconBtn = document.querySelector('.material-symbols-outlined');
    const menuBtn = document.querySelector('.menu');

    aboutBtn.addEventListener('click', aboutPage);
    iconBtn.addEventListener('click', mainPage);
    menuBtn.addEventListener('click', menuPage);
};








