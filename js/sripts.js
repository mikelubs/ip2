$(document).ready(function() {
       $(".clickable1").click(function() {
         $(".menu1").toggle();
         $(".menu2").toggle();
         $(".topp").fadeIn();
         $(".largest").slideUp();
       });

       $(".clickable2").click(function() {
         $(".menu2").toggle();
         $(".menu1").toggle();
         $(".topp").slideUp();
         $(".largest").slideDown();
       });

     });
