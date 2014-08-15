var displayContainer = document.getElementById("display-holder");
var html = '';

function displayInfo(){
	html += '<button href="#" id="show-champs" onclick="showChampList()" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">Champions</button>';
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}

function showChampList(){

	html = ''

	var displayArray = [];
	var numOfChamps = 0;
	var progress = 0;

	for(var j in exports.champs) { //arrange display names in alpha order	
		displayArray.push(exports['champs'][j]['display'])
		numOfChamps += 1;
	}
	displayArray.sort();
	for(var j in displayArray) { //get code names
		var id = '';			
		
		progress += 1;
		var percent = Math.floor(progress * 100 / numOfChamps);
		
		var loadingHtml = '';
		loadingHtml += '<div class="progress">';
		loadingHtml += '	<div class="progress-bar" role="progressbar" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100" style="width:' + percent + '%;">';
		loadingHtml += '		' + percent + '%';
		loadingHtml += '	</div>';
		loadingHtml += '</div>';
		displayContainer.innerHTML=loadingHtml;
		
		
		for(var k in exports.champs) {
			if(exports['champs'][k]['display'] == displayArray[j]) {
				id = k;
			}
		}

		html += '<button href="#" id="' + id + '" onclick="window.location.href="dexentries/' + chp + '.html" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">' + displayArray[j] + '</button>';
	}
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}

function showEffectivenesChart(){

}

function showRunes(){

}

