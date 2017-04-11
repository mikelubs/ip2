$(document).ready(function() {
       $(".clickable1").click(function() {
         $(".menu1").toggle();
         $(".menu2").toggle();
         $("ul").slideDown();
       });

       $(".clickable2").click(function() {
         $(".menu2").toggle();
         $(".menu1").toggle();
         $("ul").slideUp();
       });

     });
