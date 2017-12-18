jQuery( document ).ready( function( $ ) {
	$( document ).foundation();

	jQuery( function( $ ) {
		$('.js-slider').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: false
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: true
			      }
			    }
		    ]
		});
	});
	$.ajax({
	    // The URL for the request
	    url: "offers.json",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        "dealers": "data"
	    },
	 
	    // Whether this is a POST or GET request
	    type: "GET",
	 
	    // The type of data we expect back
	    dataType : "json",
	})
		// Code to run if the request succeeds (is done);
		// The response is passed to the function
		.done(function( json ) {
			var object = json.offers[0];

			// for loop to go through the plans in the json file and fill in dynamic data
	    	for (var i = 0; i < json.offers[0].plans.length; i++) {
	    		// get price div
	    	    var description = object.plans[i]['description'];
	    	    var price = object.plans[i]['price'];
	    	    var legal = object.plans[i]['legal'];

	    	    $("#slide-"+ i).find('.slide__price-title').html( description );
	    		$("#slide-"+ i).find('.slide__price-amount').html( price );
	    		$("#slide-"+ i).find('.slide__price-plan').html( legal );


	    	    // get internet div
	    	    var title = object.plans[i]['internet']['label'];
	    	    var devices = object.plans[i]['internet']['sublabel'];
	    	    var download = object.plans[i]['internet']['detail'];

	    	    $("#slide-"+ i).find('.slide__internet-title').html( title );
	    		$("#slide-"+ i).find('.slide__internet-devices').html( devices );
	    		$("#slide-"+ i).find('.slide__internet-download').html( download );


	    		// get tv div
	    	    var title = object.plans[i]['tv']['label'];
	    	    var sublabel = object.plans[i]['tv']['sublabel'];
	    	    var detail = object.plans[i]['tv']['detail'];
	    	    var devices = object.plans[i]['tv']['premiumChannels'];

	    	    $("#slide-"+ i).find('.slide__tv-title').html( title );
	    	    $("#slide-"+ i).find('.slide__tv-pick').html( sublabel );
	    		$("#slide-"+ i).find('.slide__tv-multi').html( detail );
	    		
	    		// if statement to determine if premium message should show
	    		if (devices == true) {
	    			$("#slide-"+ i).find('.slide__tv-view').html( "Premium movie channels included:" );
	    		} 


	    		// get home div
	    	    var title = object.plans[i]['phone']['label'];
	    	    var sublabel = object.plans[i]['phone']['sublabel'];

	    	    $("#slide-"+ i).find('.slide__home-title').html( title );
	    	    $("#slide-"+ i).find('.slide__home-text').html( sublabel );
	    	}
  		})

		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		.fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		})
		// Code to run regardless of success or failure;
		.always(function( xhr, status ) {
			alert( "The request is complete!" );
		});
 });


