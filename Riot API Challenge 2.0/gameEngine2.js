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

//formatting + utility
var w = window.innerWidth;
var imgborder = 2;
var imagewidth = (w * 9 / 100) - (imgborder * 2);
var ch = 10;

function init(){
	//generateTeams();
	//generateAnswer();
	setUp();
	drawStickyHeader(champs);
	drawCurrentGuesses();
}

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

	navbarHtml += '<nav class="navbar navbar-static-top" style="margin-left:0px">';
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

function drawPreviousGuesses(){
	var displayContainer = document.getElementById("previous_guess");
	displayContainer.innerHTML=previousGuessHtml;
}

function drawCurrentGuesses(){
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
};

function makeGuess(){
	if (!win){
		noOfGuesses += 1;
	}
	
	//solidify previous guess
	for (var i = 0; i < ch; i++){
		previousGuessHtml += '<img src="Brawlers/' + currentGuess[i] + '.png" alt="' + idToBrawler(currentGuess[i]) + '" style="width:'+imagewidth+'px;height:'+imagewidth+'px">'
	}
	currentGuessHtml = '';
	
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
		var text = "Congrats! You've solved the code! You took " + noOfGuesses + " guesses.\nRefresh the page to try again!\n";
		alert(text);
		win = true;
		return;
	} else {
		//something was supposed to go here but i forgot
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
	
	//scroll to bottom of page
	window.scrollTo(0,document.body.scrollHeight);
	
};

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