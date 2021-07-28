const fullscreenMenu = document.querySelector('.fullscreen-menu');
const fullscreenMenuOpenBtn = document.querySelector('#burger-btn');

fullscreenMenuOpenBtn.addEventListener('click', e => {
    fullscreenMenu.style.display = 'flex';
})

const fullscreenMenuCloseBtn = document.querySelector('#closeMenu');

fullscreenMenuCloseBtn.addEventListener('click', e => {
    fullscreenMenu.style.display = 'none';
})







