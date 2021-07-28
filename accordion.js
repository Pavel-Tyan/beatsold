//desktop
$(document).ready( function (e){
    $('.accordion__button').on('click', function(e){
        
        e.preventDefault();

        let currentBtn = $(this);

        let accordionOn = false;

        $('.team-member__work-info').each(function(index, elem){
            if($(elem).hasClass('team-member__work-info-active')){
                accordionOn = true;
                return false;
            }
        });
        if(accordionOn == true){
            // if($('.team-member__work-info-active')==$(currentBtn).closest('.team-member__main-info').next('.team-member__work-info')){
                if($(currentBtn).closest('.team-member__main-info').next('.team-member__work-info').hasClass('team-member__work-info-active')){
                $('.team-member__work-info-active').removeClass('team-member__work-info-active');
            }
            else{
                $('.team-member__work-info-active').removeClass('team-member__work-info-active');
                $(currentBtn).closest('.team-member__main-info').next('.team-member__work-info').addClass('team-member__work-info-active');
            }
        }else{
            $(currentBtn).closest('.team-member__main-info').next('.team-member__work-info').addClass('team-member__work-info-active');
        }
        

        
        });
    });



                    