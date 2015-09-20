//the first number
var num1;

//second number
var num2;

//stored answer
var num3;

// min/max values
var Cmin = -99;
var Cmax = 99;

//determines whether the second number is added or subtracted to the first. can only equal -1 or 1
var multiplier = 1;

//correct streak
var correct = 0;

function generateNumbers() {
	num1 = randomIntFromInterval(Cmin, Cmax);
	num2 = randomIntFromInterval(Cmin, Cmax);
	multiplier = (randomIntFromInterval(1, 2) * -2) + 3;
	
	//calculate answer, draw questions
	drawQuestion();
	calculateAnswer();
}

function drawQuestion(){
	//clear
	var html = '';
	var displayContainer = document.getElementById('holder');
	//document.getElementById('incorrect').innerHTML = '';
	
	var sign = '+ ';
	var end = '';
	if (multiplier < 0) { sign = '- '; }
	
	//add parentheses num2 is negative
	if (num2 < 0) { sign += '('; end = ')'; }
	
	//draw question
	html += '<h1>' + num1 + ' ' + sign + num2 + end + '</h1><br/>';
	
	//draw inputs
	//input textfields
	html += '<h2><input type="text" id="text1" maxlength="4" size="4"></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
}

function submitAnswer(){
	var numAnswer = parseInt(document.getElementById("text1").value)
	
	if (!numAnswer && numAnswer != 0){
		alert("Error: numAnswer=" + numAnswer);
		return;
	}
	
	if (numAnswer == num3){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		generateNumbers();
	} else {
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#990000">Incorrect<h3>';
		correct = 0;
	}

}

function calculateAnswer(){
	num3 = num1 + (num2 * multiplier);
}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
