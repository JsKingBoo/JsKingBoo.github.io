//Output variables 
var boardHtml = '';
var infoHtml = '';
var cbHtml = '';
var hintsHtml = '';

//Gameplay handlers
var boardSize = 3; //limit = 5
var board = [];
var champs = [];
var polyominos = [];
var limitPolyomino = 4;
var curDifficulty = 0;
var currentBrush = [-1, -1];
var win = false;

//Formatting things
var windowWidth = window.innerWidth;
var imageWidth = windowWidth/7;
var masteryOpacity = 0.7;

/*
The following notation will indicate the monomino that should fill a selected slot:

number1, number2: The number1th champion takes the number2th mastery. Example: "02" indicates Shaco, Mastery 5
number1, x: The number1th champion. Example: "2x" indicates Malzahar
x, number2: The number2th mastery. Example: "x1" indicates Mastery 4
x, x: Blank tile. Example: "xx" indicates a blank tile
-, -: Indicates that no information is given about this slot. Said slot may not even exist. Example: "--" indicates no information

*/

//Initialize the game
function init(){
	createBoard();
	buildPolyominos();
	clearBoard();
	drawBoard();
	drawInfo();
	drawHints();
}

//Resets the game
function reset(){

	boardHtml = '';
	infoHtml = '';
	cbHtml = '';
	hintsHtml = '';

	board = [];
	champs = [];
	polyominos = [];
	noOfGuesses = 0;
	win = false;
	
	document.getElementById("board").innerHTML='';
	document.getElementById("info").innerHTML='';
	document.getElementById("hints").innerHTML='';
	document.getElementById("current-brush").innerHTML='';
	document.getElementById("submit-button").innerHTML='';
	document.getElementById("alert-holder").innerHTML='';
	
	init();
}

function createBoard(){
	board = [];
	
	//Randomly fill a [3][3] array with a pair of values from 0 (inclusive) to 3 (exclusive)
	//Get a list of all possible values
	var tempArray = [];
	for (var i = 0; i < boardSize; i++){
		for (var j = 0; j < boardSize; j++){
			tempArray.push(i + "" + j); //ensure that pushed value is a string and not an int
		}
	}
	
	//populate board
	for (var i = 0; i < boardSize; i++){
		var pushArray = [];
		for (var j = 0; j < boardSize; j++){
			//Choose a random value from tempArray, push it into the pushArray, then remove it from tempArray
			var randValue = Math.floor(Math.random() * tempArray.length);
			pushArray.push(tempArray[randValue]);
			tempArray.splice(randValue, 1);
		}
		board.push(pushArray);
	}
	
	//DEBUG
	/*console.log('createBoard results: ');
	for (var i = 0; i < boardSize; i++){
		console.log(board[i]);
	}*/
	
}

function clearBoard(){
	board = getBoardSizeBoard('xx');
}

function buildPolyominos(){
	var numPolyominos = 0;
	var sumSquares = 0;
	var usedBoard = getBoardSizeBoard(0);
	
	var done = false;
	
	while (!done){
		//alert('Debug 1');
		numPolyominos++;
		var newPolyomino = {};
		//fill newPolyomino with a bunch of blanks
		var empty = getBoardSizeBoard('--');
		
		//alert('Debug 2');
		
		newPolyomino.monominos = empty;
		
		//choose "seed"
		var randomX = Math.floor(Math.random() * boardSize);
		var randomY = Math.floor(Math.random() * boardSize);
		newPolyomino.monominos[randomX][randomY] = board[randomX][randomY];
		
		//alert('Debug 3');
		
		//Choose number of tiles to be in polyomino. A non-uniform distribution is intentional.
		//Math.min is included to assert that a valid amount will be chosen every time, regardless of the distribution chosen
		var randAmount = randomAmountDistrubution();
		var ITried = 30;
		
		//alert('Debug 4');
		
		//Continually try to append to the polyomino for randAmount times
		while (randAmount > 0){
			//debug
			//alert('I\'m annoying! randAmount: ' + randAmount + ', ITried: ' + ITried);
			ITried -= 1;
			if (ITried < 0){
				break;
			}
			//choose a random tile and see if it is adjacent to an already existing monomino
			//if so, append that monomino
			randomX = Math.floor(Math.random() * boardSize);
			randomY = Math.floor(Math.random() * boardSize);
			var current = newPolyomino.monominos[randomX][randomY] != "--";
			var adjLeft = (randomX > 0) && newPolyomino.monominos[randomX - 1][randomY] != "--";
			var adjRight = (randomX < boardSize - 1) && newPolyomino.monominos[randomX + 1][randomY] != "--";
			var adjTop = (randomY > 0) && newPolyomino.monominos[randomX][randomY - 1] != "--";
			var adjBot = (randomY < boardSize - 1) && newPolyomino.monominos[randomX][randomY + 1] != "--";
			
			//Attempt to avoid reusing the same piece repeatedly
			var usedBoardModifier;
			if (curDifficulty >= 3){
				//nonreuse grows 3 times faster than normal: 0, (3/4), (6/7), (9/10), etc
				usedBoardModifier = (Math.random() > (3 * usedBoard[randomX][randomY] / (3 * usedBoard[randomX][randomY] + 1))); 
			} else if (curDifficulty >= 1){
				//normal nonreuse growth: (x / (x+1)), e.g. 0, (1/2), (2/3), (3/4), etc...
				usedBoardModifier = (Math.random() > (usedBoard[randomX][randomY] / (usedBoard[randomX][randomY] + 1)));
			} else {
				//no growth
				usedBoardModifier = true;
			}
			
			//alert('Debug 4.3');
			if (!current && (adjLeft || adjRight || adjTop || adjBot) && usedBoardModifier){
				newPolyomino.monominos[randomX][randomY] = board[randomX][randomY];
				usedBoard[randomX][randomY]++;
				randAmount--;
			}
			//yknow this was originally a recursive function but it was really annoying to work with
		}
		//alert('Debug 4.6');
		
		//Find the size of the polyomino
		var sizee = 0;
		for (var i = 0; i < boardSize; i++){
			for (var j = 0; j < boardSize; j++){
				if (newPolyomino.monominos[i][j] != '--'){
					sizee++;
				}
			}
		}
		//rejected
		if (sizee <= 1){
			continue;
		}
		newPolyomino.size = sizee;
		sumSquares += newPolyomino.size * newPolyomino.size;
		
		//Clean the polyomino so the hints aren't a dead giveaway
		//First: check the topmost array (x=0). If it's blank, shift it up and check again.
		//alert('Debug 5');
		var topBlank = true;
		
		//DEBUG: Print current polyomino
		/*for (var i = 0; i < boardSize; i++){
			console.log(newPolyomino.monominos[i]);
		}*/

		while (topBlank){
			for (var i = 0; i < boardSize; i++){
				topBlank = topBlank && (newPolyomino.monominos[0][i] == "--");
			}
			if (topBlank){
				var temp = newPolyomino.monominos.shift();
				newPolyomino.monominos.push(temp);
			}
		}
		//alert('Debug 6');
		//Do the same for the leftmost array (y=0).
		var leftBlank = true;
		while (leftBlank ){
			for (var i = 0; i < boardSize; i++){
				leftBlank = leftBlank && (newPolyomino.monominos[i][0] == "--");
			}
			if (leftBlank){
				for (var j = 0; j < boardSize; j++){
					var temp = newPolyomino.monominos[j].shift();
					newPolyomino.monominos[j].push(temp);	
				}
			}
		}
		
		//DEBUG: Print current polyomino
		/*console.log('new polyomino');
		for (var i = 0; i < boardSize; i++){
			console.log(newPolyomino.monominos[i]);
		}*/
		
		//Now check bot and right arrays. If they're all empty, cut them off.
		var botBlank = true;
		while (botBlank){
			for (var i = 0; i < newPolyomino.monominos[newPolyomino.monominos.length - 1].length; i++){
				botBlank = botBlank && (newPolyomino.monominos[newPolyomino.monominos.length - 1][i] == "--");
			}
			if (botBlank){
				newPolyomino.monominos.pop();
			}
		}
		
		var rightBlank = true;
		while (rightBlank){
			for (var i = 0; i < newPolyomino.monominos.length; i++){
				rightBlank = rightBlank && (newPolyomino.monominos[i][newPolyomino.monominos[i].length - 1] == "--");
			}
			if (rightBlank){
				for (var j = 0; j < newPolyomino.monominos.length; j++){
					newPolyomino.monominos[j].pop();
				}
			}
		}

		//DEBUG: Print current polyomino
		/*for (var i = 0; i < boardSize; i++){
			console.log(newPolyomino.monominos[i]);
		}		*/
		
		//Now look at each monomino and obsfucate some of the hints
		for (var i = 0; i < newPolyomino.monominos.length; i++){
			for (var j = 0; j < newPolyomino.monominos[i].length; j++){
				if (newPolyomino.monominos[i][j] == '--'){
					//Nothing to obsfucate here
					continue;
				}
				
				//Threshhold: the more monominos that a polyomino owns, the more likely that it would be obsfucated
				//At difficulties 0 and 1, this is a flat value
				var threshHold;
				if (curDifficulty >= 2) {
					threshHold = (newPolyomino.size / (boardSize*boardSize));
				} else if (curDifficulty >= 1) {
					threshHold = 0.4;
				} else {
					threshHold = 0.2;
				}
				
				var char1 = (Math.random()< threshHold);
				var char2 = (Math.random()< threshHold);
				
				if (char1){
					newPolyomino.monominos[i][j] = 'x' + newPolyomino.monominos[i][j].charAt(1);
				}
				if (char2){
					newPolyomino.monominos[i][j] = newPolyomino.monominos[i][j].charAt(0) + 'x';
				}
				
				//alleviate in the case of a useless or almost useless hint, such as 8 squares with 0 data
				if (char1 && char2){
					sumSquares-=boardSize*boardSize;
				}
			}
		}
		//Finally append this polyomino to the polomono array
		polyominos.push(newPolyomino);
		
		//Check if sumSquares reaches a certain threshhold. If so, finish
		if (sumSquares > boardSize * boardSize * boardSize * boardSize){
			done = true;
		}
	}
}

function drawBoard(){
	//dear future me: http://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html	
	//thanks past self
	
	//DEBUG
	//console.log('champImages: ' + champImages);
	
	/*boardHtml = '';
	for (var i = 0; i < boardSize; i++){
		for (var j = 0; j < boardSize; j++){
			var champImageId = parseInt(board[i][j].charAt(0));
			var masteryImageId = parseInt(board[i][j].charAt(1));
			
			boardHtml += '<div style="position: relative; left: 0; top: 0; display: inline-block">';
			
			var champImageSrc = '';
			var masteryImageSrc = '';
			
			//DEBUG
			//console.log('i: ' + i + '; j: ' + j + '; champImageId: ' + champImageId + '; masteryImageId: ' + masteryImageId);
			
			if (isNaN(champImageId)){
				champImageSrc = 'assets/VizObscure.png';
			} else {
				champImageSrc = champImages[champImageId];
			}
			
			if (isNaN(masteryImageId)){
				masteryImageSrc = 'assets/norank.png';
			} else {
				masteryImageSrc = 'assets/rank' + (5 - masteryImageId) + '.png';
			}
			
			boardHtml += '<img src="' + champImageSrc + '" style="position: relative; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
			
			boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "applyBrush(' + i + ', ' + j + ')" />';
			//boardHtml += '<img src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px; opacity: ' + masteryOpacity + ';"/>';
			
			boardHtml += '</div>';
			
		}
		boardHtml += '<br />';
	}
	
	//DEBUG
	//console.log('drawBoard results: ' + boardHtml);
	
	document.getElementById("board").innerHTML = boardHtml;*/
	
	drawOnBoard(board, 'applyBrush');
	
}

function drawInfo(){
	infoHtml = '';
	
	//Draw current brush
	
	//Draw all champions
	for (var i = 0; i < boardSize; i++){
		infoHtml += '<input type="image" src="' + champImages[i] + '" style="width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'champion\', ' + i + ')"/>';
	}
	
	infoHtml += '<br /><br />'
	
	//Draw all masteries
	for (var i = 0; i < boardSize; i++){
		infoHtml += '<input type="image" src="assets/rank' + (5 - i) + '.png" style="width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'mastery\', ' + i + ')"/>';
	}
	
	document.getElementById("info").innerHTML = infoHtml;
	
	//Draw current brush
	cbHtml = '';
	cbHtml += '<div style="position: relative; left: 0px; top: 0px; display: inline-block">'
	
	var champSrc = '';
	var masterySrc = '';
	
	if (currentBrush[0] < 0){
		champSrc = 'assets/VizObscure.png';
	} else {
		champSrc = champImages[currentBrush[0]];
	}
	
	if (currentBrush[1] < 0){
		masterySrc = 'assets/norank.png';
	} else {
		masterySrc = 'assets/rank' + (5 - currentBrush[1]) + '.png';
	}
	
	cbHtml += '<img src="' + champSrc + '" style="position: relative; top: ' + (imageWidth/2) + 'px; left: 0px; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
	//cbHtml += '<img src="' + masterySrc + '" style="position: absolute; top: ' + (imageWidth/2) + 'px; left: 0px; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
	cbHtml += '<input type="image" src="' + masterySrc + '" style="position: absolute; top: ' + (imageWidth/2) + 'px; left: 0px; width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'mastery\', -1); changeBrush(\'champion\', -1);"/>';
	
	cbHtml += '</div>';
	
	document.getElementById("current-brush").innerHTML = cbHtml;
	
	if (!win){
		document.getElementById("submit-button").innerHTML = '<input type="submit" class="btn btn-primary" style="text-align: center; font-size: ' + (imageWidth/2) + 'px; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; line-height: ' + imageWidth + 'px; position: relative; top: ' + (imageWidth/2) + 'px; left: 0px;" onclick="makeGuess();" value="&gt;&gt;" />';
	} else {
		document.getElementById("submit-button").innerHTML = '<input type="submit" class="btn btn-primary" style="text-align: center; width: ' + imageWidth + 'px; height: ' + (imageWidth/2) + 'px; line-height: ' + (imageWidth/2) + 'px; position: absolute; top: ' + (imageWidth/2) + 'px; left: 0px;" onclick="reset();" value="Play again" /><input type="submit" class="btn btn-info" style="text-align: center; width: ' + imageWidth + 'px; height: ' + (imageWidth/2) + 'px; line-height: ' + (imageWidth/2) + 'px; position: absolute; top: ' + (imageWidth) + 'px; left: 0px;" onclick="redirect();" value="Read the Dossier" />';
		
	}
	
}

function drawHints(){
	hintsHtml = '';
	hintsHtml += '<div style="width: 100%; text-align: center;">'
	hintsHtml += '<div class="btn-group-vertical" role="group" aria-label="???" style="display: inline-block; vertical-align: middle">'
	hintsHtml += '???';
	
	for (var i = 0; i < polyominos.length; i++){
		hintsHtml += '<input type="submit" class="btn btn-info" style="" onclick="drawPolyomino(' + i + ');" value="' + romanize(i+1) + '" />';
	}
	
	hintsHtml += '</div>';
	hintsHtml += '</div>';
	
	document.getElementById("hints").innerHTML = hintsHtml;
}


function drawPolyomino(n){
	/*boardHtml = '';
	var getPolyomino = polyominos[n];
	for (var i = 0; i < getPolyomino.monominos.length; i++){
		for (var j = 0; j < getPolyomino.monominos[i].length; j++){
			var champImageId = parseInt(getPolyomino.monominos[i][j].charAt(0));
			var masteryImageId = parseInt(getPolyomino.monominos[i][j].charAt(1));
			
			boardHtml += '<div style="position: relative; left: 0; top: 0; display: inline-block">';
			
			var champImageSrc = '';
			var masteryImageSrc = '';
			
			//DEBUG
			//console.log('i: ' + i + '; j: ' + j + '; champImageId: ' + champImageId + '; masteryImageId: ' + masteryImageId);
			
			if (isNaN(champImageId)){
				champImageSrc = 'assets/VizObscure.png';
			} else {
				champImageSrc = champImages[champImageId];
			}
			
			if (isNaN(masteryImageId)){
				masteryImageSrc = 'assets/norank.png';
			} else {
				masteryImageSrc = 'assets/rank' + (5 - masteryImageId) + '.png';
			}
			
			boardHtml += '<img src="' + champImageSrc + '" style="position: relative; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
			
			boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "drawBoard();" />';
			
			boardHtml += '</div>';
			
		}
		boardHtml += '<br />';
	}
	document.getElementById("board").innerHTML = boardHtml;*/
	
	drawOnBoard(polyominos[n].monominos, 'drawBoard');
	
}

function drawOnBoard(array, clickMode){
	boardHtml = '';
	for (var i = 0; i < boardSize; i++){
		for (var j = 0; j < boardSize; j++){
			var champImageId;
			var masteryId;
			
			if (i >= array.length || j >= array[0].length){
				champImageId = '-';
				masteryImageId = '-';
			} else {
				champImageId = array[i][j].charAt(0);
				masteryImageId = array[i][j].charAt(1);
			}
			
			boardHtml += '<div style="position: relative; left: 0; top: 0; display: inline-block">';
			
			var champImageSrc = '';
			var masteryImageSrc = '';
			
			if (champImageId == 'x'){
				champImageSrc = 'assets/VizObscure.png';
			} else if (champImageId == '-'){
				champImageSrc = 'assets/emptyTile.png';
			} else {
				champImageSrc = champImages[parseInt(champImageId)];
			}
			
			if (masteryImageId == 'x'){
				masteryImageSrc = 'assets/norank.png';
			} else if (masteryImageId == '-'){
				masteryImageSrc = 'assets/emptyTile.png';
			} else {
				masteryImageSrc = 'assets/rank' + (5 - parseInt(masteryImageId)) + '.png';
			}
			/*
			if (isNaN(champImageId)){
				champImageSrc = 'assets/VizObscure.png';
			} else {
				champImageSrc = champImages[champImageId];
			}
			
			if (isNaN(masteryImageId)){
				masteryImageSrc = 'assets/norank.png';
			} else {
				masteryImageSrc = 'assets/rank' + (5 - masteryImageId) + '.png';
			}*/
			
			boardHtml += '<img src="' + champImageSrc + '" style="position: relative; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
			
			if (clickMode == 'applyBrush'){
				boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "applyBrush(' + i + ', ' + j + ')" />';
			} else if (clickMode == 'drawBoard'){
				boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "drawBoard();" />';
			}
			
			boardHtml += '</div>';
			
		}
		boardHtml += '<br />';
	}
	document.getElementById("board").innerHTML = boardHtml;
}

//I think I made the applyBrush algorithm way too complicated
function applyBrush(x, y){
	if (!win){
	/*var left = 'x';
	var right = 'x';
	if (currentBrush[0] >= 0){
		left = currentBrush[0];
	}
	if (currentBrush[1] >= 0){
		right = currentBrush[1];
	}
	board[x][y] = left + '' + right;*/
	var oldLeft = board[x][y].charAt(0);
	var oldRight = board[x][y].charAt(1);
	var newLeft = currentBrush[0];
	var newRight = currentBrush[1];
	
	//var construct = '';
	
	if (newLeft < 0){
		newLeft = 'x';
	}
	if (newRight < 0){
		newRight = 'x';
	}
	
	if (oldLeft != newLeft && newLeft >= 0){
		oldLeft = newLeft;
	}
	if (oldRight != newRight && newRight >= 0){
		oldRight = newRight;
	}
	
	//When brush is in "erase mode", ALWAYS prioritize it
	if (newLeft == 'x' && newRight == 'x'){
		oldLeft = newLeft;
		oldRight = newRight;
	}
	board[x][y] = oldLeft + '' + oldRight;
	
	/*if ((newLeft < 0 && newRight < 0) || (oldLeft == newLeft && oldRight == newRight)){
		construct = 'xx';
	} else if (newLeft < 0){
		construct = oldLeft + '' + newRight;
	} else if (newRight < 0){
		construct = newLeft + '' + oldRight;
	} else {
		construct = newLeft + '' + newRight;
	}*/
	//board[x][y] = construct;
	
	drawBoard();
	}
}

function changeBrush(type, id){
	if (type == 'champion'){
		if (currentBrush[0] != id){
			currentBrush[0] = id;
		} else {
			currentBrush[0] = -1;
		}
	} else {
		if (currentBrush[1] != id){
			currentBrush[1] = id;
		} else {
			currentBrush[1] = -1;
		}
	}
	drawInfo();
}

function makeGuess(){
	//Because there can be more than one correct answer, a direct comparison to the board constructed in createBoard() cannot be done
	//Correct until proven incorrect
	var correct = true;
	
	//First, check if every champ/mastery pair has been used
	var allPairs = [];
	for (var i = 0; i < boardSize; i++){
		for (var j = 0; j < boardSize; j++){
			allPairs.push(i + '' + j);
		}
	}
	
	for (var i = 0; i < boardSize; i++){
		for (var j = 0; j < boardSize; j++){
			if (allPairs.indexOf(board[i][j]) < 0){
				correct = false; 
				//alert('incorrect');
				//do something here
				var alertHtml = '';
				alertHtml += '<div class="alert alert-danger alert-dismissible" role="alert">';
				alertHtml += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
				alertHtml += '<strong>✘</strong>';
				alertHtml += '</div>';
				document.getElementById("alert-holder").innerHTML = alertHtml;
				
				return;
			}
			allPairs[allPairs.indexOf(board[i][j])] = '--';
		}
	}
	
	//Now check if every single polyomino fits
	//LMAO O(n^5) OP
	for (var i = 0; i < polyominos.length; i++){
		var found = false;
		
		//with every single possible starting position
		for (var x = 0; x < boardSize - polyominos[i].monominos.length + 1; x++){
			for (var y = 0; y < boardSize - polyominos[i].monominos[0].length + 1; y++){
				
				//for every single monomino in the polyomino
				var correctPosition = true;
				
				for (var mx = 0; mx < polyominos[i].monominos.length; mx++){
					for (var my = 0; my < polyominos[i].monominos[mx].length; my++){
						
						//check if board piece matches mono piece
						var monoPiece = polyominos[i].monominos[mx][my];
						if (monoPiece == '--' || monoPiece == 'xx'){
							//accept it and move on
							continue;
						}
						
						var boardPiece = board[x + mx][y + my];
						//mismatch
						if ((monoPiece.charAt(0) != boardPiece.charAt(0)) && monoPiece.charAt(0) != 'x' || ((monoPiece.charAt(1) != boardPiece.charAt(1)) && monoPiece.charAt(1) != 'x')){
							//DEBUG
							/*console.log('failed');
							console.log('polyomino ' + i);
							console.log('board position (' + x + ', ' + y + ') value: ' + boardPiece);
							console.log('polyomino position (' + mx + ', ' + my + ') value: ' + monoPiece);*/
							correctPosition = false;
						}
					}
				}
				
				//omg we found it
				if (correctPosition){
					found = true;
					break;
				}
				
			}
			
			if (found){
				break;
			}
			
		}
		
		if (!found){
			correct = false;
			var alertHtml = '';
			alertHtml += '<div class="alert alert-danger alert-dismissible" role="alert">';
			alertHtml += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
			alertHtml += '<strong>✘</strong>';
			alertHtml += '</div>';
			document.getElementById("alert-holder").innerHTML = alertHtml;
			return;
		}
		
	}
	
	//Passed both tests
	win = true;
	
	//the things I do to myself
	if (win){
		curDifficulty++;
		var alertHtml = '';
		alertHtml += '<div class="alert alert-success alert-dismissible" role="alert">';
		alertHtml += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		alertHtml += '<strong>✔</strong>';
		alertHtml += '</div>';
		document.getElementById("alert-holder").innerHTML = alertHtml;
		drawInfo();
	}
	
}

//I overcomplicated this, I think
//distrubution lol
function randomAmountDistrubution(){
	var array = [];
	for (var i = 0; i < boardSize * boardSize; i++){
		array.push(0);
	}
	var bigMan = 2520; //because it has a lot of factors
	var curMan = bigMan;
	var summ = bigMan;
	array[boardSize + 1] = bigMan;
	for (var i = boardSize; i >= 0; i--){
		curMan /= boardSize;
		array[i] = curMan;
		summ += curMan;
	}
	curMan = bigMan;
	for (var i = boardSize + 2; i < boardSize * boardSize; i++){
		curMan /= boardSize;
		array[i] = curMan;
		summ += curMan;
	}
	summ -= array[0];
	array[0] = 0;
	summ -= array[array.length - 1];
	array[array.length - 1] = 0;
	var r = Math.floor(Math.random() * summ);
	var myman = 0;
	for (var i = 0; i < boardSize * boardSize; i++){
		myman += array[i];
		if (r < myman) {
			return i+1;
		}
	}
}

//Convert to Roman numerals, by Steven Levithan
function romanize (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function getBoardSizeBoard(fill){
	var arr = [];
	for (var i = 0; i < boardSize; i++){
		var arra = [];
		for (var j = 0; j < boardSize; j++){
			arra.push(fill);
		}
		arr.push(arra);
	}
	return arr;
		
}

//Go to the documentation page
function redirect(){
	window.location.href = "documentation.html";
}