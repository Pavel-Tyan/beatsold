const fullscreenMenu = document.querySelector('.fullscreen-menu');
const fullscreenMenuOpenBtn = document.querySelector('#burger-btn');

fullscreenMenuOpenBtn.addEventListener('click', e => {
    e.preventDefault();
    fullscreenMenu.style.display = 'flex';
    $('html').css('overflow-y','hidden');
})

const fullscreenMenuCloseBtn = document.querySelector('#closeMenu');

fullscreenMenuCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    fullscreenMenu.style.display = 'none';
    $('html').css('overflow-y','visible');
})








