
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >50){
            $('#gotop').fadeIn();
        }
        else{
            $('#gotop').fadeOut();
        }
    });
    $('#gotop').click(function(){
       $('html,body').animate({
           scrollTop : 5,
       },500) 
    });
});
