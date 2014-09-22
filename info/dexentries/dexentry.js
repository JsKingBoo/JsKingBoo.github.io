var displayContainer = document.getElementById("display-holder");
var html = '';

function champInfo(chp){ //champ code name, NOT display name

	html = '';
	//splash
	html += '<div class="container">';
	html += '	<div class="jumbotron">';
	html += '		<img style="float:left" src="/data/splashart/' + chp + '.png" class="img-polaroid" alt="" id="splash" />'; //all art by Riot Games (tm)
	html += '		<h1>' + exports['champs'][chp]['display'] + '</h1>'; //heading
	html += '		<h2>' + exports['champs'][chp]['blurb']   + '</h2>'; //blurb
	html += '	</div>';
	//image is 480x480
	//movepools ??
	html += '	<div id="movepool">';
	html += '		<div class="btn-group">';
	html += '			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="height:120px; display:block; width:100%;">'; //i really love these type of buttons
	html += '					Move <span class="caret"></span>';
	html += '				</button>';
	html += '				<ul class="dropdown-menu" role="menu">';
	html += '					<li><a href="#">Description</a></li>';
	html += '					<li><a href="#">Base damage + AP/AD	scaling</a></li>';
	html += '					<li><a href="#">List of CC effects</a></li>';
	html += '				</ul>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	
	displayContainer.innerHTML=html; //DONE WITH FUNCTION	
	
	splash = document.getElementById('splash');
	splash.style.width = '240px';	
	splash.style.height='auto';

}	

