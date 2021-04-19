$(document).ready(function()
{  
    $(window).on("scroll",function()
    {
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#gotop').fadeIn();
            }
            else{
                $('#gotop').fadeOut();
            }
        });
        $('#gotop').click(function(){
           $('html,body').animate({
               scrollTop : 0,
           },1000) 
        });
    });
    $(".show-more").click(function()
    {
        $(this).fadeOut(500,function(){$(".section-2").slideDown(2000)});
    });
    $("#but").on("click",function()
     { 
        for(var i = 0; i < 30 ; i++)
        {
            var price = document.getElementsByClassName("price"),
                filter = document.getElementById("filter").value,
                by_dolar = filter + "$";
            if ( price[i].textContent > by_dolar)
            {
                console.log(by_dolar);
                console.log(price[i].textContent.toString());
                $(price[i]).parentsUntil(".row").fadeOut(3000);
            }
            else
            {
                $(price[i]).parentsUntil(".row").fadeIn(3000);
            }
        }    
     });
    

});