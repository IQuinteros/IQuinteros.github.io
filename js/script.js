let moreContent = document.getElementById('more-content');
let moreText = document.getElementById('more-text');
let moreIcon = document.getElementById('more-icon');
let moreBtn = document.getElementById('more-btn');
let portfolioContainer = document.getElementById('portfolio-container');

let checkContentIsOpen = () => moreContent.classList.contains('visible');
let checkAndSetContent = () => {
    if(checkContentIsOpen()){
        moreText.textContent = 'Ver menos';
        moreIcon.classList.remove('fa-angle-down');
        moreIcon.classList.add('fa-angle-up');
        moreBtn.classList.add('open');
    }
    else{
        moreText.textContent = 'Ver más';
        moreIcon.classList.remove('fa-angle-up');
        moreIcon.classList.add('fa-angle-down');
        moreBtn.classList.remove('open');
    }
}

function moreClicked(){
    moreContent.classList.toggle('visible');
    checkAndSetContent();
}

function preventTouch(e){
    e.preventDefault()
}

function openURL(url){
    window.open(url, '_blank');
}

document.body.addEventListener('touchmove', preventTouch, {passive: false});

window.scrollTo(0, 0);  // Go to top
if(!document.body.classList.contains('avoid-scroll')){
    document.body.classList.add('avoid-scroll');
}

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

setTimeout(() => {
    if(document.body.classList.contains('avoid-scroll')){
        document.body.classList.remove('avoid-scroll');
    }

    document.body.removeEventListener('touchmove', preventTouch);
}, 3000);