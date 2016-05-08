#Introduction

This is the documentation for [Masteromino](http://jskingboo.github.io/RiotAPIChallengeApril2016/index.html). Unlike the other [documentation](http://jskingboo.github.io/RiotAPIChallengeApril2016/documentation.html), this version is intended to be a more technical explanation compared to the first.

This repository contains the files needed to set up your own Masteromino game and API server. However, note that the server set up in this repository is towards my own server hosted at Heroku.com. Unless you intend to only modify the client code, you'll also need to find your own server computer.

You can use your own computer as a server, but for other people to connect to your computer you'll need to expose a port to connect to. If you wish for others to connect to the server, it is highly recommended that you find a third party hosting site such as Amazon Web Service.

#Game Engine Overview

[Link to code](https://github.com/JsKingBoo/JsKingBoo.github.io/blob/master/RiotAPIChallengeApril2016/gameEngine.js)

This is a brief explanation of the functions in the game engine and how they work.

 - `init`: Helper function to initialize the game
 - `reset`: Helper function to reset the game
 - `createBoard`: Generates a valid board using the `board` variable. Called directly before `buildPolyominos`
 - `buildPolyominos`: Generates hints from a valid board. Called directly after `createBoard`, and calls `clearBoard` directly afterwards
 - `clearBoard`: Helper function that empties the board.
 - `drawBoard`: Draws the board on the screen
 - `drawInfo`: Draws the current brush, the brush selector, and the submit button
 - `drawHints`: Draws the hints button panel on the left side of the screen
 - `drawPolyomino`: Given the hint index n, draws the nth hint on the board
 - `drawOnBoard`: Draws a given array on the board. Used by `drawBoard` and `drawPolyomino`
 - `applyBrush`: Changes the board
 - `changeBrush`: Changes the current brush
 - `checkBoardValue`: Helper function which checks a property of a value on the board
 - `makeGuess`: Checks if the board is a valid board, then checks if every hint is satisfied
 - `findIn`: Checks if a polyomino is found inside another polyomino. Used in `buildPolyominos` and `makeGuess`
 - `randomAmountDistribution`: Helper function for `buildPolyominos`
 - `romanize`: Converts a numeral to Roman numerals. [Code by Steven Levithan](http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter)
 - `getBoardSizeBoard`: Helper function that generates an empty 2D array. Used in `createBoard`, `clearBoard`, and `buildPolyominos`
 - `exportPuzzle`: Export the puzzle
 - `redirect`: Helper function which links to the documentation
 - `toName`: Helper function which converts champion ID into a human-readable name.

Game runs as follows:

 1. Game is initialized by calling:
   - `createBoard`
   - `buildPolyominos` 
   - `clearBoard`
   - `draw` methods
 2. Player edits brush through the brush selector, which calls `changeBrush` with parameters corresponding to the image clicked
 3. Drawing on the board is done through `applyBrush`
 4. Viewing hints is done through the hints buttons, which calls `drawPolyomino` with parameters corresponding to the hint clicked.
 5. The player ends the game by calling `makeGuess`
   - Board is checked to see if all three champions with each mastery is placed on the board
   - Board is checked to see if every hint can be found in the board
   - If both conditions pass, return `true` and the game ends
 6. Offer to reset the game or link to the documentation

#API Requests Overview

[Link to client code](https://github.com/JsKingBoo/JsKingBoo.github.io/blob/master/RiotAPIChallengeApril2016/apiHandler.js)

[Link to server code](https://github.com/JsKingBoo/JsKingBoo.github.io/tree/master/RiotAPIChallengeApril2016/Heroku%20Nodejs%20server)

This is a brief explanation of how API requests are handled

 1. Summoner name and region is taken from the game interface
 2. Data is sent to Heroku server.
   - Data had three parts: region, name, and mastered champ rank
   - Because of this, the Heroku server actually receives three requests from the same user at any one given time. This was to reduce the number of timeouts by adding "break points".
 3. Heroku server converts summoner name to summoner ID
 4. Server takes one of the top mastered champion IDs from summoner, based on the parameter specified in the packet sent
 5. Server converts champion ID to code name
 6. Server sends back code name
 7. Game client converts code name to image URL and saves it for future use
 
#Libraries and Resources Used

 - [Bootstrap 3](http://getbootstrap.com/) - front-end web development

 - [express](https://www.npmjs.com/package/express) - REST framework

 - [Github Pages](https://pages.github.com/) - front-end server hosting

 - [Heroku](https://www.heroku.com/) - back-end server hosting

 - [jQuery](https://jquery.com/) - Javascript library

 - [limiter](https://www.npmjs.com/package/limiter) - Rate limiter for back end

 - [Nodejs](https://nodejs.org/en/) - back-end framework

 - [Steven Levithan](http://blog.stevenlevithan.com/) - code for Romanizing numerals
 
All champion portraits, the VizObscure file, and mastery medals were taken from League of Legends assets