var displayContainer = document.getElementById("select");
var html = '';

var MARGIN = 40;
var WINDOW_WIDTH = screen.availWidth - (MARGIN * 2);

function display(){
	
	html += '<div class="container">'
	html += '	<div class="jumbotron">';
	html += '		<h1>Singleplayer</h1>';
	html += '		<button id="singleplayer" class="btn btn-default" style="margin-left:' + MARGIN + 'px; height:124px;" onclick="" href="#">stuff</button>';
	html += '	</div>';
	html += '</div>';
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	
}	