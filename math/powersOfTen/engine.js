//the first number
var coefficient1;
var exponent1;

//second number
var coefficient2;
var exponent2;

//stored answer
var coefficient3;
var exponent3;

//helps mitigate rounding errors
var offset = 0.001

//determines whether the second number is added or subtracted to the first. can only equal -1 or 1
var multiplier = 1;

//correct streak
var correct = 0;

function generateNumbers() {
	coefficient1 = randomIntFromInterval(1, 99)/10;
	coefficient2 = randomIntFromInterval(1, 98)/10;
	if (coefficient2 == coefficient1){coefficient2 += 0.1; } //this has happened before
	exponent1 = randomIntFromInterval(-20, 20);
	exponent2 = exponent1 + randomIntFromInterval(-1, 1); //so exp1 and exp2 don't greatly deviate from each other
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
	
	var sign = '+';
	if (multiplier < 0) { sign = '-'; }
	
	//draw question
	html += '<h1>' + coefficient1 + ' × 10<sup>' + exponent1 + '</sup> ' + sign + ' ' + coefficient2 + ' × 10<sup>' + exponent2 + '</sup></h1><br/>';
	
	//draw inputs
	//drop down select
	html += '<h2><select style="inline" id="wattup"><option>-</option><option>+</option></select>';
	//input textfields
	html += '<input type="text" id="text1" maxlength="1" size="1">.<input type="text" id="text2" maxlength="4" size="4"> × 10<sup><input type="text" id="text3" maxlength="4" size="4"></sup></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
}

function submitAnswer(){
	var coefficientAnswer = parseInt(document.getElementById("text1").value) + (parseInt(document.getElementById("text2").value) / (Math.pow(10, document.getElementById("text2").value.length)));
	var exponentAnswer = parseInt(document.getElementById("text3").value);
	if (!coefficientAnswer || !exponentAnswer){
		alert("Error: coefficientAnswer=" + coefficientAnswer + " and exponentAnswer=" + exponentAnswer);
		return;
	}
	
	//make coefficientAnswer if negative is selected
	var e = document.getElementById('wattup');
	var str = e.options[e.selectedIndex].text;
	var negative = false;
	if (str == '-'){negative = true};
	if ((coefficient3 > 0 && negative) || (coefficient3 < 0 && !negative)){
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#E68A00">Incorrect<h3>';
		correct = 0;
	} else if (isOffset(coefficient3, coefficientAnswer, offset) && exponent3 == exponentAnswer){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		generateNumbers();
	} else {
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#990000">Incorrect<h3>';
		correct = 0;
	}

}

function calculateAnswer(){
	//case 1: exponent2 < exponent1
	if (exponent2 < exponent1){
		coefficient2 /= 10;
		exponent2++;
		console.log("less: (" + coefficient1 + ", " + exponent1 + "), (" + coefficient2 + ", " + exponent2 + ")");
	} //case 2: exponent2 > exponent1
	else if (exponent2 > exponent1){
		coefficient2 *= 10;
		exponent2--;
		console.log("greater: (" + coefficient1 + ", " + exponent1 + "), (" + coefficient2 + ", " + exponent2 + ")");
	} //(implicit) case 3: exponent2 == exponent1. do nothing
	
	//combine coefficients
	coefficient3 = coefficient1 + (coefficient2 * multiplier);
	exponent3 = exponent1;
	console.log("answer: (" + coefficient3 + ", " + exponent3 + ")");

	//adjust to fit the standards of scientific notation
	if (Math.abs(coefficient3) > 100){
		coefficient3 /= 10;
		exponent3++;
	}
	if (Math.abs(coefficient3) > 10){
		coefficient3 /= 10;
		exponent3++;
	}
	if (Math.abs(coefficient3) < 0.1){
		coefficient3 *= 10;
		exponent3--;
	}
	if (Math.abs(coefficient3) < 1){
		coefficient3 *= 10;
		exponent3--;
	}	
	
}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function isOffset(number1, number2, offset){
	if (number1 - number2 < offset || number2 - number1 < offset){
		return true;
	}
	return false;
}