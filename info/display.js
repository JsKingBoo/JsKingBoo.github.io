var displayContainer = document.getElementById("display-holder");
var html = '';

function displayInfo(){
	html += '<div class="container">';
	html += '	<button href="#" id="show-champs" onclick="showChampList()" class="btn btn-primary" style="height:120px; display:block; width:100%;">Champions</button>';
	html += '		<button href="#" id="show-runes" onclick="showRunes()" class="btn btn-primary" style="height:120px; display:block; width:100%;">Runes</button>';
	html += '</div>';
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	
}

function showChampList(){

	//reset HTML
	html = '<div class="container">';

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
		//set loading bar
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
				console.log(k)
			}
		}

		//add 1 champ
		html += '	<button href="#" id="' + id + '" onclick="window.location.href=&quot;dexentries/' + id + '.html&quot;" class="btn btn-primary" style="height:120px; display:block; width:100%;">' + displayArray[j] + '</button>';

	}
	
	//end the div tag
	html += '</div>';	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}

function showEffectivenesChart(){

}

function showRunes(){

}

