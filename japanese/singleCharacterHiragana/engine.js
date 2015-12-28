var answers = [
["あ","a"],
["い","i"],
["う","u"],
["え","e"],
["お","o"],
["か","ka"],
["き","ki"],
["く","ku"],
["け","ke"],
["こ","ko"],
["さ","sa"],
["し","shi"],
["す","su"],
["せ","se"],
["そ","so"],
["た","ta"],
["ち","chi"],
["つ","tsu"],
["て","te"],
["と","to"],
["な","na"],
["に","ni"],
["ぬ","nu"],
["ね","ne"],
["の","no"],
["は","ha"],
["ひ","hi"],
["ふ","fu"],
["へ","he"],
["ほ","ho"],
["ま","ma"],
["み","mi"],
["む","mu"],
["め","me"],
["も","mo"],
["や","ya"],
["ゆ","yu"],
["よ","yo"],
["ら","ra"],
["り","ri"],
["る","ru"],
["れ","re"],
["ろ","ro"],
["わ","wa"],
["を","wo"],
["ん","n"],
["が","ga"],
["ぎ","gi"],
["ぐ","gu"],
["げ","ge"],
["ご","go"],
["ざ","za"],
["じ","ji"],
["ず","zu"],
["ぜ","ze"],
["ぞ","zo"],
["だ","da"],
["ぢ","ji"],
["づ","dzu"],
["で","de"],
["ど","do"],
["ば","ba"],
["び","bi"],
["ぶ","bu"],
["べ","be"],
["ぼ","bo"],
["ぱ","pa"],
["ぴ","pi"],
["ぷ","pu"],
["ぺ","pe"],
["ぽ","po"]
];

var store;
var correct = 0;

function generateQuestion(){
	//clear
	var html = '';
	var displayContainer = document.getElementById('holder');

	var id = randomIntFromInterval(0, answers.length)
	var jpnchar = answers[id][0];
	store = answers[id][1];
	
	//draw question
	html += '<h1>' + jpnchar + '</h1><br/>';
	
	//draw inputs
	//input textfields
	html += '<h2><input type="text" id="text1" maxlength="3" size="3"></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
}

function submitAnswer(){
	var answer = document.getElementById("text1").value

	if (answer == store){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		generateQuestion();
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
