//Output variables 
var boardHtml = '';
var infoHtml = '';
var cbHtml = '';
var hintsHtml = '';

//Gameplay handlers
var imported = false;
var boardSize = 3; //limit = 5
var board = [];
var champs = [];
var polyominos = [];
var champImages = [];
var curDifficulty = 0;
var currentBrush = [-1, -1];
var win = false;

//Formatting things
var windowWidth = window.innerWidth;
var imageWidth = windowWidth/(boardSize + 4); //The board has 2-image-width margins on both the left and right side.
var masteryOpacity = 0.7;

//tutorialHandlers
var tutorialStep = 0;
var tutorialText = [];

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
	value = document.getElementById("start-difficulty").value.charAt(0)
	
	if (value != 'I'){
		curDifficulty = parseInt(document.getElementById("start-difficulty").value.charAt(0)) - 1;
	} else {
		curDifficulty = 3;
		polyominos = JSON.parse(document.getElementById("import-puzzle").value);
		imported = true;
	}
	
	if (!imported){
		fillTutorial();
		createBoard();
		buildPolyominos();
	}
	imported = false;
	clearBoard();
	drawBoard();
	drawInfo();
	drawHints();
	if (tutorialStep == 0 && curDifficulty < 0){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 1;
	}	
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
	
	//WAIT! Are we in the tutorial?
	if (curDifficulty < 0){
		board = [['12', '21', '00'],['10', '22', '02'],['11', '20', '01']];
		return;
	}
	
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
	//WAIT! Are we in the tutorial?
	if (curDifficulty < 0){
		var polyomino1 = {"size":9, monominos:[['1x','xx','0x'],['1x','xx','0x'],['1x','xx','0x']]};
		var polyomino2 = {"size":9, monominos:[['--','xx','x0'],['xx','x2','--'],['x1','--','--']]};
		var polyomino3 = {"size":9, monominos:[['--','x1','--'],['x0','xx','x2']]};
		polyominos.push(polyomino1);
		polyominos.push(polyomino2);
		polyominos.push(polyomino3);
		return;
	}
	
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
		//Difficulty 3 - limit to 3 extra tiles (4 total)
		//Difficulty 2 - limit to 5 extra tiles (6 total)
		var randAmount = randomAmountDistrubution();
		if (curDifficulty >= 2){
			randAmount = Math.min(3, randAmount);
		}
		if (curDifficulty >= 1){
			randAmount = Math.min(5, randAmount);
		}
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
			if (curDifficulty >= 2){
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
		
		//sumsquare penalty for blank hint
		var penalty = 0;
		//Now look at each monomino and obsfucate some of the hints
		for (var i = 0; i < newPolyomino.monominos.length; i++){
			for (var j = 0; j < newPolyomino.monominos[i].length; j++){
				if (newPolyomino.monominos[i][j] == '--'){
					//Nothing to obsfucate here
					continue;
				}
				
				//Threshhold: The chance, out of 1, that a char will be eliminated
				//At difficulty 2, the more monominos that a polyomino owns, the more likely that it would be obsfucated
				//At difficulties 0 and 1, this is a flat value
				var threshHold;
				if (curDifficulty >= 2) {
					threshHold = 0.3 + (newPolyomino.size / (boardSize*boardSize*3));
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
					penalty+=9;
				}
			}
		}
		
		//Check if the polyomino isn't useless (overlap)
		var badPolyomino = false;
		for (var i = 0; i < polyominos.length; i++){
			if (findIn(newPolyomino, polyominos[i]) || findIn(polyominos[i], newPolyomino)){
				badPolyomino = true;
				break;
			}
		}
		//Continuing uselessness checks (all blank)
		var completelyEmpty = true;
		for (var i = 0; i < newPolyomino.monominos.length; i++){
			for (var j = 0; j < newPolyomino.monominos[0].length; j++){
				completelyEmpty = completelyEmpty && (newPolyomino.monominos[i][j] == 'xx' || newPolyomino.monominos[i][j] == '--');
			}
		}
		badPolyomino = badPolyomino || completelyEmpty;
		if (badPolyomino){
			continue;
		}
		
		//Assuming now that badPolyomino is false
		
		//Finally append this polyomino to the polomono array
		polyominos.push(newPolyomino);
		sumSquares += newPolyomino.size * newPolyomino.size - penalty;
		
		
		//Check if sumSquares reaches a certain threshhold. If so, finish
		if (sumSquares > boardSize * boardSize * boardSize * boardSize){
			done = true;
		}
		//Difficulty 3 - limit to 4 hints
		if (numPolyominos >= 4 && curDifficulty >= 2){
			done = true;
		}
		//Difficulty 2 - limit to 6
		if (numPolyominos >= 6 && curDifficulty >= 1){
			done = true;
		}
	}
}

function drawBoard(){
	//dear future me: http://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html	
	//thanks past self
	
	//tutorial
	if (tutorialStep == 2 && curDifficulty < 0){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 3;
	}
	if (tutorialStep == 3 && curDifficulty < 0 && findIn({"monominos":[['1x','--','0x'],['1x','--','0x'],['1x','--','0x']]}, {"monominos":board})){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 4;
	}	
	if (tutorialStep == 4 && curDifficulty < 0 && findIn({"monominos":[['1x','2x','0x'],['1x','2x','0x'],['1x','2x','0x']]}, {"monominos":board})){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 5;
	}
	if (tutorialStep == 5 && curDifficulty < 0 && findIn({"monominos":[['1x','2x','00'],['1x','22','0x'],['11','2x','0x']]}, {"monominos":board})){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 6;
	}		
	if (tutorialStep == 7 && curDifficulty < 0){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 8;
	}		
	if (tutorialStep == 8 && curDifficulty < 0 && findIn({"monominos":[['1x','21','00'],['10','22','02'],['11','2x','0x']]}, {"monominos":board})){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 9;
	}	
	if (tutorialStep == 9 && curDifficulty < 0 && findIn({"monominos":[['12','21','00'],['10','22','02'],['11','20','01']]}, {"monominos":board})){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 10;
	}				
	
	if (document.getElementById("hintsBack") != null){
		document.getElementById("hintsBack").disabled = true;
	}
	drawOnBoard(board, 'applyBrush');
	
}

function drawInfo(){
	infoHtml = '';	
	//Draw current brush
	
	//Draw all champions
	for (var i = 0; i < boardSize; i++){
		infoHtml += '<input type="image" src="' + champImages[i] + '" style="width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'champion\', ' + i + ')" alt="' + toName(champImages[i]) + '" />';
	}
	
	infoHtml += '<br /><br />'
	
	//Draw all masteries
	for (var i = 0; i < boardSize; i++){
		infoHtml += '<input type="image" src="assets/rank' + (5 - i) + '.png" style="width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'mastery\', ' + i + ')"/>';
	}
	
	document.getElementById("info").innerHTML = infoHtml;
	
	var champSrc = '';
	var masterySrc = '';
	var altText = 'No champion selected';
	
	if (currentBrush[0] < 0){
		champSrc = 'assets/VizObscure.png';
	} else {
		champSrc = champImages[currentBrush[0]];
		altText = toName(champImages[currentBrush[0]]);
	}
	
	if (currentBrush[1] < 0){
		masterySrc = 'assets/norank.png';
	} else {
		masterySrc = 'assets/rank' + (5 - currentBrush[1]) + '.png';
	}
	
	//Draw current brush
	cbHtml = '';
	cbHtml += '<div style="position: relative; left: 0px; top: 0px; display: inline-block; text-align: center;">'
	cbHtml += '<img src="' + champSrc + '" style="position: relative; top: ' + (imageWidth/2) + 'px; left: 0px; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px" alt="' + altText + '" />';
	//cbHtml += '<img src="' + masterySrc + '" style="position: absolute; top: ' + (imageWidth/2) + 'px; left: 0px; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
	cbHtml += '<input type="image" src="' + masterySrc + '" style="position: absolute; top: ' + (imageWidth/2) + 'px; left: 0px; width:' + imageWidth + 'px;height:' + imageWidth + 'px;" onclick="changeBrush(\'mastery\', -1); changeBrush(\'champion\', -1);"/>';
	
	cbHtml += '<br />';
	cbHtml += '<input type="submit" class="btn btn-danger" style="text-align: center; position: relative; top: ' + (imageWidth/2) + 'px;" onclick="changeBrush(\'mastery\', -1); changeBrush(\'champion\', -1);" value="✖" />';
	cbHtml += '</div>';
	
	document.getElementById("current-brush").innerHTML = cbHtml;
	
	if (!win){
		document.getElementById("submit-button").innerHTML = '<input type="submit" class="btn btn-primary" style="text-align: center; font-size: ' + (imageWidth/2) + 'px; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; line-height: ' + imageWidth + 'px; position: relative; top: ' + (imageWidth/2) + 'px; left: 0px;" onclick="makeGuess();" value="&gt;&gt;" />';
	} else {
		document.getElementById("submit-button").innerHTML = '<input type="submit" class="btn btn-primary" style="text-align: center; width: ' + imageWidth + 'px; height: ' + (imageWidth/2) + 'px; line-height: ' + (imageWidth/2) + 'px; position: relative; top: ' + (imageWidth/2) + 'px; left: 0px;" onclick="reset();" value="↺" /><br /><input type="submit" class="btn btn-info" style="text-align: center; width: ' + imageWidth + 'px; height: ' + (imageWidth/2) + 'px; line-height: ' + (imageWidth/2) + 'px; position: relative; top: ' + (imageWidth/2) + 'px; left: 0px;" onclick="redirect();" value="🕮" />';
		
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
	
	hintsHtml += '<input id="hintsBack" type="submit" class="btn btn-danger" style="" onclick="drawBoard();" value="✖" disabled />';
	hintsHtml += '<input id="export" type="submit" class="btn btn-warning" style="" onclick="exportPuzzle();" value="⇒" />';
	
	hintsHtml += '</div>';
	hintsHtml += '</div>';
	
	document.getElementById("hints").innerHTML = hintsHtml;
}

function drawPolyomino(n){
	//tutorial
	if (tutorialStep == 1 && curDifficulty < 0){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 2;
	}
	if (tutorialStep == 6 && curDifficulty < 0){
		$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
		$('#tutorial').modal('show');
		tutorialStep = 7;
	}	
	
	if (document.getElementById("hintsBack") != null){
		document.getElementById("hintsBack").disabled = false;
	}
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
			var altText = 'No champion';
			
			if (champImageId == 'x'){
				champImageSrc = 'assets/VizObscure.png';
			} else if (champImageId == '-'){
				altText = '';
				champImageSrc = 'assets/emptyTile.png';
			} else {
				altText = toName(champImages[parseInt(champImageId)]);
				champImageSrc = champImages[parseInt(champImageId)];
			}
			
			if (masteryImageId == 'x'){
				masteryImageSrc = 'assets/norank.png';
			} else if (masteryImageId == '-'){
				masteryImageSrc = 'assets/emptyTile.png';
			} else {
				masteryImageSrc = 'assets/rank' + (5 - parseInt(masteryImageId)) + '.png';
			}
			
			boardHtml += '<img src="' + champImageSrc + '" style="position: relative; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' +imageWidth + 'px"/>';
			
			if (clickMode == 'applyBrush'){
				boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "applyBrush(' + i + ', ' + j + ')" alt="' + altText + '"/>';
			} else if (clickMode == 'drawBoard'){
				boardHtml += '<input type="image" src="' + masteryImageSrc + '" style="position: absolute; top: 0; left: 0; width: ' + imageWidth + 'px; height: ' + imageWidth + 'px; opacity: ' + masteryOpacity + ';" onclick = "drawBoard();" alt="' + altText + '" />';
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
	var oldLeft = checkBoardValue(x, y, 'champion');
	var oldRight = checkBoardValue(x, y, 'mastery');
	var newLeft = currentBrush[0];
	var newRight = currentBrush[1];
	
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
	
	drawBoard();
	}
}

function changeBrush(type, id){
	if (type == 'champion'){
		//Only change the brush if it's different
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
				if (curDifficulty < 0){
					alertHtml += '<strong>Hold up!</strong> You don\'t seem to have three of each champion with one of each mastery medal.';
				} else {
					alertHtml += '<strong>✘</strong>';
				}
				alertHtml += '</div>';
				document.getElementById("alert-holder").innerHTML = alertHtml;
				
				return;
			}
			allPairs[allPairs.indexOf(board[i][j])] = '--';
		}
	}
	
	//Now check if every single polyomino fits
	//O(n^5) tho
	for (var i = 0; i < polyominos.length; i++){
		var found = findIn(polyominos[i], {'monominos': board, 'size': boardSize*boardSize});
		
		if (!found){
			correct = false;
			var alertHtml = '';
			alertHtml += '<div class="alert alert-danger alert-dismissible" role="alert">';
			alertHtml += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
			if (curDifficulty < 0){
					alertHtml += '<strong>Hold up!</strong> Hint ' + (i+1) + ' does not match!';
			} else {
				alertHtml += '<strong>✘</strong>';
			}
			alertHtml += '</div>';
			document.getElementById("alert-holder").innerHTML = alertHtml;
			return;
		}
		
	}
	
	//Passed both tests
	win = true;
	
	//the things I do to myself
	if (win){
		//tutorial
		if (tutorialStep == 10 && curDifficulty < 0){
			$('#tutorial').find('.modal-body').html(tutorialText[tutorialStep]);
			$('#tutorial').modal('show');
			tutorialStep = 11;
		}
		
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

function findIn(polyomino1, polyomino2){
	//Check if polyomino1 can be found in polyomino2
	
	//Check if 1 is bigger than 2
	if (polyomino1.size > polyomino2.size || polyomino1.monominos.length > polyomino2.monominos.length || polyomino1.monominos[0].length > polyomino2.monominos[0].length){
		return false;
	}
	
	//LMAO O(n^4)
	//with every single possible starting position
	for (var x = 0; x < polyomino2.monominos.length - polyomino1.monominos.length + 1; x++){
		for (var y = 0; y < polyomino2.monominos[0].length - polyomino1.monominos[0].length + 1; y++){
			
			var correctPosition = true;
			
			//for every single monomino in the smaller polyomino1		
			for (var mx = 0; mx < polyomino1.monominos.length; mx++){
				for (var my = 0; my < polyomino1.monominos[mx].length; my++){
					
					//check if board piece matches mono piece
					var monoPiece = polyomino1.monominos[mx][my];
					if (monoPiece == '--' || monoPiece == 'xx'){
						//accept it and move on
						continue;
					}
					
					var bigPolyPiece = polyomino2.monominos[x + mx][y + my];
					//mismatch
					if ((monoPiece.charAt(0) != bigPolyPiece.charAt(0)) && monoPiece.charAt(0) != 'x' || ((monoPiece.charAt(1) != bigPolyPiece.charAt(1)) && monoPiece.charAt(1) != 'x')){
						//DEBUG
						//console.log('failed');
						//console.log('polyomino2 position (' + x + ', ' + y + ') value: ' + bigPolyPiece);
						//console.log('polyomino1 position (' + mx + ', ' + my + ') value: ' + monoPiece);
						correctPosition = false;
					}
				}
			}
			if (correctPosition){
				return true;
			}
		}
	}
	return false;
}

function checkBoardValue(xcor, ycor, type){
	if (type == 'champion'){
		return board[xcor][ycor].charAt(0);
	} else if (type == 'mastery'){
		return board[xcor][ycor].charAt(1);
	} else {
		return board[xcor][ycor];
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

function exportPuzzle(){
	var alertHtml = '';
	var polyominosToString = '[';
	
	for (var i = 0; i < polyominos.length; i++){
		polyominosToString += JSON.stringify(polyominos[i]);
		if (i < polyominos.length - 1){
			polyominosToString += ',';
		}
	}
	polyominosToString += ']';
	
	alertHtml += '<div class="alert alert-warning alert-dismissible" role="alert">';
	alertHtml += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
	alertHtml += '<strong>Share this puzzle with friends! Copy paste this code to share it with others:  </strong>';
	alertHtml += polyominosToString;
	alertHtml += '</div>';
	document.getElementById("alert-holder").innerHTML = alertHtml;
	
}

//Go to the documentation page
function redirect(){
	window.location.href = "documentation.html";
}

function fillTutorial(){
/*
Here is what the tutorial should look like:
*/
//0	Launch				
var tempText = ''; 
tempText += 'Hello, welcome to Masteromino! Here is a brief run-down of the rules of the game:<br/><br/>';
tempText += '<ul>';
tempText += '<li>The aim of the game is to correctly fill the board according to the hints given.</li>';
tempText += '<li>Every valid solution to the puzzle holds three of each champion, with each holding a different mastery medal.</li>';
tempText += '<li>On the left side, you have a series of hints. Click on the light blue buttons to view the hints. Click the board to stop viewing the hints.</li>';
tempText += '<li>Hints show where colors and symbols should be placed in relation to the grid and each other.<br/>';
tempText += '<li>The hints may contain tiles with only a champion, only a mastery medal, or neither. The solution will not contain these types of tiles.</li>';
tempText += '<li>Hints cannot rotate, flip, nor cycle back to the other side of the board.</li>';
tempText += '<li>Select your brush using the panel below the board. Click on the board to apply the brush to the board. Click on the brush to clear the brush.</li>';
tempText += '<li>Submit your guess by clicking "Submit Guess".</li>';
tempText += '<li>Every puzzle as at least one solution. Some puzzles may have several solutions. You only need to submit one of them.</li>';
tempText += '</ul>';
tempText += 'This may seem complicated, but the rules are actually fairly straightfowards. Let\'s continue.<br/><br/>';
						
tempText += 'To begin, click on one of the blue buttons on the left side of the screen.';
tutorialText.push(tempText);
tempText = '';			
			
//1	Click hint			
tempText += 'As you can see, clicking on the blue buttons displays a hint. In this tutorial, there are three hints. Each one is unique.<br/><br/>';

tempText += 'Click on the first hint. You will see that your hint will appear on screen. In order to apply this hint, click on the champions on the bottom of the screen. This will change your brush.<br/><br/>';
						
tempText += 'Change your current brush into one of the tiles on the hint, then click on the hint board (not the hint buttons!) to go back to the regular board.';
tutorialText.push(tempText);
tempText = '';			

//2	Go back to board	
tempText += 'In order to paint the board, customize your brush to the tile you want to paint with, then click on any of the board tiles to paint that tile.<br/><br/>';
tempText += 'If you make a mistake, click on the red X underneath the brush icon, then click on the board tile that you want to clear.<br/><br/>';
//tempText += 'Go back and forth between the hints and the board until every single hint can be found on the board. Additionally, remember that the board should contain three of each champion, and that each champion should have one of each mastery medal.<br/><br/>';
tempText += 'Remember, hint 1 is "three ' + toName(champImages[1]) + ' on the left and three ' + toName(champImages[0]) + ' on the right"';
tutorialText.push(tempText);
tempText = '';			

//3 Complete the first hint
tempText += 'Congratulations! You successfully placed the first hint down!<br /><br />';
tempText += 'Remember that you need three of each champion on the board. What spaces can you fill in the middle column?';
tutorialText.push(tempText);
tempText = '';

//4 After filling the board with valid champs
tempText += 'Nice! Now it\'s time to move on to hint 2.<br /><br />';
tempText += 'Click on the second hint to view it, then copy it to the game board. Do not remove any of the champions you already placed on the board--the champion and mastery can be on the same tile at the same time. Try it.';
tutorialText.push(tempText);
tempText = '';

//5 Finish second hint
tempText += 'We\'re almost there! Now let\'s go to the final step.<br /><br />';
tempText += 'Go to the third and final hint.';
tutorialText.push(tempText);
tempText = '';

//6 Go to third hint
tempText += 'Hmmm, this is unusual. This is smaller than a 3x3 board.<br /><br />';
tempText += 'Hints are relatively positioned. It does not matter where the hint can be found on your answer. So long as they fit on the board, the hint still counts. Let\'s try to figure out where the position of this hint is.<br /><br />';
tutorialText.push(tempText);
tempText = '';

//7 Go back to board
tempText += 'If we place the hint at the top, it seems like it can fit. There does not seem to be any conflict between what we have on the board and what the hint tells us. However, we should also check what happens if we try to place the board at the bottom.<br /><br />';
tempText += 'If we try to put the hint at the bottom, we run into an issue: the left tile on the hint is telling us that a mastery 5 tile should go here, but a mastery 4 tile already exists on the board! A conflict exists if we try to put the piece at the bottom of the board, so the correct solution is that the hint is positioned at the top.<br /><br />';
tempText += 'Place the hint in the correct position.';
tutorialText.push(tempText);
tempText = '';

//8 Place the third hint
tempText += 'We have all the hint on the board, but it looks like we still have some missing values...<br /><br />';
tempText += 'Hey, remember one of the first rules of the game? The one that goes "every valid solution to the puzzle holds three of each champion, with each holding a different mastery medal?"<br /><br />';
tempText += 'Notice how we only have two filled mastery medals for each champion we have so far. Using process of elimination, I\'m sure you can figure out what the remaining medals are.';
tutorialText.push(tempText);
tempText = '';

//9 Complete the board
tempText += 'Looks good. Smells good. Even <i>tastes</i> good.<br /><br />';
tempText += 'How about we get it checked? Click the big blue submit button on the bottom right.';
tutorialText.push(tempText);
tempText = '';

//10 Win game
tempText += 'There you have it. You can play again (upper button) or you can read the documentation (lower button).<br /><br />';
tempText += 'In any case, I hope you had fun!';
tutorialText.push(tempText);
tempText = '';

}

function toName(img){
	return img.substring('http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/'.length, img.length - '.png'.length);
}













