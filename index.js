console.log('Initiation complete. Hello')
//variables so far.....
var $start = $('<button>').addClass('start').html('Start');
var $roll = $('<button>').addClass('roll').html('Roll Dice');
var $turn = 0; // will be used to alternate turns
var random = function(){
	return 1 + Math.floor(Math.random() * 6);
}
var $dice = [];
var $dieBox1=('<div class="dice"></div>');
var $dieBox2=('<div class="dice"></div>');
var $diceBox=('<div class="dice-box">'+$dieBox1+$dieBox2+'</div>');
var $gameBoard;
var $place;
var $self;
var $move;
var $clicks = 0;
var $mouseClick = 0;
var $isDouble;
// $gameBoard.each(function(i){
// 	$gameBoard.eq(i).data('value': i);
// });

$(window).load(function() {
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
	$turn += 1;
	console.log($turn);
	$($roll).click(function(){
		var $die1 = random();
		var $die2 = random();
		if($die1 === $die2){
			$isDouble === true;
			console.log('IS DOUBLES!!!!!');
		} else {
			$isDouble === false;
		}
		$dice = [$die1, $die2];
		// console.log($dice);
		$showDice();
		$click = 0;
	});
	
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

//need to set up special conditions for Dice doubles!!!

	$tokenClick();
}

var $tokenClick = function(){ //activates a token click event
	$($('.token')).click(function(event){
		$click += 1
		console.log($click);
		$self = $(this);
		$place = $self.parent().data('value'); //the current location of the token
		// console.log($self, $place);
	


	// http://stackoverflow.com/questions/1206203/how-to-distinguish-between-left-and-right-mouse-click-with-jquery
		if(event.which === 1 && $mouseClick === 0 || $mouseClick === 2){
			$mouseClick = 1;
			$move = $dice[0];
		} else if(event.which === 2 && $mouseClick === 0 || $mouseClick === 1){
			$mouseClick = 2;
			$move = $dice[1];
		} else {
			console.log('hmm try the other die?')
		}
		console.log($move);
		
		if($click < 3){
			$(this).remove()
			$tokenMove();
		} else {
			
			$rollDice();
			console.log('next player Pls');
		}
		
	});

}

var $tokenMove = function(){ //moves the clicked on token
	$gameBoard = $('.play'); //the array of columns

	//need to set up special rules for the final stretch portion of the
	//board for black(6-11) and white (18-23); If the token is in this section
	//then there will be certain conditions placed on it.
		//It cannot move more than the possible spaces between it and the win
		//box, so a 6 cannot be used on any of the pieces in that position.
	//UNLESS all 15 pieces are within the final stretch portion then if there are
	//no peices that could use the full movement, then the move value can be used to
	//move a piece into the goal... e.g. if the 6-8 spots are empty and a 5 is rolled
	//that 5 can be used to move a piece from the 9 column into the goal.

	//anyway the tokens need to stop @ 11 and @ 23 respectively... :/



	// console.log($gameBoard);
	// console.log($dice, $self, $place);
		if($self.hasClass('black')){
			if($gameBoard.eq($place).hasClass('top')){
				$gameBoard.eq($place + $move).append($self);
			} else {
				$gameBoard.eq($place - $move).append($self);
			}
		} else if ($self.hasClass('white')){
			if($gameBoard.eq($place).hasClass('bottom')){
				$gameBoard.eq($place + $move).append($self);
			} else {
				$gameBoard.eq($place - $move).append($self);
			}
		}
	

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