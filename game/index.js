console.log('Initiation complete. Hello')

var $start = $('<button>').addClass('start').html('Start');



$( window ).load(function() {
	$('.token').addClass('hide');
	$(".board").removeClass('hide');
	$('h1').append($start);
	$($start).click(function(){
		$('.token').removeClass('hide');
		$start.removeClass('start').addClass('reset').html('Reset');
		$tokenMove();
		$resetButton();
	})
});

var $tokenMove = function(){
	// http://javascript.info/tutorial/mouse-events
	$('.token').mousedown(function() {
		$(this).css('position','absolute')
		var self = $(this);
		console.log(self);

		$(document).mousemove(function(event){
			var X = event.pageX;
			var Y = event.pageY;
			self.style.left = event.pageX-25+'px';
    		self.style.top = event.pageY-25+'px';

		});
	// 	$(this).mouseup(function() {
 //    		document.onmousemove = null
 //  		});
	});
	// document.getElementsByClassName('token').ondragstart = function() { return false }

}

var $resetButton = function(){
	$($start).click(function(){
		location.reload();
	});
}