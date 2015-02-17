var displayContainer = document.getElementById("display-holder");
var html = '';

function displayChampionData(){

	//reset HTML
	html = '<div class="table-responsive">';
	html +='	<table class="table">';
    
	var numOfChamps = 0;
	var progress = 0;
	
	//build table
	for(var j = 0; j < bans.length; j++) {
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
		
		//champion name; if notes (5) have "PERMABANNED" then bg is red
		if(bans[j][5].indexOf('PERMABANNED') >= 0) {
			html += '<td id="red">' + bans[j][0] + '</td>';
		}else{
			html += '<td id="blue">' + bans[j][0] + '</td>';			
		}
		
		//basic abilities
		for (var k = 1; k < 5; k++){
			if (bans[j][k] == "Yes"){
				html += '<td id="green">' + bans[j][k] + '</td>';
			} else if (bans[j][k] == "Maybe"){
				html += '<td id="yellow">' + bans[j][k] + '</td>';				
			} else if (bans[j][k] == "No"){
				html += '<td id="red">' + bans[j][k] + '</td>';				
			} else {
				html += '<td id="blue">' + bans[j][k] + '</td>';				
			}
		}
		
		//notes
		html += '<td id="red">' + bans[j][5] + '</td>';
		
		//end new row
		html += '</tr>';

	}
	
	//end the table and div tags
	html += '	</table>';
	html += '</div>';		

	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

}