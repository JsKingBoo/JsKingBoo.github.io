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

		html += '<button href="#" id="' + id + '" onclick="onPressChamp(&quot;' + id + '&quot;)" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">' + displayArray[j] + '</button>';
	}
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}

function onPressChamp(chp){ //champ code name, NOT display name

	html = '';

	html += '<div class="row">';
	html += '	<div class="col-xs-6 col-md-3" style="margin-left:40px;">';
	html += '		<a href="#" class="thumbnail">';
	html += '			<img src="splashart/' + chp + '.png" class="img-polaroid" alt="..." id="splash">'; //all art by Riot Games (tm)
	html += '		</a>';
	html += '	</div>';
	html += '</div>';
	//image is 480x480
	
	html += '<div id="title">';
	html += '	<h1 style="position:relative;top:-285px;left:400px;font-size:52pt">' + exports['champs'][chp]['display'] + '</h1>'; //champ name
	html += '	<h2 style="position:relative;top:-275px;left:400px;font-size:30pt">'+ exports['champs'][chp]['blurb'] +'</h2>'; //blurb
	html += '</div>';
	
	displayContainer.innerHTML=html; //DONE WITH FUNCTION	
	
	splash = document.getElementById('splash');
	splash.style.width = '480px';	
	splash.style.height='auto';
}	

