//output variables
var previousGuessHtml = '';
var currentGuessHtml = '';
var navbarHtml = ''; //technically it isn't a navbar but ok

//gameplay handlers
var champs = []; //random top jug mid sup adc top jug mid sup adc
var currentGuess = ["3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611", "3611"];
var answer = [];
var answerCount = [0, 0, 0, 0]; //convenience; counts number of times [razor, iron, plun, ockl] appears in answer
var noOfGuesses = 0;
var win = false;

//item ID
var razorfin = "3611";
var ironback = "3612";
var pluncrab = "3613";
var ocklepod = "3614";

//run this function to initialize the game
function init(){
	//generateTeams();
	//generateAnswer();
	setUp();
	drawStickyHeader();
	drawCurrentGuesses();
}

//run this function to, uh, RESET the game
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

//get a random champ+brawler simultaneously
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
						answerCount[k] += 1; 
						//console.log(k+3611);
						break loop1;
					}
				}
			}			
		}
	}
}

//Draws the champion portraits at the top of the screen
function drawStickyHeader(){

	navbarHtml = '';

	//adding the images
	for (var i = 0; i < ch; i++){
		var color;
		if (i < 5){color = "blue"} else {color = "red"} //red team blue team ;d
		
		navbarHtml += '<img src="http://ddragon.leagueoflegends.com/cdn/5.15.1/img/champion/' + champs[i] + '.png" alt="' + champs[i] + '" style="width:' + imagewidth + 'px;height:' + imagewidth + 'px;border:' + imgborder + 'px solid ' + color +';">';
	}
	
	var displayContainer = document.getElementById("stickybar");
	displayContainer.innerHTML=navbarHtml;
	
	
};

//Draws the images for the "current_guess" division based off of the currentGuess[] array
function drawCurrentGuesses(){
	if (!win){
	//empty
	currentGuessHtml = '';
	
	//cycle through the guess data
	for (var i = 0; i < ch; i++){
		currentGuessHtml += '<input type="image" src="Brawlers/' + currentGuess[i] + '.png" alt="' + idToBrawler(currentGuess[i]) + '" style="width:'+imagewidth+'px;height:'+imagewidth+'px;" onclick="cycleInput('+i+','+currentGuess[i]+')"/>';
	}
	
	//draw the submit button
	currentGuessHtml += '<br/><button type="button" class="btn btn-success" onclick="makeGuess();">Submit Guess</button>';
	
	//draw the clear button
	currentGuessHtml += '<button type="button" class="btn btn-danger" onclick="generateNewGuess();">Clear Guess</button>';

	//output
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
	}
};

//compares currentGuess[] with answer[] and marks how close the user was to the actual answer
function makeGuess(){
	//if you already won, you shouldn't run this function
	if (win) {return;}
	noOfGuesses += 1;
		
	//refill answerCount
	answerCount = [0, 0, 0, 0];
	//if answer is used, can't use it again for kinda count
	var usedAnswer = [];
	for (var i = 0; i < ch; i++){
		answerCount[answer[i]-3611]++;
	}
	
	solidifyPreviousGuess();
	
	//count how close the current guess is
	var exact = 0;
	var kinda = 0;
	var lolno = 0;
	for (var i = 0; i < ch; i++){
		if (currentGuess[i] == answer[i]){
			exact+=1;
			answerCount[answer[i]-3611]--;
			usedAnswer.push(true);
		} else {
			usedAnswer.push(false);
		}
	}
	for (var i = 0; i < ch; i++){
		if (usedAnswer[i] == false){
			if (currentGuess[i] == razorfin && answerCount[0] > 0){
				answerCount[0] -= 1;
				kinda += 1;
				//console.log(i + ",kinda 1");
			} else if (currentGuess[i] == ironback && answerCount[1] > 0){
				answerCount[1] -= 1;
				kinda += 1;
				//console.log(i + ", kinda 2");
			} else if (currentGuess[i] == pluncrab && answerCount[2] > 0){
				answerCount[2] -= 1;
				kinda += 1;
				//console.log(i + ", kinda 3");
			} else if (currentGuess[i] == ocklepod && answerCount[3] > 0){
				answerCount[3] -= 1;
				kinda += 1;
				//console.log(i + ", kinda 4");
			}
		}
	}
	//console.log(kinda);
	lolno = ch - exact - kinda;
	
	//update on findings:
	previousGuessHtml += '<br/>Correct: <span style="color:#006400;font-size:16px">' + exact + '</span>; Misplaced: <span style="color:#db8d00;font-size:16px">' + kinda + '</span>; Incorrect: <span style="color:#800000;font-size:16px">' + lolno + '</span>;<br/>';
	//previousGuessHtml += '<br/>Correct: <span style="color:#006400;font-size:16px">' + exact + '</span>; Incorrect: <span style="color:#800000;font-size:16px">' + lolno + '</span><br/>';
	
	//YOU WIN
	if (exact == ch){
		//console.log("winner");
		var guessText = "guess";
		if (noOfGuesses > 1){
			guessText += "es";
		}
		var text = "Congrats! You've solved the code! You took " + noOfGuesses + " " + guessText + ".";
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
		currentGuessHtml = '<button type="button" class="btn btn-primary" onclick="reset();">Reset Game</button>';
		currentGuessHtml += '<button type="button" class="btn btn-info" onclick="redirect();">Read the Dossier</button>';
	}
	
	//output
	var displayContainer2 = document.getElementById("previous_guess");
	displayContainer2.innerHTML=previousGuessHtml;
	var displayContainer = document.getElementById("current_guess");
	displayContainer.innerHTML=currentGuessHtml;
	
	//scroll to bottom of page
	window.scrollTo(0,document.body.scrollHeight);
	
};

//add the relevant images from currentGuess[] to the previous_guess HTML division
function solidifyPreviousGuess(){
	//solidify previous guess
	for (var i = 0; i < ch; i++){
		previousGuessHtml += '<img src="Brawlers/' + currentGuess[i] + '.png" alt="' + idToBrawler(currentGuess[i]) + '" style="width:'+imagewidth+'px;height:'+imagewidth+'px">'
	}
	currentGuessHtml = '';
}

//edits an element of currentGuess[]
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

function copyGuess(guess){ //guess is an ARRAY with 10 elements
	for (var i = 0; i < ch; i++){
		currentGuess[i] = guess[i];
	}
	drawCurrentGuesses();
}

//resets currentGuess[]
function generateNewGuess(){
	for (var i = 0; i < ch; i++){
		currentGuess[i] = razorfin;
	}
	drawCurrentGuesses();
};

//unused helper function
function idToBrawler(s){
	if (s == razorfin){ return "razorfin"; }
	else if (s == ironback){ return "ironback"; }
	else if (s == pluncrab){ return "plundercrab"; }
	else if (s == ocklepod){ return "ocklepod"; }
};

function redirect(){
window.location.href = "documentation.html";
}