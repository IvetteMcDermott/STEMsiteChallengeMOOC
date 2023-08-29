
Form functionality 

https://github.com/dcode-youtube/login-signup-form/tree/master

https://www.youtube.com/watch?v=u54hapBzPys

https://www.sciencebuddies.org/


<a target="_blank" href="https://icons8.com/icon/wqGmdISvpm0c/github">github</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


# POKE-BATTLE PYTHON API GAME 

## CONCEPT

Game developed in Python, play in terminal, with API integration.

User will be presented with welcome screen and requested to enter their name, it will be use for interaction in the text of the game.
There will be windows displaying images for welcome and for start the battle, these are Pygame generated with src images. Once they are closed the game will continue.

Game will generate and display three pokemons for each player, user and computer. User experience stat, the one that is use for compare in battle, will be shown but not the computers ones.
For the rounds the user will pick what pokemon wants to use, Pygame will be use again to display the image of it, and next will display the computer selection. Result of the round will be given in text.
After the three rounds, game will give the final result for the battle in text and with a Pygame image.
Finally game will give a text so user can decide if play again or leave.


## PLAN FOR POKEMON API GAME 

| Must Have  	                      | Should Have   	                              | Could Have   	                                                   | Won't Have                                                     |
|:---------------------------------------------------------|:---------------------------------------------|:-----------------------------------------------------------------|:---------------------------------------------------------------|
| Random number generation      	  | PyGame src for stages of the game  	         | User picks the pokemon for the round 	                           | User selects from 3 to 9 how many rounds the battle will have	 |
| API Pokemon integration            | Use of different stat	                  | Pygame url for each pokemon that is selecter by each user	       | 	                                                              |
| Pokemon's data dictionary          | Multiple rounds	     	                       | Pygame text that feedback what/why pokemon is being display 	    | 	                                                              |
| Assign pokemons to players         | Pokemons shouldnt be use more than one time  | 	                                                                | 	                                                              |
| Compare values of player's pokemons| Restart Game	 | 	                                                                | 	                                                              |
| Validation of input                | 	                                |  	 | 	                                                              |

## TESTED MANUALLY

1. Welcome stage:
<br>

|Action|Expected|Result|
|:------|:----|:------|
|Welcome|Pygame window and print| ✅ |
|Input for user name|Input, save and read| ✅  |
|Battle On|Pygame window | ✅ |

2. Battle stage - Cards set: 
<br>

|Action|Expected|Result|
|:------|:----|:------|
|Players card's set|Print cards of each player. Show stats of user only| ✅ |

3. Battle stage - Rounds:
<br>

|Action|Expected|Result|
|:------|:----|:------|
|Shows user options|Prints the options user can select| ✅ |
|User selects|Input for user selects, validates that is a valid number only| ✅ |
|Round images|Pygame display user's selection image and computer's one| ✅ |
|Round result|Print that give feedback on the comparison and result| ✅ |

4. Battle stage - final result:
<br>

|Action|Expected|Result|
|:------|:----|:------|
|Battle result|Prints who won| ✅ |
|Battle result image|Pygame with the image according to the user's result| ✅ |

5. Restart stage:
<br>

|Action|Expected|Result|
|:------|:----|:------|
|Restart the game|Input that initialize it if user select yes or end it if user said no. Validates the input to yes or no, controls on caps  | ✅ |


## FUTURE FEATURES TO IMPLEMENT

A control so that there is no possibility that a user gets a duplicated card.
Look deeper in the stats and implement some more, as there is no attack/defense ones declared.
