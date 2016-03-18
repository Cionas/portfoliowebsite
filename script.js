$(document).ready(function(){

	$('#home').click(function(e){

		e.preventDefault();

	var divPos0 = $('#header').position();

	$("html, body").animate({

		scrollTop: divPos0.top}, "slow"

		);
	});


	$('#abo').click(function(e){

		e.preventDefault();

	var divPos1 = $('#about').position();

	$("html, body").animate({

		scrollTop: divPos1.top}, "slow"

		);
	});


	$('#res').click(function(e){

		e.preventDefault();

	var divPos2 = $('#resume').position();

	$("html, body").animate({

		scrollTop: divPos2.top}, "slow"

		);
	});

	$('#pro').click(function(e){

		e.preventDefault();

	var divPos3 = $('#project').position();

	$("html, body").animate({

		scrollTop: divPos3.top}, "slow"

		);
	});

	$(document).scroll(function(){

		var x = $(this).scrollTop();
		if (x > 2400){

			$('.footer').fadeIn();
		}
		else{

			$('.footer').fadeOut();
		}
	})

		$(document).scroll(function(){

		var x = $(this).scrollTop();
		if (x > 800){

			$('#ab1').fadeIn();
		}
		else{

			$('#ab1').fadeOut();
		}
	})

		$(document).scroll(function(){

		var x = $(this).scrollTop();
		if (x > 800){

			$('#ab2').fadeIn();
		}
		else{

			$('#ab2').fadeOut();
		}
	})

			$(document).scroll(function(){

		var x = $(this).scrollTop();
		if (x > 1600){

			$('#exp').fadeIn();
		}
		else{

			$('#exp').fadeOut();
		}
	})


});