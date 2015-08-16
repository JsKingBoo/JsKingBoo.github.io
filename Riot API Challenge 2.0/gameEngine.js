//output variables
var previousGuessHtml = '';
var currentGuessHtml = '';
var navbarHtml = ''; //technically it isn't a navbar but ok

//gameplay handlers
var currentGuess = ["", "", "", "", "", "", "", "", "", ""];
var answer = []; //convenience
var answerCount = [0, 0, 0, 0]; //convenience; counts number of times [razor, iron, plun, ockl] appears in ansewr

//item ID
var razorfin = "3611";
var ironback = "3612";
var pluncrab = "3613";
var ocklepod = "3614";

//formatting + utility
var w = window.innerWidth;
var imgborder = 2;
var imagewidth = (w * 9 / 100) - (imgborder * 2);
var ch = 10;
var bozoForgot = false;
var rreg = "";

function dreg(r){
	rreg = r;
}

//store the answer here for convenience
function storeAnswer(get){
	//if some bozo didn't buy a brawler, treat is as a razorfin
	for (var i = 0; i < ch; i++){
		if (get[i]=="0"){
			answer[i] = razorfin;
			bozoForgot = true;
		} else {
			answer[i] = get[i];
		}
	}
	//prerequisite: answer.length = 10
	for (var i = 0; i < ch; i++){
		//sloppy but w/e
		if (answer[i] == razorfin){
			answerCount[0] += 1;
		} else if (answer[i] == ironback){
			answerCount[1] += 1;
		} else if (answer[i] == pluncrab){
			answerCount[2] += 1;
		} else { //ocklepod
			answerCount[3] += 1;
		}
	}
}

function drawStickyHeader(champURL){ //"champURL" is an ARRAY

	//this is like the worst way to do things
	navbarHtml = '';

	navbarHtml += '<nav class="navbar navbar-static-top" style="margin-left:0px">';
	navbarHtml += '  <div class="container-fluid">';


	navbarHtml += '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	navbarHtml += '      <ul class="nav navbar-nav">';

	//adding the images (finally)
	for (var i = 0; i < 10; i++){ //magic numbers lololol
		var color;
		if (i < 5){color = "blue"} else {color = "red"} //red team blue team ;d
		
		navbarHtml += '       <li><img src="' + champURL[i] + '" style="width:' + imagewidth + 'px;height:' + imagewidth + 'px;border:' + imgborder + 'px solid ' + color +'"></li>';
	}

	navbarHtml += '      </ul>';
	navbarHtml += '    </div><!-- /.navbar-collapse -->';
	navbarHtml += '  </div><!-- /.container-fluid -->';
	navbarHtml += '</nav> ';
	
	var displayContainer = document.getElementById("stickybar");
	displayContainer.innerHTML=navbarHtml;
	
	
}

function drawPreviousGuesses(){
	var displayContainer = document.getElementById("previous_guess");
	displayContainer.innerHTML=previousGuessHtml;
}

function drawCurrentGuesses(){
	//empty
	currentGuessHtml = '';
	
	//cycle through the guess data
	for (var i = 0; i < ch; i++){
		currentGuessHtml += '<input type="image" src="Brawlers/' + currentGuess[i] + '.png" alt="brawler" style="width:'+imagewidth+'px;height:'+imagewidth+'px" onclick="cycleInput('+i+','+currentGuess[i]+')"/>';
	}
	
	//draw the submit button
	currentGuessHtml += '<button type="button" class="btn btn-success" onclick="makeGuess();">Submit Guess</button>';
	
	//output
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
}

function makeGuess(){
	//solidify previous guess
	for (var i = 0; i < ch; i++){
		previousGuessHtml += '<img src="Brawlers/' + currentGuess[i] + '.png" alt="brawler" style="width:'+imagewidth+'px;height:'+imagewidth+'px">'
	}
	currentGuessHtml = '';
	
	var exact = 0;
	var kinda = 0;
	var lolno = 0;
	var kindaHelper = [0,0,0,0];
	for (var i = 0; i < 4; i++){
		kindaHelper[i] = answerCount[i];
	}
	//console.log("first check "+ kindaHelper); //debug
	//check to see if any matched *exactly* to answer
	for (var i = 0; i < ch; i++){
		if (currentGuess[i] == answer[i]){
			exact+=1;
			if (currentGuess[i] == razorfin){
				kindaHelper[0] -= 1;
			} else if (currentGuess[i] == ironback){
				kindaHelper[1] -= 1;
			} else if (currentGuess[i] == pluncrab){
				kindaHelper[2] -= 1;
			} else if (currentGuess[i] == ocklepod){
				kindaHelper[3] -= 1;
			}
		}
	}
	//console.log("second check "+kindaHelper); //debug
	//check to see if any are correct but in the wrong place
	for (var i = 0; i < ch; i++){
		if (currentGuess[i] == razorfin && kindaHelper[0] > 0){
			kindaHelper[0] -= 1;
			kinda += 1;
			//console.log(i + ",kinda 1");
		} else if (currentGuess[i] == ironback && kindaHelper[1] > 0){
			kindaHelper[1] -= 1;
			kinda += 1;
			//console.log(i + ", kinda 2");
		} else if (currentGuess[i] == pluncrab && kindaHelper[2] > 0){
			kindaHelper[2] -= 1;
			kinda += 1;
			//console.log(i + ", kinda 3");
		} else if (currentGuess[i] == ocklepod && kindaHelper[3] > 0){
			kindaHelper[3] -= 1;
			kinda += 1;
			//console.log(i + ", kinda 4");
		}
	}
	//calculate the ones that were completely wrong
	lolno = ch - (exact + kinda); //why is it easier to find out how many is wrong :3
	
	
	//update on findings:
	previousGuessHtml += "Right Place: " + exact + "; Right Brawler, Wrong Place: " + kinda + "; Wrong Brawler: " + lolno + "<br/>";
	
	//YOU WIN
	if (exact == ch){
		var text = "Congrats! You've solved the code! This match took place in the " + rreg + " region. ";
		if (bozoForgot){
			text += "At least one person in this match forgot to buy a brawler! Instead, a placeholder Razorfin was put in that place. Can you guess who forgot?";
		}
		alert(text);
		return;
	}
	
	// //clear out the current guess "cache"
	//generateNewGuess();
	//I don't actually want to clear it
	drawCurrentGuesses();
	
	//output
	var displayContainer2 = document.getElementById("previous_guess");
	displayContainer2.innerHTML=previousGuessHtml;
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
	
}

function cycleInput(id, current){ //a button will send a call to cycle. this will do it.
	//console.log("cycleInput " + id + ", " + current);
	if (currentGuess[id] == razorfin){
		currentGuess[id] = ironback;
	} else if (currentGuess[id] == ironback){
		currentGuess[id] = pluncrab;
	} else if (currentGuess[id] == pluncrab){
		currentGuess[id] = ocklepod;
	} else {
		currentGuess[id] = razorfin;
	}
	drawCurrentGuesses();
}

function generateNewGuess(){
	for (var i = 0; i < ch; i++){
		currentGuess[i] = razorfin;
	}
	drawCurrentGuesses();
}

//initial set-up, since currentGuess is empty initially
generateNewGuess();