console.log('Initiation complete. Hello')

var $start = $('<button>').addClass('start').html('Start');
var $roll = $('<button>').addClass('roll').html('Roll Dice');
var $turn = 0;
var random = function(){
	return 1 + Math.floor(Math.random() * 6);
}




$( window ).load(function() {
	$('.token').addClass('hide');
	$(".board").removeClass('hide');
	$('h1').append($start);
	$($start).click(function(){
		$('.token').removeClass('hide');
		$start.removeClass('start').addClass('reset').html('Reset');
		$('h1').append($roll);
		$rollDice();

		$resetButton();
	});
});

var $rollDice = function(){
	$($roll).click(function(){
		var $die1 = random();
		var $die2 = random();
		console.log($die1, $die2);
		$showDice();
	});

	$tokenMove();
}

var $showDice = function(){
	
}

var $tokenMove = function(){
	// http://javascript.info/tutorial/mouse-events
	$('.token').mousedown(function() {
		$(this).css('position','absolute')
		var $self = $(this);
		console.log($self);
   		$self.draggable(); //this is a jQueryUI function! :)
		// $(document).mousemove(function(event){
		// 	var X = event.pageX;
		// 	var Y = event.pageY;
		// 	self.style.left = event.pageX-25+'px';
  //   		self.style.top = event.pageY-25+'px';

		// });
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