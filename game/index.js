console.log('Initiation complete. Hello')

var $start = $('<button>').addClass('start').html('Start');



$( window ).load(function() {
	$('.token').addClass('hide');
	$(".board").removeClass('hide');
	$('h1').append($start);
	$($start).click(function(){
		$('.token').removeClass('hide');
		$start.removeClass('start').addClass('reset').html('Reset');
		$resetButton();
	})
});

var $resetButton = function(){
	$($start).click(function(){
		location.reload();
	});
}