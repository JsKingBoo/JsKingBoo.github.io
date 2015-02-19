var displayContainer = document.getElementById("display-holder");
var html = '';

function displayChampionData(){

	//console.log("ok bere we go");

	//reset HTML, and set table head info
	html = '<div class="table table-bordered table-striped table-responsive">';
	html +='	<table class="table">';
	
	html +='		<thead>';
	html +='			<tr>';
	html +='			  <th style="vertical-align:top">';
	html +='				Champion name<br/>';
	html +='				<small>nicknames don\'t count</small>';
	html +='			  </th>';
	html +='			  <th style="vertical-align:top">';
	html +='				Q<br/>';
	html +='				<small>cry more</small>';
	html +='			  </th>';
	html +='			  <th style="vertical-align:top">';
	html +='				W<br/>';
	html +='				<small>; w ;</small>';
	html +='			  </th>';
	html +='			  <th style="vertical-align:top">';
	html +='				E<br/>';
	html +='				<small>2.71</small>';
	html +='			  </th>';
	html +='			  <th style="vertical-align:top">';
	html +='				R<br/>';	
	html +='				<small>aka ulti</small>';
	html +='			  </th>';
	html +='			  <th style="vertical-align:top">';
	html +='				Miscellaneous Notes<br/>';
	html +='				<small>and letters</small>';
	html +='			  </th>';
	html +='			</tr>';
	html +='		</thead>  ';
    
	var numOfChamps = 0;
	var progress = 0;
	
	var light = 1;
	
	//build table
	for(var j = 0; j < bans['champs'].length; j++) {
		light *= -1;
		
		//console.log("in constructor loop run #" + j);
		
		//loading bar
		progress += 1;
		var percent = Math.floor(progress * 100 / numOfChamps);
		var loadingHtml = ''; //HTML code which marks the loading bar progress
		loadingHtml += '<div class="progress">';
		loadingHtml += '	<div class="progress-bar" role="progressbar" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100" style="width:' + percent + '%;">';
		loadingHtml += '		' + percent + '%';
		loadingHtml += '	</div>';
		loadingHtml += '</div>';
		displayContainer.innerHTML=loadingHtml;
		//end loading bar HTML setting
		
		//data implementation
		//new row
		html += '<tr>';
		
		//debug in case I derp
		if(bans['champs'][j][5] == null){
			console.log(bans['champs'][j][0]);
		}
		
		//champion name; if notes (5) have "PERMABANNED" then bg is red
		if(bans['champs'][j][5].indexOf('PERMABANNED') >= 0) {
			//console.log("permabanned " + bans['champs'][j][0]);
			html += '<td id="red">' + bans['champs'][j][0] + '</td>';
		}else{
			html += '<td id="blue">' + bans['champs'][j][0] + '</td>';					
		}
		
		//basic abilities
		for (var k = 1; k < 5; k++){
			if (bans['champs'][j][k] == "Yes"){
				html += '<td id="green">' + bans['champs'][j][k] + '</td>';
			} else if (bans['champs'][j][k] == "Maybe"){
				html += '<td id="yellow">' + bans['champs'][j][k] + '</td>';				
			} else if (bans['champs'][j][k] == "No"){
				html += '<td id="red">' + bans['champs'][j][k] + '</td>';	
			} else if (bans['champs'][j][k] == "Contested"){
				html += '<td id="light-grey">' + bans['champs'][j][k] + '</td>';				
			} else {
				html += '<td id="blue">' + bans['champs'][j][k] + '</td>';				
			}
		}
		
		//notes; red if contains PERMABANNED; blue if notes is empty; yellow otherwise
		if(bans['champs'][j][5].indexOf('PERMABANNED') >= 0) {
			html += '<td id="red">' + bans['champs'][j][5] + '</td>';
		}else if(bans['champs'][j][5] != ""){
			html += '<td id="yellow">' + bans['champs'][j][5] + '</td>';			
		}else{ //empty
			html += '<td id="blue">' + bans['champs'][j][5] + '</td>';						
		}
		
		//end new row
		html += '</tr>';

	}
	
	//end the table and div tags
	html += '	</table>';
	html += '</div>';		

	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}