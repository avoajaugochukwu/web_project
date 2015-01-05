$(document).ready(function() {	
	
	$('.header-text h1').hide();
	$('.header-text h1').slideDown(1000);

	$('.header-text h1').textillate({
		loop : true,
		in: {
			effect: 'bounceInDown',
			delayScale : 5
		},
		out: {
    	effect: 'bounceOutUp',
   		delayScale : 7
  	}
	});
	/*small anitmation */
	$('.small').textillate({
		loop : true,
		in: {
			effect: 'rotateIn',
			delayScale : 4
		},
		out: {
    	effect: 'rotateOut',
   		delayScale : 7
  	}
	});

});