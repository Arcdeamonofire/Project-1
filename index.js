console.log('Initiation complete. Hello')

var $start = $('<button>').addClass('start').html('Start');
var $roll = $('<button>').addClass('roll').html('Roll Dice');
var $turn = 0;
var random = function(){
	return 1 + Math.floor(Math.random() * 6);
}
var $dice = [];
var $dieBox1=('<div class="dice"></div>');
var $dieBox2=('<div class="dice"></div>');
var $diceBox=('<div class="dice-box">'+$dieBox1+$dieBox2+'</div>');
var $gameBoard = $('.play');
// $gameBoard.each(function(i){
// 	$gameBoard.eq(i).data('value': i);
// });



$( window ).load(function() {
	$('.token').addClass('hide');
	$(".board").removeClass('hide');
	$('h1').append($start);
	$($start).click(function(){
		$('.token').removeClass('hide');
		$start.removeClass('start').addClass('reset').html('Reset');
		$('h1').append($diceBox);
		$('h1').append($roll);
		$rollDice();

		$resetButton();
	});
});

var $rollDice = function(){
	$($roll).click(function(){
		var $die1 = random();
		var $die2 = random();
		$dice = [$die1, $die2];
		// console.log($dice);
		$showDice();
	});
	$tokenClick();
}

var $showDice = function(){ //currently only works for 1 type of dice
	// console.log($dice);
	// console.log($dice.length);
	//dice images: Credit (Kenney or www.kenney.nl)
	for(var i=0; i < $dice.length; i++){
		// console.log(i);
		if($dice[i] === 1){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border1.png)');
		} else if($dice[i] === 2){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border2.png)');
		}else if($dice[i] === 3){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border3.png)');
		}else if($dice[i] === 4){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border4.png)');
		}else if($dice[i] === 5){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border5.png)');
		}else if($dice[i] === 6){
			$('.dice').eq(i).css('background-image', 'url(pics/dieRed_border6.png)');
		}
	};

}

var $tokenClick = function(){
	$($('.token')).click(function(){
		var $self = $(this);
		console.log($self.parent().html());
		// $(this).remove()
	});
	$tokenMove();
}

var $tokenMove = function(){
	// console.log($gameBoard);
	console.log($dice);

	//$gameBoard[0-11]are the top divs from left to right.
	//$gameBoard[12-23]are the bottom from left to right
	//White tokens which are heading to the bottom right are in:
	//$gameBoard[0:5,11:2,16:3,18:5]
	//Black are heading to the top right are in:
	//$gameBoard[4:3,6:5,12:5,23:2]

}

var $resetButton = function(){
	$($start).click(function(){
		location.reload();
	});
}


//This was all an attempt to get draggable tokens. I'm putting it commented out at the bottom
//because I am interested in returning here at some point but for now
//I need to just get moving tokens work and integrate dice values.

	// http://javascript.info/tutorial/mouse-events
	// $('.token').mousedown(function() {
	// 	$(this).css('position','absolute')
	// 	var $self = $(this);
	// 	console.log($self);
 //   		$self.draggable(); //this is a jQueryUI function! :)
		
	//     });
		// $(document).mousemove(function(event){
		// 	var X = event.pageX;
		// 	var Y = event.pageY;
		// 	self.style.left = event.pageX-25+'px';
  //   		self.style.top = event.pageY-25+'px';

		// });

	// 	$(this).mouseup(function() {
 //    		document.onmousemove = null
 //    		$( ".play" ).droppable({
	//       		drop: function(event,ui) {
	//       		console.log(this)
	//         	$(this).append($self);
	//       	}
 //  		});
	// });
	// document.getElementsByClassName('token').ondragstart = function() { return false }