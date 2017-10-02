$(document).ready(function(){

	$('.slider').slick({
		infinite: true,
  		speed: 700,
  		fade: true,
  		autoplay: true,
  		cssEase: 'linear'
	});

	$('.comments').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.trainer-logo'
		});
	$('.trainer-logo').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		asNavFor: '.comments',
  		dots: true,
  		focusOnSelect: true
	});

  $("nav").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 102;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  if($(window).width() <= 630) {

        $('.heading').prependTo('header .wrapper-inner');
        $('#logo').prependTo('nav');
    } else {
        $('.heading').appendTo('header .wrapper-inner');
        $('#gal').after($('#logo'));
    }

    $(window).resize(function() {

        if($(window).width() <= 630) {

          $('.heading').prependTo('header .wrapper-inner');
          $('#logo').prependTo('nav');
        } else {
          $('.heading').appendTo('header .wrapper-inner');
          $('#gal').after($('#logo'));
        }
    });

});