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