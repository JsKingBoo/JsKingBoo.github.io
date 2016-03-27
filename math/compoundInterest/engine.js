//F = P(1 + i)^n
//P = F/(1 + i)^n
//n = log (F/P) / log(1 + i)
//i = (F/P)^(1/n) - 1

//randomly generate P, i, and n
//calculate F based on those three

var P;
var i;
var n;
var year;
var F;
var missingValue;

var possibleNValues = [1, 2, 4, 6, 12];
var correspondNText = ["annually (once a year)", "semiannually (twice a year)", "quarterly (four times a year)", "bimonthly (six times a year)", "monthly (twelve times a year)"];

//helps mitigate rounding errors
var offset = 1;
var answer;

//correct streak
var correct = 0;

function generateQuestion() {
	P = randomIntFromInterval(1, 99)*1000;
	i = randomIntFromInterval(2, 15)/100;
	n = randomIntFromInterval(0, 4);
	year = randomIntFromInterval(2, 10);
	//console.log(1 + i + " " + possibleNValues[n] * year);
	F = (P * Math.pow(1 + i, possibleNValues[n] * year));
	F = roundTwoDecimals(F);
	//convert from decimal to percent
	i *= 100;
	i = Math.round(i); //damn rounding errors
	missingValue = randomIntFromInterval(0, 3);
	
	//calculate answer, draw questions
	drawQuestion();
}

function drawQuestion(){
	//clear
	var html = '';
	var displayContainer = document.getElementById('holder');
	//document.getElementById('incorrect').innerHTML = '';
	
	var textPut = [P, i, n, F, year];
	answer = textPut[missingValue];
	textPut[missingValue] = "???";
	var NText;
	if (missingValue == 2){
		NText = "??? time(s) per year";
	} else {
		NText = correspondNText[n];
	}
	
	if (missingValue == 0 || missingValue == 3){
		offset = 1.0;
	} else {
		offset = 0.5;
	}
	
	//draw question
	html += '<h3>You initally start with $' + textPut[0] + '.00 and invest it at a rate of ' + textPut[1] + '%. Interest is compounded at that rate ' + NText + '. You have $' + textPut[3] + ' after ' + textPut[4] + ' years. Find the missing value.</h3>';
	
	//draw inputs
	//input textfields
	html += '<input type="text" id="text1" maxlength="20" size="20" style="font-size:24px">'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
}

function submitAnswer(){
	var submitted = parseInt(document.getElementById("text1").value);
	
	if (!submitted){
		alert("Error: submitted=" + submitted);
		return;
	}
	
	//make coefficientAnswer if negative is selected

	if (!isOffset(submitted, answer, offset)){
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#E68A00">Incorrect<h3>';
		correct = 0;
	} else {
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		generateQuestion();
	}

}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function roundTwoDecimals(number){
	return Math.round(number * 100)/100
}

function isOffset(number1, number2, offset){
	if (number1 - number2 < offset || number2 - number1 < offset){
		return true;
	}
	return false;
}