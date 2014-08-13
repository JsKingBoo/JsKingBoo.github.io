var displayContainer = document.getElementById("display-holder");
var html = '';

function champInfo(chp){ //champ code name, NOT display name

	html = '';

	html += '<div class="row">';
	html += '	<div class="col-xs-6 col-md-3" style="margin-left:40px;">';
	html += '		<a href="#" class="thumbnail">';
	html += '			<img src="/data/splashart/' + chp + '.png" class="img-polaroid" alt="..." id="splash">'; //all art by Riot Games (tm)
	html += '		</a>';
	html += '	</div>';
	html += '</div>';
	//image is 480x480
	
	html += '<div id="movepool">';
	html += '	<div class="btn-group">';
	html += '		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">';
	html += '			Action <span class="caret"></span>';
	html += '		</button>';
	html += '		<ul class="dropdown-menu" role="menu">';
	html += '			<li><a href="#">Action</a></li>';
	html += '			<li><a href="#">Another action</a></li>';
	html += '			<li><a href="#">Something else here</a></li>';
	html += '			<li class="divider"></li>';
	html += '			<li><a href="#">Separated link</a></li>';
	html += '		</ul>';
	html += '	</div>';
	html += '</div>';	
	
	html += '<div id="title">';
	html += '	<h1 style="position:relative;top:-285px;left:400px;font-size:52pt">' + exports['champs'][chp]['display'] + '</h1>'; //champ name
	html += '	<h2 style="position:relative;top:-275px;left:400px;font-size:30pt">'+ exports['champs'][chp]['blurb'] +'</h2>'; //blurb
	html += '</div>';
	

	
	displayContainer.innerHTML=html; //DONE WITH FUNCTION	
	
	splash = document.getElementById('splash');
	splash.style.width = '480px';	
	splash.style.height='auto';

}	

