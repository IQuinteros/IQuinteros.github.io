const queryString = window.location.hash;
console.log(queryString);
let nav_back = document.getElementById("mobile-nav-back");
let mobile_nav = document.getElementById("mobile-nav");
let mobile_nav_main = document.getElementById("mobile-nav__main");
let mobile_nav_services = document.getElementById("mobile-nav__services");
let body = document.body;


function onHamburgerClicked(){
    nav_back.style.display = "block";
    mobile_nav.classList.add("nav-open");
    body.classList.add("nav-open");
}

function onMobileBackClicked(){
    nav_back.style.display = "none";
    mobile_nav.classList.remove("nav-open");
    body.classList.remove("nav-open");
}

function toMainNavMenu(){
    mobile_nav_main.style.display = "block";
    mobile_nav_services.style.display = "none";
}

function toNavServices(){
    mobile_nav_main.style.display = "none";
    mobile_nav_services.style.display = "block";
}

let shortcuts_content = document.getElementById("shortcuts-content");
let shortcuts = document.getElementById("shortcuts");
function onShortcutsOpen(){
    if(shortcuts_content.classList.contains("content-open")){
        shortcuts_content.classList.remove("content-open");
        shortcuts.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        shortcuts_content.classList.add("content-open");
        shortcuts.children[0].children[1].src = "images/up_button.svg";
    }
}

let help_content = document.getElementById("help-content");
let help = document.getElementById("help");
function onHelpClicked(){
    if(help_content.classList.contains("content-open")){
        help_content.classList.remove("content-open");
        help.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        help_content.classList.add("content-open");
        help.children[0].children[1].src = "images/up_button.svg";
    }
}

let dates_content = document.getElementById("dates-content");
let dates = document.getElementById("dates");
function onDatesClicked(){
    if(dates_content.classList.contains("content-open")){
        dates_content.classList.remove("content-open");
        dates.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        dates_content.classList.add("content-open");
        dates.children[0].children[1].src = "images/up_button.svg";
    }
}

let normative_content = document.getElementById("normative-content");
let normative = document.getElementById("normative");
function onNormativeClicked(){
    if(normative_content.classList.contains("content-open")){
        normative_content.classList.remove("content-open");
        normative.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        normative_content.classList.add("content-open");
        normative.children[0].children[1].src = "images/up_button.svg";
    }
}

let social_content = document.getElementById("social-content");
let social = document.getElementById("social");
function onSocialClicked(){
    if(social_content.classList.contains("content-open")){
        social_content.classList.remove("content-open");
        social.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        social_content.classList.add("content-open");
        social.children[0].children[1].src = "images/up_button.svg";
    }
}

let interest_content = document.getElementById("interest-content");
let interest = document.getElementById("interest");
function onInterestClicked(){
    if(interest_content.classList.contains("content-open")){
        interest_content.classList.remove("content-open");
        interest.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        interest_content.classList.add("content-open");
        interest.children[0].children[1].src = "images/up_button.svg";
    }
}

let about_content = document.getElementById("about-content");
let about = document.getElementById("about");
function onAboutClicked(){
    if(about_content.classList.contains("content-open")){
        about_content.classList.remove("content-open");
        about.children[0].children[1].src = "images/down_button.svg";
    }
    else{
        about_content.classList.add("content-open");
        about.children[0].children[1].src = "images/up_button.svg";
    }
}

let cover_0 = document.getElementById("cover-0");
let cover_1 = document.getElementById("cover-1");
let cover_2 = document.getElementById("cover-2");
let cover_3 = document.getElementById("cover-3");

let cover_items = document.getElementsByClassName("cover-item");

let currentCoverIndex = 0;
function selectCover(index){
    if(index == 0){
        cover_0.classList.add("selected");
        cover_1.classList.remove("selected");
        cover_2.classList.remove("selected");
        cover_3.classList.remove("selected");

        cover_items.item(0).classList.add("selected");
        cover_items.item(1).classList.remove("selected");
        cover_items.item(2).classList.remove("selected");
        cover_items.item(3).classList.remove("selected");
        currentCoverIndex = 0;
    }
    else if(index == 1){
        cover_0.classList.remove("selected");
        cover_1.classList.add("selected");
        cover_2.classList.remove("selected");
        cover_3.classList.remove("selected");

        cover_items.item(0).classList.remove("selected");
        cover_items.item(1).classList.add("selected");
        cover_items.item(2).classList.remove("selected");
        cover_items.item(3).classList.remove("selected");
        currentCoverIndex = 1;
    }
    else if(index == 2){
        cover_0.classList.remove("selected");
        cover_1.classList.remove("selected");
        cover_2.classList.add("selected");
        cover_3.classList.remove("selected");

        cover_items.item(0).classList.remove("selected");
        cover_items.item(1).classList.remove("selected");
        cover_items.item(2).classList.add("selected");
        cover_items.item(3).classList.remove("selected");
        currentCoverIndex = 2;
    }
    else if(index == 3){
        cover_0.classList.remove("selected");
        cover_1.classList.remove("selected");
        cover_2.classList.remove("selected");
        cover_3.classList.add("selected");

        cover_items.item(0).classList.remove("selected");
        cover_items.item(1).classList.remove("selected");
        cover_items.item(2).classList.remove("selected");
        cover_items.item(3).classList.add("selected");
        currentCoverIndex = 3;
    }
}

// Auto cover
let autoCover = () => {
    setTimeout(() => {
        if(currentCoverIndex + 1 == 4){
            currentCoverIndex = -1;
        }
        selectCover(currentCoverIndex + 1);
        autoCover();
    }, 4000);
}

let profile_content = document.getElementById("profile__content");
function openProfile(){
    if(profile_content.classList.contains("selected")){
        profile_content.classList.remove("selected");
    }
    else{
        profile_content.classList.add("selected");
    }
}

/** Main */
autoCover();

swal("Página no oficial", "Ésta página no es oficial. No es Servicio de Impuestos Internos. Es sólo una muestra de diseño", "info");