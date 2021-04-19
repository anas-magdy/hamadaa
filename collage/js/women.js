$(document).ready(function(){
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
    $('#btn1').click(function(){
        $('#figcaption1').slideToggle(1000);
    })
    $('#btn2').click(function(){
        $('#figcaption2').slideToggle(1000);
    })
    $('#btn3').click(function(){
        $('#figcaption3').slideToggle(1000);
    })
    $('#btn4').click(function(){
        $('#figcaption4').slideToggle(1000);
    })
    $('#btn5').click(function(){
        $('#figcaption5').slideToggle(1000);
    })
    $('#btn6').click(function(){
        $('#figcaption6').slideToggle(1000);
    })
    $('#btn7').click(function(){
        $('#figcaption7').slideToggle(1000);
    })
    $('#btn8').click(function(){
        $('#figcaption8').slideToggle(1000);
    })
	$(".imgg").click(function(){
	  var x=prompt("what is your opinion");

		
	})

});

/* the review js*/
  //initial setup
  document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating); 
    });
    
    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){
        if(match){
            star.classList.remove('rated');
        }else{
            star.classList.add('rated');
        }
        //are we currently looking at the span that was clicked
        if(star === span){
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}