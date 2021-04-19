$(document).ready(function ()
 {
  $("[lang='ar']").hide();
  
  $("#sitting").on("click", function ()
   {
    $(".options").slideToggle(1000);
   });
  $(".ar").click(function ()
  {
    $(this).fadeOut(1000,function()
    {
      $(".english").fadeIn(1000);
    });
    $("[lang='ar']").fadeIn();
    $("[lang='en']").fadeOut();
  });
  $(".english").click(function ()
  {
    $(this).fadeOut(1000,function()
    {
      $(".ar").fadeIn(1000);
    });
    $("[lang='en']").fadeIn();
    $("[lang='ar']").fadeOut();
  });
  $(".light").on("click", function ()
   {
    $(this).hide(1000, function () 
    {
       $(".dark").fadeIn(1000)
    });
    $("body").css(
      {
        backgroundColor: "white",
        color: 'black'
      });
    $(".navbar").css(
      {
        backgroundColor: 'slategray'
      });
    $(".dark").on("click", function ()
    {
      $(this).hide(1000, function ()
      {
         $(".light").fadeIn(1000)
      });
      $("body").css(
        {
          backgroundColor: "black",
          color: 'white'
        });
      $(".navbar").css(
        {
          backgroundColor: 'inherit'
        });
    });
  });
  $(".image-1").on("mouseenter", function () {
    $(".fade-1").fadeIn(1000)
  });
  $(".image-1").on("mouseleave", function () {
    $(".fade-1").fadeOut(1000)
  });
  $(".image-2").on("mouseenter", function () {
    $(".fade-2").fadeIn(1000)
  });
  $(".image-2").on("mouseleave", function () {
    $(".fade-2").fadeOut(1000)
  });
  $(".image-3").on("mouseenter", function () {
    $(".fade-3").fadeIn(1000)
  });
  $(".image-3").on("mouseleave", function () {
    $(".fade-3").fadeOut(1000)
  });
  $(".image-4").on("mouseenter", function () {
    $(".fade-4").fadeIn(1000)
  });
  $(".image-4").on("mouseleave", function () {
    $(".fade-4").fadeOut(1000)
  });
});
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

