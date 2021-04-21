/*  Ignacio Quinteros Fuentes 2020 */

let header_menu = document.getElementById('header__menu');
let header_arrow = document.getElementById('header__arrow');

function menu_pressed(){
    if(header_menu.classList.contains('open')){
        header_menu.classList.remove('open');
        header_menu.classList.add('close');
        header__arrow.classList.remove('arrow-open');
    }
    else{
        header_menu.classList.remove('close');
        header_menu.classList.add('open');
        header__arrow.classList.add('arrow-open');
    }
}