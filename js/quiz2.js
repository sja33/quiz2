(function(){
  $('.links li a').click(function(e){
    e.preventDefault();
		alert('you clicked a link, good for you');
	});
	console.log("this is a message for you!!!");
})(jQuery);

// write jQuery or vanilla javascript to do the following:
/*------------------------------------------------------*/

//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
$('ol li').each(function(){
  $(this).text("This is new text!");
  $(this).css("background", "lightblue");
 });

//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
var accord = document.getElementsByClassName("accord");
var i;
for (i = 0; i < accord.length; i++) {
    accord[i].onclick = function(){
        //this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
function fadeAway() {
  $('body').children().fadeOut("slow");
  $('body').html("<h1>Goodbye Matt!</h1>");
}


//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)
function surprise() {
  $('body').html("<h1>You found it</h1>");
  var number = prompt('Pick a number(not too big): ', '10');
  var i;
  for (i = 0; i < number; i++) {
    $('body').append('<img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/052/003/2f93f4a.jpg"/>');
  }
}
