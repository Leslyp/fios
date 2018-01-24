jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
	$(".mobile-nav__list-item--menu").on("click", function() {
		$(".dropdown").toggle();
	})

	$(".media li").on("click", function(e) {
		e.preventDefault();
		
		$(this).find("a").addClass("selected-media");


	})
 });


