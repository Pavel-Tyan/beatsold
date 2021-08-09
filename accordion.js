const desktopFontSize='16px';
$(document).ready( function (e){
    $('.accordion__button').on('click',function(e){
        e.preventDefault();
        currentAcordionBtn = $(this);
        if($('body').css('font-size')!=desktopFontSize){
            if(currentAcordionBtn.siblings().css('display')=='block') {
                currentAcordionBtn.siblings().slideUp();    
            }
            else {
                $('.accordion__button').siblings().slideUp();
                currentAcordionBtn.siblings().slideDown();   
            }
        }
        else{
            if(currentAcordionBtn.nextAll().css('display')=='block') {
                currentAcordionBtn.nextAll().slideUp();    
            }
            else {
                $('.accordion__button').nextAll().slideUp();
                currentAcordionBtn.nextAll().slideDown();   
            }
        }
    })  
});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);





                    