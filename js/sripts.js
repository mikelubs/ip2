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

       $('.subscribe-form').submit(function(e){
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
       	}).done(function(data){
       		if(data.id){
       			//successful adds will have an id attribute on the object
       			alert('thanks for signing up');
       		} else if (data.title == 'Member Exists') {
       			//MC wil send back an error object with "Member Exists" as the title
       			alert('thanks, but you are alredy signed up');
       		} else {
       			//something went wrong with the API call
       			alert('oh no, there has been a problem');
       		}
       	}).fail(function(){
       		//the AJAX function returned a non-200, probably a server problem
       		alert('oh no, there has been a problem');
       	});
       });

     });
