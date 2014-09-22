var displayContainer = document.getElementById("display-holder");
var html = '';

function champInfo(chp){ //champ code name, NOT display name

	html = '';
	//splash
	html += '<div class="container">';
	html += '	<a href="#" class="thumbnail">';
	html += '		<img src="/data/splashart/' + chp + '.png" class="img-polaroid" alt="" id="splash">'; //all art by Riot Games (tm)
	html += '	</a>';
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
	//heading rofl its down here gj past me what have you done
	html += '	<div id="title">'; //UGH sloppy positioning, past me what were you thinking
	html += '		<h1 style="position:relative;top:-285px;left:400px;font-size:52pt">' + exports['champs'][chp]['display'] + '</h1>'; //champ name
	html += '		<h2 style="position:relative;top:-275px;left:400px;font-size:30pt">'+ exports['champs'][chp]['blurb'] +'</h2>'; //blurb
	html += '	</div>';
	html += '</div>';
	
	displayContainer.innerHTML=html; //DONE WITH FUNCTION	
	
	splash = document.getElementById('splash');
	splash.style.width = '480px';	
	splash.style.height='auto';

}	

