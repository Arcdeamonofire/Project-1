# Project-1
Project 1 of WDI-Remote: Backgammon in Browser Game

##Languages used: 
HTML, CSS, Vanilla Javascript, jQuery

##Synopsis

First pass at creation of a backgammon like board game within a browser window. Using HTML/CSS the goal was to create a game board and the tokens then using Javascript and jQuery the idea was to manipulate the DOM in order to play the game. The game was to be two player and invovle alternating turns, dynamic dice, win conditions for both players, and the ability to move the pieces around the board with the dice values.

Each piece has been created and is usable, unfortunatley the game is incredibly buggy, but what else is to be expected of a first pass. Much will have to be fixed, recoded, or just cleaned up to debug this little game. In the future I'd like to add other Backgammon characteristics like bumping (knocking a piece off the board if it is the only one in its column), blocking keeping a player from moving into a column if there are two opposing pieces, dice double rewards, as well as win condition add ons like doubling, and match points. For now it sits as an experiment in learning that for a game like this approaching it from the Javascript first might have been a better idea. You can try playing the game if you want. Enjoy!

## Potential MVP
2 users, win condition(display winner), render board, detect peices, dice

**Strech Goals:** keeping score, double, animation

##Wireframe
May need to turn this into an image at some point. Until then here is a like to the PDF: https://github.com/Arcdeamonofire/project-1/blob/master/Planning/P1-Wireframe1.pdf

Current game board
![alt text](https://github.com/Arcdeamonofire/project-1/blob/master/Planning/board.png)

Image of a completed Gammon board:
![alt text](https://github.com/Arcdeamonofire/project-1/blob/master/Planning/BG%20example%20site%20for%20visual%20reference.png)

##Technologies Used (API Reference?)
jQuery: http://api.jquery.com/
jQueryUI: https://code.jquery.com/ui/

##Approach

Designed the HTML/CSS board first then Javascripted/jQueried the logic.
Next time I think I'll start with the script and make the game logically then work on getting it into the DOM. Might have been easier with arrays and objects rather than trying to get the DOM elements to manipulate correctly

##Live Site Link

https://arcdeamonofire.github.io/project-1/

##Installation Instructions

None :)

##Unsolved Problems

Oh plenty of bugs, 

right now 3 clicks are required to change turns even though two moves are taken.

on the win condition for white sometimes it can get extra moves I think this is connected to the above issue and the click counter reader.

still don't have blocks or bumps. Might be easy to add, but for now the mvp is reached so the stretch goals will be put off.