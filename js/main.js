/** copyright Renita Mendonca 2018 **/


$('a').click(function(e) {
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});



$(".menu .item").hide();
$(".c-hamburger").click(function(){
	$(this).toggleClass('is-active');
	  $( ".menu .item" ).slideToggle('1000');
  });

