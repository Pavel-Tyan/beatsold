
$(document).ready( function (e){
    $('.accordion__button').on('click',function(e){
        e.preventDefault();
        currentAcordionBtn = $(this);
        if($('body').css('font-size')!='16px'){
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





                    