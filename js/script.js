$('.flexslider').flexslider({
	animation: "slide",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });