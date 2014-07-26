var displayContainer = document.getElementById("display-holder");
var html = '';

function displayInfo(){
	
	homeScreen();
	
	function homeScreen(){
	
		var displayArray = [];
	
		for(var j in exports.champs) { //arrange display names in alpha order	
			displayArray.push(exports['champs'][j]['display'])
		}
		displayArray.sort();
		for(var j in displayArray) { //get code names
			var id = '';
			
			for(var k in exports.champs) {
				if(exports['champs'][k]['display'] == displayArray[j]) {
					id = k;
				}
			}

			html += '<button href="#" id="' + id + '" onclick="onPress(&quot;' + id + '&quot;)" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">' + displayArray[j] + '</button>';
		}
		
		displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	

	}
	

	

}

function onPress(chp){ //champ code name, NOT display name

	var PROFILE_WIDTH = 500; //all caps = constant. fact
	var OFFSET = 40;
	var SCREENWIDTH = screen.width;

	html = '';

	html += '<div class="row">';
	html += '	<div class="col-xs-6 col-md-3" style="margin-left:40px;">';
	html += '		<a href="#" class="thumbnail">';
	html += '			<img src="http://fc02.deviantart.net/fs70/f/2012/289/3/c/pin_template_by_neooki23-d5hzqob.png" class="img-polaroid" alt="...">';
	html += '		</a>';
	html += '	</div>';
	html += '</div>';
	//image is 500x500
	html += '<div id="title">';
	html += '	<h1 style="position:relative;top:-290px;left:400px;font-size:48pt">' + exports['champs'][chp]['display'] + '</h1>';
	html += '	<h2 style="position:relative;top:-270px;left:400px">'+ exports['champs'][chp]['blurb'] +'</h2>';
	html += '</div>';
	
	displayContainer.innerHTML=html; //DONE WITH FUNCTION
}	

