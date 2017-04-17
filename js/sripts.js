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
         $(".topp").fadeOut();
         $(".largest").fadeIn();
       });

       $('.mc-form-example').submit(function(e){

       //prevent the form from submitting via the browser redirect
       e.preventDefault();

       //grab attributes and values out of the form
       var data = {email: $('#subscribe-email').val()};
       var endpoint = $(this).attr('action');

       //make the ajax request
       $.ajax({
         method: 'POST',
         dataType: "json",
         url: endpoint,
         data: data
       }).then(function(data){
         if(data.id){
           //successful adds will have an id attribute on the object
           alert('thanks you for subscribing');
         } else if (data.title == 'Member Exists') {
           //MC wil send back an error object with "Member Exists" as the title
           alert('We love you, you have already subscribed');
         } else {
           //something went wrong with the API call
           alert('Oh no, there has been a problem');
         }
       }).error(function(){
         //the AJAX function returned a non-200, probably a server problem
         alert('Oh no, there has been a problem');
       });
     });

     });
