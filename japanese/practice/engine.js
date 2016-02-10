var answers = [];

var HconNon = [
["あ","a"],
["い","i"],
["う","u"],
["え","e"],
["お","o"]
];

var HconK = [
["か","ka"],
["き","ki"],
["く","ku"],
["け","ke"],
["こ","ko"]
];
var HconKd = [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]];

var HconS = [
["さ","sa"],
["し","shi"],
["す","su"],
["せ","se"],
["そ","so"]
];
var HconSd = [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]];

var HconT = [
["た","ta"],
["ち","chi"],
["つ","tsu"],
["て","te"],
["と","to"]
];
var HconTd = [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]];

var HconN = [
["な","na"],
["に","ni"],
["ぬ","nu"],
["ね","ne"],
["の","no"]
];
var HconNd = [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]];

var HconH = [
["は","ha"],
["ひ","hi"],
["ふ","fu"],
["へ","he"],
["ほ","ho"]
];
var HconHd = [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]];

var HconM = [
["ま","ma"],
["み","mi"],
["む","mu"],
["め","me"],
["も","mo"]
];
var HconMd = [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]];

var HconY = [
["や","ya"],
["ゆ","yu"],
["よ","yo"]
];

var HconR = [
["ら","ra"],
["り","ri"],
["る","ru"],
["れ","re"],
["ろ","ro"]
];
var HconRd = [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]];

var HconW = [
["わ","wa"],
["を","wo"]
];

var HconNNN = [
["ん","n"]
];

var HconG = [
["が","ga"],
["ぎ","gi"],
["ぐ","gu"],
["げ","ge"],
["ご","go"]
];
var HconGd = [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]];

var HconZ = [
["ざ","za"],
["じ","ji"],
["ず","zu"],
["ぜ","ze"],
["ぞ","zo"]
];
var HconZd = [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]];

var HconD = [
["だ","da"],
["ぢ","ji"],
["づ","dzu"],
["で","de"],
["ど","do"]
];
var HconDd = [["ぢゃ", "ja"], ["ぢゅ", "ju"], ["ぢょ", "jo"]];

var HconB = [
["ば","ba"],
["び","bi"],
["ぶ","bu"],
["べ","be"],
["ぼ","bo"]
];
var HconBd = [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]];

var HconP = [
["ぱ","pa"],
["ぴ","pi"],
["ぷ","pu"],
["ぺ","pe"],
["ぽ","po"]
];
var HconPd = [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]];

var HconVVV = [
["ゔ","u"]
];

//////////////////////////////////////////////////////////

var KconNon = [
["ア","a"],
["イ","i"],
["ウ","u"],
["エ","e"],
["オ","o"]
];

var KconK = [
["カ","ka"],
["キ","ki"],
["ク","ku"],
["ケ","ke"],
["コ","ko"]
];
var KconKd = [["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"]];

var KconS = [
["サ","sa"],
["シ","shi"],
["ス","su"],
["セ","se"],
["ソ","so"]
];
var KconSd = [["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"]];

var KconT = [
["タ","ta"],
["チ","chi"],
["ツ","tsu"],
["テ","te"],
["ト","to"]
];
var KconTd = [["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"]];

var KconN = [
["ナ","na"],
["ニ","ni"],
["ヌ","nu"],
["ネ","ne"],
["ノ","no"]
];
var KconNd = [["チャ", "nya"], ["チュ", "nyu"], ["チョ", "nyo"]];

var KconH = [
["ハ","ha"],
["ヒ","hi"],
["フ","fu"],
["ヘ","he"],
["ホ","ho"]
];
var KconHd = [["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"]];

var KconM = [
["マ","ma"],
["ミ","mi"],
["ム","mu"],
["メ","me"],
["モ","mo"]
];
var KconMd = [["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"]];

var KconY = [
["ヤ","ya"],
["ユ","yu"],
["ヨ","yo"]
];

var KconR = [
["ラ","ra"],
["リ","ri"],
["ル","ru"],
["レ","re"],
["ロ","ro"]
];
var KconRd = [["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"]];

var KconW = [
["ワ","wa"],
["ヲ","wo"]
];

var KconNNN = [
["ン","n"]
];

var KconG = [
["ガ","ga"],
["ギ","gi"],
["グ","gu"],
["ゲ","ge"],
["ゴ","go"]
];
var KconGd = [["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"]];

var KconZ = [
["ザ","za"],
["ジ","ji"],
["ズ","zu"],
["ゼ","ze"],
["ゾ","zo"]
];
var KconZd = [["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"]];

var KconD = [
["ダ","da"],
["ヂ","ji"],
["ヅ","dzu"],
["デ","de"],
["ド","do"]
];
var KconDd = [["ヂャ", "ja"], ["ヂュ", "ju"], ["ヂョ", "jo"]];

var KconB = [
["バ","ba"],
["ビ","bi"],
["ブ","bu"],
["ベ","be"],
["ボ","bo"]
];
var KconBd = [["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"]];

var KconP = [
["パ","pa"],
["ピ","pi"],
["プ","pu"],
["ペ","pe"],
["ポ","po"]
];
var KconPd = [["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]];

var store = -1;
var prevStore = -1;
var correct = 0;
var incorrect = 0;

if (getCookieValue("exists")!=""){
	readCookies();
}
//console.log("document.cookie:::"+ document.cookie);

function generateQuestion(erase){
	//clear
	if (erase){
		document.getElementById('incorrect').innerHTML = '';
	}
	var html = '';
	var displayContainer = document.getElementById('holder');
	answers = [];
	
	var hYoon = document.getElementById('Hyoon').checked;
	//HconNon
	if (document.getElementById('HconNon').checked){
		answers = answers.concat(HconNon);
	}
	//HconK
	if (document.getElementById('HconK').checked){
		answers = answers.concat(HconK);
		if (hYoon){
			answers = answers.concat(HconKd);
		}
	}
	//HconS
	if (document.getElementById('HconS').checked){
		answers = answers.concat(HconS);
		if (hYoon){
			answers = answers.concat(HconSd);
		}
	}
	//HconT
	if (document.getElementById('HconT').checked){
		answers = answers.concat(HconT);
		if (hYoon){
			answers = answers.concat(HconTd);
		}
	}
	//HconN
	if (document.getElementById('HconN').checked){
		answers = answers.concat(HconN);
		if (hYoon){
			answers = answers.concat(HconNd);
		}
	}	
	//HconH
	if (document.getElementById('HconH').checked){
		answers = answers.concat(HconH);
		if (hYoon){
			answers = answers.concat(HconHd);
		}
	}	
	//HconM
	if (document.getElementById('HconM').checked){
		answers = answers.concat(HconM);
		if (hYoon){
			answers = answers.concat(HconMd);
		}
	}	
	//HconY
	if (document.getElementById('HconY').checked){
		answers = answers.concat(HconY);
	}	
	//HconR
	if (document.getElementById('HconR').checked){
		answers = answers.concat(HconR);
		if (hYoon){
			answers = answers.concat(HconRd);
		}
	}
	//HconW
	if (document.getElementById('HconW').checked){
		answers = answers.concat(HconW);
	}
	//HconNNN
	if (document.getElementById('HconNNN').checked){
		answers = answers.concat(HconNNN);
	}	
	//HconG
	if (document.getElementById('HconG').checked){
		answers = answers.concat(HconG);
		if (hYoon){
			answers = answers.concat(HconGd);
		}
	}
	//HconZ
	if (document.getElementById('HconZ').checked){
		answers = answers.concat(HconZ);
		if (hYoon){
			answers = answers.concat(HconZd);
		}
	}
	//HconD
	if (document.getElementById('HconD').checked){
		answers = answers.concat(HconD);
		if (hYoon){
			answers = answers.concat(HconDd);
		}
	}
	//HconB
	if (document.getElementById('HconB').checked){
		answers = answers.concat(HconB);
		if (hYoon){
			answers = answers.concat(HconBd);
		}
	}
	//HconP
	if (document.getElementById('HconP').checked){
		answers = answers.concat(HconP);
		if (hYoon){
			answers = answers.concat(HconPd);
		}
	}
	//HconVVV
	if (document.getElementById('HconVVV').checked){
		answers = answers.concat(HconVVV);
	}	
	
///////////////////////////////////////////////////////////////
	
	var kYoon = document.getElementById('Kyoon').checked;
	//KconNon
	if (document.getElementById('KconNon').checked){
		answers = answers.concat(KconNon);
	}
	//KconK
	if (document.getElementById('KconK').checked){
		answers = answers.concat(KconK);
		if (kYoon){
			answers = answers.concat(KconKd);
		}
	}
	//KconS
	if (document.getElementById('KconS').checked){
		answers = answers.concat(KconS);
		if (kYoon){
			answers = answers.concat(KconSd);
		}
	}
	//KconT
	if (document.getElementById('KconT').checked){
		answers = answers.concat(KconT);
		if (kYoon){
			answers = answers.concat(KconTd);
		}
	}
	//KconN
	if (document.getElementById('KconN').checked){
		answers = answers.concat(KconN);
		if (kYoon){
			answers = answers.concat(KconNd);
		}
	}	
	//KconH
	if (document.getElementById('KconH').checked){
		answers = answers.concat(KconH);
		if (kYoon){
			answers = answers.concat(KconHd);
		}
	}	
	//KconM
	if (document.getElementById('KconM').checked){
		answers = answers.concat(KconM);
		if (kYoon){
			answers = answers.concat(KconMd);
		}
	}	
	//KconY
	if (document.getElementById('KconY').checked){
		answers = answers.concat(KconY);
	}	
	//KconR
	if (document.getElementById('KconR').checked){
		answers = answers.concat(KconR);
		if (kYoon){
			answers = answers.concat(KconRd);
		}
	}
	//KconW
	if (document.getElementById('KconW').checked){
		answers = answers.concat(KconW);
	}
	//KconNNN
	if (document.getElementById('KconNNN').checked){
		answers = answers.concat(KconNNN);
	}	
	//KconG
	if (document.getElementById('KconG').checked){
		answers = answers.concat(KconG);
		if (kYoon){
			answers = answers.concat(KconGd);
		}
	}
	//KconZ
	if (document.getElementById('KconZ').checked){
		answers = answers.concat(KconZ);
		if (kYoon){
			answers = answers.concat(KconZd);
		}
	}
	//KconD
	if (document.getElementById('KconD').checked){
		answers = answers.concat(KconD);
		if (kYoon){
			answers = answers.concat(KconDd);
		}
	}
	//KconB
	if (document.getElementById('KconB').checked){
		answers = answers.concat(KconB);
		if (kYoon){
			answers = answers.concat(KconBd);
		}
	}
	//KconP
	if (document.getElementById('KconP').checked){
		answers = answers.concat(KconP);
		if (kYoon){
			answers = answers.concat(KconPd);
		}
	}
	
	if (answers.length <= 2){
		document.getElementById('error').innerHTML = '<h3 style="color:#990000">Error: too few choices selected</h3><h3>All choices have been automatically re-selected</h3>';
		selectAll();
		generateQuestion();
		return;
	}
	
	//generate new solution (store)
	prevStore = store;
	do {
		store = randomIntFromInterval(0, answers.length - 1);
	} while (store == prevStore);
	var jpnchar = answers[store][0];
	
	//show previous solution (if possible)
	if (prevStore >= 0 && document.getElementById("show-answer").checked){
		html += '<p> Previous solution: ' + answers[prevStore][1] 
		if (isHiragana(answers[prevStore][0])){
			html += ' (Hiragana)';
		} else {
			html += ' (Katakana)';
		}
		html += '</p>';
	}
	
	//draw question
	html += '<h1>' + jpnchar + '</h1><br/>';
	
	//draw inputs
	//input textfields
	html += '<h2><input type="text" id="text1" maxlength="3" size="3"></h2>'
	
	//draw submit button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="submitAnswer();">Submit Answer</button>'
	//draw refresh button
	html += '<button type="button" class="btn btn-primary btn-lg" onclick="softReset();">Refresh Question</button>'
	
	//set html
	displayContainer.innerHTML = html;
	
	//focus
	document.getElementById("text1").focus();
}

function submitAnswer(){
	var answer = document.getElementById("text1").value
	
	//clear error and put something in if if something is wrong
	document.getElementById('error').innerHTML = '';
	if (answer == ''){
		document.getElementById('error').innerHTML = '<h3 style="color:#990000">Error: empty answer</h3>';
		return;
	}

	if (answer == answers[store][1]){
		correct++;
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#00DD00">Correct</h3>';
		generateQuestion();
	} else {
		document.getElementById("text1").value = '';
		document.getElementById('incorrect').innerHTML = '<h3 style="color:#990000">Incorrect</h3><button type="button" class="btn btn-primary btn-lg" onclick="generateQuestion(true);">Skip?</button>';
		incorrect++;
	}
	var kda;
	if (incorrect == 0) {kda = 'Perfect'; } else {kda = (correct / incorrect).toFixed(2); }
	
	document.getElementById('incorrect').innerHTML += '<p> Score: ' + correct + '/' + incorrect + ' (' + kda + ')';

}

//helper
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function isHiragana(a){
	var allHiragana = ["あ","い","う","え","お","か","き","く","け","こ","きゃ","きゅ","きょ","さ","し","す","せ","そ","しゃ","しゅ","しょ","た","ち","つ","て","と","ちゃ","ちゅ","ちょ","な","に","ぬ","ね","の","ちゃ","ちゅ","ちょ","は","ひ","ふ","へ","ほ","ひゃ","ひゅ","ひょ","ま","み","む","め","も","みゃ","みゅ","みょ","や","ゆ","よ","ら","り","る","れ","ろ","りゃ","りゅ","りょ","わ","を","ん","が","ぎ","ぐ","げ","ご","ぎゃ","ぎゅ","ぎょ","ざ","じ","ず","ぜ","ぞ","じゃ","じゅ","じょ","だ","ぢ","づ","で","ど","ぢゃ","ぢゅ","ぢょ","ば","び","ぶ","べ","ぼ","びゃ","びゅ","びょ","ぱ","ぴ","ぷ","ぺ","ぽ","ぴゃ","ぴゅ","ぴょ","ゔ"];
	return allHiragana.indexOf(a) > -1;
}

function softReset(){
	document.getElementById('incorrect').innerHTML = '';
	if (correct > 0){
		correct--;
	}
	generateQuestion();
}

function hardReset(){
	store = -1;
	prevStore = -1;
	correct = 0;
	incorrect = 0;
	softReset();
}

//presets
function selectAllHiragana(){
	document.getElementById("HconNon").checked = true;
	document.getElementById("HconK").checked = true;
	document.getElementById("HconS").checked = true;
	document.getElementById("HconT").checked = true;
	document.getElementById("HconN").checked = true;
	document.getElementById("HconH").checked = true;
	document.getElementById("HconM").checked = true;
	document.getElementById("HconY").checked = true;
	document.getElementById("HconR").checked = true;
	document.getElementById("HconW").checked = true;
	document.getElementById("HconNNN").checked = true;
	document.getElementById("HconG").checked = true;
	document.getElementById("HconZ").checked = true;
	document.getElementById("HconD").checked = true;
	document.getElementById("HconB").checked = true;
	document.getElementById("HconP").checked = true;
	document.getElementById("HconVVV").checked = true;
	document.getElementById("Hyoon").checked = true;
	document.getElementById("KconNon").checked = false;
	document.getElementById("KconK").checked = false;
	document.getElementById("KconS").checked = false;
	document.getElementById("KconT").checked = false;
	document.getElementById("KconN").checked = false;
	document.getElementById("KconH").checked = false;
	document.getElementById("KconM").checked = false;
	document.getElementById("KconY").checked = false;
	document.getElementById("KconR").checked = false;
	document.getElementById("KconW").checked = false;
	document.getElementById("KconNNN").checked = false;
	document.getElementById("KconG").checked = false;
	document.getElementById("KconZ").checked = false;
	document.getElementById("KconD").checked = false;
	document.getElementById("KconB").checked = false;
	document.getElementById("KconP").checked = false;
	document.getElementById("Kyoon").checked = false;
}

function selectNonDakutenHiragana(){
	document.getElementById("HconNon").checked = true;
	document.getElementById("HconK").checked = true;
	document.getElementById("HconS").checked = true;
	document.getElementById("HconT").checked = true;
	document.getElementById("HconN").checked = true;
	document.getElementById("HconH").checked = true;
	document.getElementById("HconM").checked = true;
	document.getElementById("HconY").checked = true;
	document.getElementById("HconR").checked = true;
	document.getElementById("HconW").checked = true;
	document.getElementById("HconNNN").checked = true;
	document.getElementById("HconG").checked = false;
	document.getElementById("HconZ").checked = false;
	document.getElementById("HconD").checked = false;
	document.getElementById("HconB").checked = false;
	document.getElementById("HconP").checked = false;
	document.getElementById("HconVVV").checked = false;
	document.getElementById("Hyoon").checked = true;
	document.getElementById("KconNon").checked = false;
	document.getElementById("KconK").checked = false;
	document.getElementById("KconS").checked = false;
	document.getElementById("KconT").checked = false;
	document.getElementById("KconN").checked = false;
	document.getElementById("KconH").checked = false;
	document.getElementById("KconM").checked = false;
	document.getElementById("KconY").checked = false;
	document.getElementById("KconR").checked = false;
	document.getElementById("KconW").checked = false;
	document.getElementById("KconNNN").checked = false;
	document.getElementById("KconG").checked = false;
	document.getElementById("KconZ").checked = false;
	document.getElementById("KconD").checked = false;
	document.getElementById("KconB").checked = false;
	document.getElementById("KconP").checked = false;
	document.getElementById("Kyoon").checked = false;
}

function selectDakutenHiragana(){
	document.getElementById("HconNon").checked = false;
	document.getElementById("HconK").checked = false;
	document.getElementById("HconS").checked = false;
	document.getElementById("HconT").checked = false;
	document.getElementById("HconN").checked = false;
	document.getElementById("HconH").checked = false;
	document.getElementById("HconM").checked = false;
	document.getElementById("HconY").checked = false;
	document.getElementById("HconR").checked = false;
	document.getElementById("HconW").checked = false;
	document.getElementById("HconNNN").checked = false;
	document.getElementById("HconG").checked = true;
	document.getElementById("HconZ").checked = true;
	document.getElementById("HconD").checked = true;
	document.getElementById("HconB").checked = true;
	document.getElementById("HconP").checked = true;
	document.getElementById("HconVVV").checked = true;
	document.getElementById("Hyoon").checked = true;
	document.getElementById("KconNon").checked = false;
	document.getElementById("KconK").checked = false;
	document.getElementById("KconS").checked = false;
	document.getElementById("KconT").checked = false;
	document.getElementById("KconN").checked = false;
	document.getElementById("KconH").checked = false;
	document.getElementById("KconM").checked = false;
	document.getElementById("KconY").checked = false;
	document.getElementById("KconR").checked = false;
	document.getElementById("KconW").checked = false;
	document.getElementById("KconNNN").checked = false;
	document.getElementById("KconG").checked = false;
	document.getElementById("KconZ").checked = false;
	document.getElementById("KconD").checked = false;
	document.getElementById("KconB").checked = false;
	document.getElementById("KconP").checked = false;
	document.getElementById("Kyoon").checked = false;
}

function selectAllKatakana(){
	document.getElementById("HconNon").checked = false;
	document.getElementById("HconK").checked = false;
	document.getElementById("HconS").checked = false;
	document.getElementById("HconT").checked = false;
	document.getElementById("HconN").checked = false;
	document.getElementById("HconH").checked = false;
	document.getElementById("HconM").checked = false;
	document.getElementById("HconY").checked = false;
	document.getElementById("HconR").checked = false;
	document.getElementById("HconW").checked = false;
	document.getElementById("HconNNN").checked = false;
	document.getElementById("HconG").checked = false;
	document.getElementById("HconZ").checked = false;
	document.getElementById("HconD").checked = false;
	document.getElementById("HconB").checked = false;
	document.getElementById("HconP").checked = false;
	document.getElementById("HconVVV").checked = false;
	document.getElementById("Hyoon").checked = false;
	document.getElementById("KconNon").checked = true;
	document.getElementById("KconK").checked = true;
	document.getElementById("KconS").checked = true;
	document.getElementById("KconT").checked = true;
	document.getElementById("KconN").checked = true;
	document.getElementById("KconH").checked = true;
	document.getElementById("KconM").checked = true;
	document.getElementById("KconY").checked = true;
	document.getElementById("KconR").checked = true;
	document.getElementById("KconW").checked = true;
	document.getElementById("KconNNN").checked = true;
	document.getElementById("KconG").checked = true;
	document.getElementById("KconZ").checked = true;
	document.getElementById("KconD").checked = true;
	document.getElementById("KconB").checked = true;
	document.getElementById("KconP").checked = true;
	document.getElementById("Kyoon").checked = true;
}

function selectNonDakutenKatakana(){
	document.getElementById("HconNon").checked = false;
	document.getElementById("HconK").checked = false;
	document.getElementById("HconS").checked = false;
	document.getElementById("HconT").checked = false;
	document.getElementById("HconN").checked = false;
	document.getElementById("HconH").checked = false;
	document.getElementById("HconM").checked = false;
	document.getElementById("HconY").checked = false;
	document.getElementById("HconR").checked = false;
	document.getElementById("HconW").checked = false;
	document.getElementById("HconNNN").checked = false;
	document.getElementById("HconG").checked = false;
	document.getElementById("HconZ").checked = false;
	document.getElementById("HconD").checked = false;
	document.getElementById("HconB").checked = false;
	document.getElementById("HconP").checked = false;
	document.getElementById("HconVVV").checked = false;
	document.getElementById("Hyoon").checked = false;
	document.getElementById("KconNon").checked = true;
	document.getElementById("KconK").checked = true;
	document.getElementById("KconS").checked = true;
	document.getElementById("KconT").checked = true;
	document.getElementById("KconN").checked = true;
	document.getElementById("KconH").checked = true;
	document.getElementById("KconM").checked = true;
	document.getElementById("KconY").checked = true;
	document.getElementById("KconR").checked = true;
	document.getElementById("KconW").checked = true;
	document.getElementById("KconNNN").checked = true;
	document.getElementById("KconG").checked = false;
	document.getElementById("KconZ").checked = false;
	document.getElementById("KconD").checked = false;
	document.getElementById("KconB").checked = false;
	document.getElementById("KconP").checked = false;
	document.getElementById("Kyoon").checked = true;	
}

function selectDakutenKatakana(){
	document.getElementById("HconNon").checked = false;
	document.getElementById("HconK").checked = false;
	document.getElementById("HconS").checked = false;
	document.getElementById("HconT").checked = false;
	document.getElementById("HconN").checked = false;
	document.getElementById("HconH").checked = false;
	document.getElementById("HconM").checked = false;
	document.getElementById("HconY").checked = false;
	document.getElementById("HconR").checked = false;
	document.getElementById("HconW").checked = false;
	document.getElementById("HconNNN").checked = false;
	document.getElementById("HconG").checked = false;
	document.getElementById("HconZ").checked = false;
	document.getElementById("HconD").checked = false;
	document.getElementById("HconB").checked = false;
	document.getElementById("HconP").checked = false;
	document.getElementById("HconVVV").checked = false;
	document.getElementById("Hyoon").checked = false;
	document.getElementById("KconNon").checked = false;
	document.getElementById("KconK").checked = false;
	document.getElementById("KconS").checked = false;
	document.getElementById("KconT").checked = false;
	document.getElementById("KconN").checked = false;
	document.getElementById("KconH").checked = false;
	document.getElementById("KconM").checked = false;
	document.getElementById("KconY").checked = false;
	document.getElementById("KconR").checked = false;
	document.getElementById("KconW").checked = false;
	document.getElementById("KconNNN").checked = false;
	document.getElementById("KconG").checked = true;
	document.getElementById("KconZ").checked = true;
	document.getElementById("KconD").checked = true;
	document.getElementById("KconB").checked = true;
	document.getElementById("KconP").checked = true;
	document.getElementById("Kyoon").checked = true;	
}

function selectAll(){
	document.getElementById("HconNon").checked = true;
	document.getElementById("HconK").checked = true;
	document.getElementById("HconS").checked = true;
	document.getElementById("HconT").checked = true;
	document.getElementById("HconN").checked = true;
	document.getElementById("HconH").checked = true;
	document.getElementById("HconM").checked = true;
	document.getElementById("HconY").checked = true;
	document.getElementById("HconR").checked = true;
	document.getElementById("HconW").checked = true;
	document.getElementById("HconNNN").checked = true;
	document.getElementById("HconG").checked = true;
	document.getElementById("HconZ").checked = true;
	document.getElementById("HconD").checked = true;
	document.getElementById("HconB").checked = true;
	document.getElementById("HconP").checked = true;
	document.getElementById("HconVVV").checked = true;
	document.getElementById("Hyoon").checked = true;
	document.getElementById("KconNon").checked = true;
	document.getElementById("KconK").checked = true;
	document.getElementById("KconS").checked = true;
	document.getElementById("KconT").checked = true;
	document.getElementById("KconN").checked = true;
	document.getElementById("KconH").checked = true;
	document.getElementById("KconM").checked = true;
	document.getElementById("KconY").checked = true;
	document.getElementById("KconR").checked = true;
	document.getElementById("KconW").checked = true;
	document.getElementById("KconNNN").checked = true;
	document.getElementById("KconG").checked = true;
	document.getElementById("KconZ").checked = true;
	document.getElementById("KconD").checked = true;
	document.getElementById("KconB").checked = true;
	document.getElementById("KconP").checked = true;
	document.getElementById("Kyoon").checked = true;	
}

function deselectAll(){
	document.getElementById("HconNon").checked = false;
	document.getElementById("HconK").checked = false;
	document.getElementById("HconS").checked = false;
	document.getElementById("HconT").checked = false;
	document.getElementById("HconN").checked = false;
	document.getElementById("HconH").checked = false;
	document.getElementById("HconM").checked = false;
	document.getElementById("HconY").checked = false;
	document.getElementById("HconR").checked = false;
	document.getElementById("HconW").checked = false;
	document.getElementById("HconNNN").checked = false;
	document.getElementById("HconG").checked = false;
	document.getElementById("HconZ").checked = false;
	document.getElementById("HconD").checked = false;
	document.getElementById("HconB").checked = false;
	document.getElementById("HconP").checked = false;
	document.getElementById("HconVVV").checked = false;
	document.getElementById("Hyoon").checked = false;
	document.getElementById("KconNon").checked = false;
	document.getElementById("KconK").checked = false;
	document.getElementById("KconS").checked = false;
	document.getElementById("KconT").checked = false;
	document.getElementById("KconN").checked = false;
	document.getElementById("KconH").checked = false;
	document.getElementById("KconM").checked = false;
	document.getElementById("KconY").checked = false;
	document.getElementById("KconR").checked = false;
	document.getElementById("KconW").checked = false;
	document.getElementById("KconNNN").checked = false;
	document.getElementById("KconG").checked = false;
	document.getElementById("KconZ").checked = false;
	document.getElementById("KconD").checked = false;
	document.getElementById("KconB").checked = false;
	document.getElementById("KconP").checked = false;
	document.getElementById("Kyoon").checked = false;
}

//cookies
function saveCookies(){
	//console.log("running saveCookies()");
	var d = new Date();
	//will expire in 365 days
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "show-answer=" + document.getElementById("show-answer").checked + "; " + expires;
	////////
    document.cookie = "HconNon=" + document.getElementById("HconNon").checked + "; " + expires;
    document.cookie = "HconK=" + document.getElementById("HconK").checked + "; " + expires;
    document.cookie = "HconS=" + document.getElementById("HconS").checked + "; " + expires;
    document.cookie = "HconT=" + document.getElementById("HconT").checked + "; " + expires;
    document.cookie = "HconN=" + document.getElementById("HconN").checked + "; " + expires;
    document.cookie = "HconH=" + document.getElementById("HconH").checked + "; " + expires;
    document.cookie = "HconM=" + document.getElementById("HconM").checked + "; " + expires;
    document.cookie = "HconY=" + document.getElementById("HconY").checked + "; " + expires;
    document.cookie = "HconR=" + document.getElementById("HconR").checked + "; " + expires;
    document.cookie = "HconW=" + document.getElementById("HconW").checked + "; " + expires;
    document.cookie = "HconNNN=" + document.getElementById("HconNNN").checked + "; " + expires;
    document.cookie = "HconG=" + document.getElementById("HconG").checked + "; " + expires;
    document.cookie = "HconZ=" + document.getElementById("HconZ").checked + "; " + expires;
    document.cookie = "HconD=" + document.getElementById("HconD").checked + "; " + expires;
    document.cookie = "HconB=" + document.getElementById("HconB").checked + "; " + expires;
    document.cookie = "HconP=" + document.getElementById("HconP").checked + "; " + expires;
    document.cookie = "HconVVV=" + document.getElementById("HconVVV").checked + "; " + expires;
    document.cookie = "Hyoon=" + document.getElementById("Hyoon").checked + "; " + expires;
	///////
	document.cookie = "KconNon=" + document.getElementById("KconNon").checked + "; " + expires;
    document.cookie = "KconK=" + document.getElementById("KconK").checked + "; " + expires;
    document.cookie = "KconS=" + document.getElementById("KconS").checked + "; " + expires;
    document.cookie = "KconT=" + document.getElementById("KconT").checked + "; " + expires;
    document.cookie = "KconN=" + document.getElementById("KconN").checked + "; " + expires;
    document.cookie = "KconH=" + document.getElementById("KconH").checked + "; " + expires;
    document.cookie = "KconM=" + document.getElementById("KconM").checked + "; " + expires;
    document.cookie = "KconY=" + document.getElementById("KconY").checked + "; " + expires;
    document.cookie = "KconR=" + document.getElementById("KconR").checked + "; " + expires;
    document.cookie = "KconW=" + document.getElementById("KconW").checked + "; " + expires;
    document.cookie = "KconNNN=" + document.getElementById("KconNNN").checked + "; " + expires;
    document.cookie = "KconG=" + document.getElementById("KconG").checked + "; " + expires;
    document.cookie = "KconZ=" + document.getElementById("KconZ").checked + "; " + expires;
    document.cookie = "KconD=" + document.getElementById("KconD").checked + "; " + expires;
    document.cookie = "KconB=" + document.getElementById("KconB").checked + "; " + expires;
    document.cookie = "KconP=" + document.getElementById("KconP").checked + "; " + expires;
    document.cookie = "Kyoon=" + document.getElementById("Kyoon").checked + "; " + expires;
	//////////
    document.cookie = "exists=true; " + expires;
	
    //console.log("document.cookie:::"+ document.cookie);
}

function readCookies(){
	//console.log("running readCookies()");
    document.getElementById("show-answer").checked = (getCookieValue("show-answer") == "true")
	////////
	document.getElementById("HconNon").checked = (getCookieValue("HconNon") == "true");
	document.getElementById("HconK").checked = (getCookieValue("HconK") == "true");
	document.getElementById("HconS").checked = (getCookieValue("HconS") == "true");
	document.getElementById("HconT").checked = (getCookieValue("HconT") == "true");
	document.getElementById("HconN").checked = (getCookieValue("HconN") == "true");
	document.getElementById("HconH").checked = (getCookieValue("HconH") == "true");
	document.getElementById("HconM").checked = (getCookieValue("HconM") == "true");
	document.getElementById("HconY").checked = (getCookieValue("HconY") == "true");
	document.getElementById("HconR").checked = (getCookieValue("HconR") == "true");
	document.getElementById("HconW").checked = (getCookieValue("HconW") == "true");
	document.getElementById("HconNNN").checked = (getCookieValue("HconNNN") == "true");
	document.getElementById("HconG").checked = (getCookieValue("HconG") == "true");
	document.getElementById("HconZ").checked = (getCookieValue("HconZ") == "true");
	document.getElementById("HconD").checked = (getCookieValue("HconD") == "true");
	document.getElementById("HconB").checked = (getCookieValue("HconB") == "true");
	document.getElementById("HconP").checked = (getCookieValue("HconP") == "true");
	document.getElementById("HconVVV").checked = (getCookieValue("HconVVV") == "true");
	document.getElementById("Hyoon").checked = (getCookieValue("Hyoon") == "true");
	document.getElementById("KconNon").checked = (getCookieValue("KconNon") == "true");
	document.getElementById("KconK").checked = (getCookieValue("KconK") == "true");
	document.getElementById("KconS").checked = (getCookieValue("KconS") == "true");
	document.getElementById("KconT").checked = (getCookieValue("KconT") == "true");
	document.getElementById("KconN").checked = (getCookieValue("KconN") == "true");
	document.getElementById("KconH").checked = (getCookieValue("KconH") == "true");
	document.getElementById("KconM").checked = (getCookieValue("KconM") == "true");
	document.getElementById("KconY").checked = (getCookieValue("KconY") == "true");
	document.getElementById("KconR").checked = (getCookieValue("KconR") == "true");
	document.getElementById("KconW").checked = (getCookieValue("KconW") == "true");
	document.getElementById("KconNNN").checked = (getCookieValue("KconNNN") == "true");
	document.getElementById("KconG").checked = (getCookieValue("KconG") == "true");
	document.getElementById("KconZ").checked = (getCookieValue("KconZ") == "true");
	document.getElementById("KconD").checked = (getCookieValue("KconD") == "true");
	document.getElementById("KconB").checked = (getCookieValue("KconB") == "true");
	document.getElementById("KconP").checked = (getCookieValue("KconP") == "true");
	document.getElementById("Kyoon").checked = (getCookieValue("Kyoon") == "true");	
	
    //console.log("document.cookie:::"+ document.cookie);
}

//copy pasted from w3schools XDDDDDDD
function getCookieValue(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookies(){
	if (confirm("Are you sure? Deleting your configuration is undoable!")){
		var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
		
		document.cookie = "show-answer=;" + expires;
		///////
		document.cookie = "HconNon=;" + expires;
		document.cookie = "HconK=;" + expires;
		document.cookie = "HconS=;" + expires;
		document.cookie = "HconT=;" + expires;
		document.cookie = "HconN=;" + expires;
		document.cookie = "HconH=;" + expires;
		document.cookie = "HconM=;" + expires;
		document.cookie = "HconY=;" + expires;
		document.cookie = "HconR=;" + expires;
		document.cookie = "HconW=;" + expires;
		document.cookie = "HconNNN=;" + expires;
		document.cookie = "HconG=;" + expires;
		document.cookie = "HconZ=;" + expires;
		document.cookie = "HconD=;" + expires;
		document.cookie = "HconB=;" + expires;
		document.cookie = "HconP=;" + expires;
		document.cookie = "HconVVV=;" + expires;
		document.cookie = "Hyoon=;" + expires;
		///////
		document.cookie = "KconNon=;" + expires;
		document.cookie = "KconK=;" + expires;
		document.cookie = "KconS=;" + expires;
		document.cookie = "KconT=;" + expires;
		document.cookie = "KconN=;" + expires;
		document.cookie = "KconH=;" + expires;
		document.cookie = "KconM=;" + expires;
		document.cookie = "KconY=;" + expires;
		document.cookie = "KconR=;" + expires;
		document.cookie = "KconW=;" + expires;
		document.cookie = "KconNNN=;" + expires;
		document.cookie = "KconG=;" + expires;
		document.cookie = "KconZ=;" + expires;
		document.cookie = "KconD=;" + expires;
		document.cookie = "KconB=;" + expires;
		document.cookie = "KconP;" + expires;
		document.cookie = "Kyoon=;" + expires;
		//////////
		document.cookie = "exists=; " + expires;
	}
}























