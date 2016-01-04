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
var HconNd = [["ちゃ", "nya"], ["ちゅ", "nyu"], ["ちょ", "nyo"]];

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

var correct = 0;
var incorrect = 0;

function generateQuestion(erase){
	//clear
	if (erase){
		document.getElementById('incorrect').innerHTML = '';
	}
	var html = '';
	var displayContainer = document.getElementById('holder');

	
	var hYoon = document.getElementById('Hyoon').checked;
	//HconNon
	if (document.getElementById('HconNon').checked){
		answers = answers.concat(HconNon);
	}
	//HconK
	if (document.getElementById('HconK').checked){
		answers = answers.concat(HconK);
		if (kYoon){
			answers = answers.concat(HconKd);
		}
	}
	//HconS
	if (document.getElementById('HconS').checked){
		answers = answers.concat(HconS);
		if (kYoon){
			answers = answers.concat(HconSd);
		}
	}
	//HconT
	if (document.getElementById('HconT').checked){
		answers = answers.concat(HconT);
		if (kYoon){
			answers = answers.concat(HconTd);
		}
	}
	//HconN
	if (document.getElementById('HconN').checked){
		answers = answers.concat(HconN);
		if (kYoon){
			answers = answers.concat(HconNd);
		}
	}	
	//HconH
	if (document.getElementById('HconH').checked){
		answers = answers.concat(HconH);
		if (kYoon){
			answers = answers.concat(HconHd);
		}
	}	
	//HconM
	if (document.getElementById('HconM').checked){
		answers = answers.concat(HconM);
		if (kYoon){
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
		if (kYoon){
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
		if (kYoon){
			answers = answers.concat(HconGd);
		}
	}
	//HconZ
	if (document.getElementById('HconZ').checked){
		answers = answers.concat(HconZ);
		if (kYoon){
			answers = answers.concat(HconZd);
		}
	}
	//HconD
	if (document.getElementById('HconD').checked){
		answers = answers.concat(HconD);
		if (kYoon){
			answers = answers.concat(HconDd);
		}
	}
	//HconB
	if (document.getElementById('HconB').checked){
		answers = answers.concat(HconB);
		if (kYoon){
			answers = answers.concat(HconBd);
		}
	}
	//HconP
	if (document.getElementById('HconP').checked){
		answers = answers.concat(HconP);
		if (kYoon){
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