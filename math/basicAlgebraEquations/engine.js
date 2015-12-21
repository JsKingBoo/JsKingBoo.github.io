//coef1 (x) + const1 = coef2 (x) + const2

var coef1;
var coef2;
var const1;
var const2;
var frac1;
var frac2;

//min/max values
var efMin = -9;
var efMax = 9;

var stMin = -13;
var stMax = 13;

//correct streak
var correct = 0;

function generateEquation(){
	coef1 = randomIntFromInterval(efMin, efMax);
	coef2 = randomIntFromInterval(efMin, efMax);
	while (coef2 == coef1){
		coef2 = randomIntFromInterval(efMin, efMax);
	}
	
	const1 = randomIntFromInterval(stMin, stMax);
	const2 = randomIntFromInterval(stMin, stMax);
	
	drawQuestion();
	calculateAnswer();
}

function drawQuestion(){
	//clear
	var html = '';
	var displayContainer = document.getElementById('holder');
	//document.getElementById('incorrect').innerHTML = '';
	
	var sign1 = '+ ';
	var term11 = coef1.toString() + 'x ';
	var term12 = Math.abs(const1).toString();
	var sign2 = '+ ';
	var term21 = coef2.toString() + 'x ';
	var term22 = Math.abs(const2).toString();
	if (const1 < 0) { sign1 = '- '; }
	if (const2 < 0) { sign2 = '- '; }
	if (term11 == '0x ') { term11 = ''; sign1 = ''; }
	if (term21 == '0x ') { term21 = ''; sign2 = ''; }
	
	
	//draw question
	html += '<h1>' + term11 + sign1 + term12 + ' = ' + term21 + sign2 + term22 + '</h1><br/>';
	
	//draw inputs
	//input textfields
	html += '<h2><input type="text" id="text1" maxlength="4" size="4" />/<input type="text" id="text2" maxlength="4" size="4" /></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
}

function submitAnswer(){
	var numum = parseInt(document.getElementById("text1").value)
	var denom = parseInt(document.getElementById("text2").value)
	
	if (!numum && numum != 0){
		alert("Error: numum=" + numum);
		return;
	}
	if (!denom && denom != 0){
		alert("Error: denom=" + denom);
		return;
	}
	
	if ((numum/denom) == (frac1/frac2)){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		generateEquation();
	} else {
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#990000">Incorrect<h3>';
		correct = 0;
	}

}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function calculateAnswer(){
	frac1 = const2 - const1;
	frac2 = coef1 - coef2;
	//frac1/frac2
}

