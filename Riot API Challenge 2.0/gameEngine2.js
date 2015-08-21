//output variables
var previousGuessHtml = '';
var currentGuessHtml = '';
var navbarHtml = ''; //technically it isn't a navbar but ok

//gameplay handlers
var champs = []; //random top jug mid sup adc top jug mid sup adc
var currentGuess = ["3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611"];
var answer = []; //convenience
var answerCount = [0, 0, 0, 0]; //convenience; counts number of times [razor, iron, plun, ockl] appears in answer
var noOfGuesses = 0;
var win = false;

//item ID
var razorfin = "3611";
var ironback = "3612";
var pluncrab = "3613";
var ocklepod = "3614";

function init(){
	//generateTeams();
	//generateAnswer();
	setUp();
	drawStickyHeader(champs);
	drawCurrentGuesses();
}

function reset(){
	
	previousGuessHtml = '';
	currentGuessHtml = '';
	navbarHtml = '';

	champs = []; 
	currentGuess = ["3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611"];
	answer = [];
	answerCount = [0, 0, 0, 0]; 
	noOfGuesses = 0;
	win = false;
	
	document.getElementById("previous_guess").innerHTML='';
	document.getElementById("current_guess").innerHTML='';
	
	init();
}
/*
function generateTeams(){
	
	//fuck jquery
	
	//ASSERT (json[x]'s subvalues add up to 1.0)
	
	//for both red team and blue team
	for (var i = 0; i < 2; i++){
		
		//cycle through all positions
		for (var j in pickrates){
			
			//generate random number
			var rand = Math.random();
			var currentCum = 0;
			
			//cycle through all possible champs in said positions
			for (var k in pickrates[j]){
				
				//add champ's value to currentCum. if currentCum is now greater than rand, push that champ to the champs array
				currentCum += pickrates[j][k];
				if (currentCum >= rand){
					//champs.push("http://ddragon.leagueoflegends.com/cdn/5.15.1/img/champion/"+k+".png");
					champs.push(k);
					console.log(k);
					break;
				}
			}
		}
	}
};

function generateAnswer(){
	//ASSERT champs is filled with 10 entries
	//cycle through all champs in champarray
	
	for (var i = 0; i < ch; i++){

		//locate their entry
		var position = i % (ch/2);
		
		if (position == 0){
			//coordinated teams
			var coor = Math.random();
			if (coor < 0.005){
				//coordinated
				var temp = Math.floor(Math.random() * 3);
				for (var k = 0; k < ch/2; k++){
					answer.push(temp+3611);
				}
				i += ch/2;
			}			
		}	
		
		var poskey = '';
		if (position == 0){poskey = 'top';}
		else if (position == 1){poskey = 'jug';}
		else if (position == 2){poskey = 'mid';}
		else if (position == 3){poskey = 'sup';}
		else if (position == 4){poskey = 'adc';}
		for (var j in brawlerrates[poskey]){
			if (j == champs[i]){
				//weighted random to find their brawler
				var rand = Math.random();
				var currentCum = 0;
				
				//cycle through brawler probabilities
				for (var k = 0; k < 4; k++){
					
					//add brawler's value to currentCum. if currentCum is now greater than rand, push that to the answer array
					currentCum += brawlerrates[poskey][j][k];
					if (currentCum >= rand){
						answer.push(k+3611);
						console.log(k+3611);
						break;
					}
				}				
			}
		}
	}	
};
*/
function setUp(){
	//for both red and blue team
	for (var a = 0; a < 2; a++){
		
		//for each position (top jug mid sup bot etc...)
		for (var i in champdata){
			
			//first, add up all numbers in the subarray
			var totalsum = 0;
			for (var j in champdata[i]){
				for (var k in champdata[i][j]){
					totalsum += champdata[i][j][k];
				}
			}
			
			//generate a random number
			var rand = Math.floor(Math.random() * totalsum);
			var currentCum = 0;
			
			//add brawler values to currentCum. if currentCum > rand then push that champ with that brawler to the array
			loop1: for (var j in champdata[i]){
				for (var k = 0; k < 4; k++){
					currentCum += champdata[i][j][k];
					if (currentCum > rand){
						champs.push(j);
						//console.log(j);
						answer.push(k+3611);
						//console.log(k+3611);
						break loop1;
					}
				}
			}			
			
		}
	}
}


function drawStickyHeader(champURL){ //"champURL" is an ARRAY

	//this is like the worst way to do things
	navbarHtml = '';

	navbarHtml += '<nav class="navbar navbar-static-top" style="margin-left:' + imagewidth/2 + 'px">';
	navbarHtml += '  <div class="container-fluid">';


	navbarHtml += '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	navbarHtml += '      <ul class="nav navbar-nav">';

	//adding the images (finally)
	for (var i = 0; i < 10; i++){ //magic numbers lololol
		var color;
		if (i < 5){color = "blue"} else {color = "red"} //red team blue team ;d
		
		navbarHtml += '       <li><img src="http://ddragon.leagueoflegends.com/cdn/5.15.1/img/champion/' + champURL[i] + '.png" alt="' + champURL[i] + '" style="width:' + imagewidth + 'px;height:' + imagewidth + 'px;border:' + imgborder + 'px solid ' + color +'"></li>';
	}

	navbarHtml += '      </ul>';
	navbarHtml += '    </div><!-- /.navbar-collapse -->';
	navbarHtml += '  </div><!-- /.container-fluid -->';
	navbarHtml += '</nav> ';
	
	var displayContainer = document.getElementById("stickybar");
	displayContainer.innerHTML=navbarHtml;
	
	
};

function drawCurrentGuesses(){
	if (!win){
	//empty
	currentGuessHtml = '';
	
	//cycle through the guess data
	for (var i = 0; i < ch; i++){
		currentGuessHtml += '<input type="image" src="Brawlers/' + currentGuess[i] + '.png" alt="' + idToBrawler(currentGuess[i]) + '" style="width:'+imagewidth+'px;height:'+imagewidth+'px" onclick="cycleInput('+i+','+currentGuess[i]+')"/>';
	}
	
	//draw the submit button
	currentGuessHtml += '<button type="button" class="btn btn-success" onclick="makeGuess();">Submit Guess</button>';
	
	//draw the clear button
	currentGuessHtml += '<button type="button" class="btn btn-danger" onclick="generateNewGuess();">Clear Guess</button>';

	//output
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
	}
};

function makeGuess(){
	//if you already, you shouldn't run this function
	if (win) {return;}
	noOfGuesses += 1;
		
	solidifyPreviousGuess();
	
	//count how close the current guess is
	var exact = 0;
	var lolno = 0;
	for (var i = 0; i < ch; i++){
		if (currentGuess[i] == answer[i]){
			exact+=1;
		}
	}
	lolno = ch - exact;
	
	//update on findings:
	//previousGuessHtml += 'Right Place: <span style="color:#006400;font-size:16px">' + exact + '</span>; Right Brawler, Wrong Place: <span style="color:#db8d00;font-size:16px">' + kinda + '</span>; Wrong Brawler: <span style="color:#800000;font-size:16px">' + lolno + '</span><br/>';
	previousGuessHtml += 'Correct: <span style="color:#006400;font-size:16px">' + exact + '</span>; Incorrect: <span style="color:#800000;font-size:16px">' + lolno + '</span><br/>';
	
	//YOU WIN
	if (exact == ch){
		//console.log("winner");
		var guessText = "guess";
		if (noOfGuesses > 1){
			guessText += "es";
		}
		var text = "Congrats! You've solved the code! You took " + noOfGuesses + " " + guessText + ".\nRefresh the page to try again!\n";
		alert(text);
		win = true;
	} else {
		//something was supposed to go here but i forgot
	}
	
	// //clear out the current guess "cache"
	//generateNewGuess();
	//I changed my mind, I don't actually want to clear it. that's why it's commented out.
	
	drawCurrentGuesses();
	
	if (win){
		//solidifyPreviousGuess();
		currentGuessHtml = '<button type="button" class="btn btn-info" onclick="reset();">Reset Game</button>';
	}
	
	//output
	var displayContainer2 = document.getElementById("previous_guess");
	displayContainer2.innerHTML=previousGuessHtml;
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
	
	//scroll to bottom of page
	window.scrollTo(0,document.body.scrollHeight);
	
};

function solidifyPreviousGuess(){
	//solidify previous guess
	for (var i = 0; i < ch; i++){
		previousGuessHtml += '<img src="Brawlers/' + currentGuess[i] + '.png" alt="' + idToBrawler(currentGuess[i]) + '" style="width:'+imagewidth+'px;height:'+imagewidth+'px">'
	}
	currentGuessHtml = '';
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
};

function generateNewGuess(){
	for (var i = 0; i < ch; i++){
		currentGuess[i] = razorfin;
	}
	drawCurrentGuesses();
};

function idToBrawler(s){
	if (s == razorfin){ return "razorfin"; }
	else if (s == ironback){ return "ironback"; }
	else if (s == pluncrab){ return "plundercrab"; }
	else if (s == ocklepod){ return "ocklepod"; }
};

//initial set-up, since currentGuess is empty initially
//generateNewGuess();