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

var takenChar = [];

for (var i = 0; i < answers.length; i++){
	takenChar.push(false);
}

var store;
var correct = 0;

function generateQuestion(erase){
	//clear
	if (erase){
		document.getElementById('incorrect').innerHTML = '';
	}
	var html = '';
	var displayContainer = document.getElementById('holder');

	var id = randomValidID(0, answers.length)
	var jpnchar = answers[id][0];
	store = id;
	//store = answers[id][1];
	
	//draw question
	html += '<h1>' + jpnchar + '</h1><br/>';
	
	//draw inputs
	//input textfields
	html += '<h2><input type="text" id="text1" maxlength="3" size="3"></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	
	displayContainer.innerHTML = html;
	resetGame();
}

function submitAnswer(){
	var answer = document.getElementById("text1").value

	if (answer == answers[store][1]){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct<h3><p>Current streak: ' + correct;
		takenChar[store] = true;
		generateQuestion();
	} else {
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#990000">Incorrect<h3><button type="button" class="btn btn-primary btn-lg" onclick="generateQuestion(true);">Skip?</button>';
		correct = 0;
	}

}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomValidID(){
	var s;
	do {
		s = randomIntFromInterval(0, answers.length);
	} while (takenChar[s]);
	return s;
}

function resetGame(){
	var thresh = 2;
	//check
	for (var i = 0; i < answers.length; i++){
		if (takenChar[i] == false){
			thresh--;
		}
	}
	
	if (thresh < 0){
		for (var i = 0; i < answers.length; i++){
			takenChar[i] = false;
		}
	}
}