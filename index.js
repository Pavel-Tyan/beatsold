const fullscreenMenu = document.querySelector('.fullscreen-menu');
const fullscreenMenuOpenBtn = document.querySelector('#burger-btn');

fullscreenMenuOpenBtn.addEventListener('click', e => {
    fullscreenMenu.style.display = 'flex';
})

const fullscreenMenuCloseBtn = document.querySelector('#closeMenu');

fullscreenMenuCloseBtn.addEventListener('click', e => {
    fullscreenMenu.style.display = 'none';
})



const dropDownListBtn = document.querySelector('.products__characteristics');
const dropDownList = document.querySelector('.dropdown-list')

dropDownListBtn.addEventListener('mouseenter', e => {
        dropDownListBtn.style.backgroundColor = "#E01F3D";
        dropDownList.style.display = 'flex';
})

dropDownList.addEventListener('mouseleave', e => {
        if(e.target == dropDownList){
            dropDownListBtn.style.backgroundColor = "#9A9A9A";
            dropDownList.style.display = 'none';
        }
})





