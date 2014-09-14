var displayContainer = document.getElementById("select");
var html = '';

var MARGIN = 40;
var WINDOW_WIDTH = screen.availWidth - (MARGIN * 2);
//var BUTTON_WIDTH = ((WINDOW_WIDTH - MARGIN) / 2);
var BUTTON_WIDTH = (WINDOW_WIDTH / 2) - MARGIN;
var BUTTON_HEIGHT = BUTTON_WIDTH * 3/5;

function display(){
	
	//left		
	html += '<div class="row">';	
	html += '	<div class="col-md-6">';
	html += '		<button href="#" class="btn btn-default" style="margin-left:' + MARGIN + 'px; width:' + BUTTON_WIDTH + 'px; height:' + BUTTON_HEIGHT + 'px;">test</button>';
	html += '	</div>';
	//right
	html += '	<div class="col-md-6">';
	html += '		<button href="#" class="btn btn-default" style="margin-left:' + MARGIN + 'px; width:' + BUTTON_WIDTH + 'px; height:' + BUTTON_HEIGHT + 'px;">test2</button>';
	html += '	</div>';
	html += '</div>';
	
	
	
	/*html += '<div class="row">';
	html += '	<div class="col-md-6">';
	html += '		<button href="#" id="show-champs" onclick="showChampList()" class="btn btn-primary" style="margin-left:' + MARGIN + 'px; width:' + WINDOW_WIDTH + 'px; height:120px;">Champions</button>';
	html += '	</div>';
	html += '</div>';
	html += '<div class="row">';	
	html += '	<div class="col-md-3">';
	html += '		<button href="#" id="show-runes" onclick="showRunes()" class="btn btn-primary" style="margin-left:' + MARGIN + 'px; width:' + BUTTON_WIDTH + 'px; height:120px;">Runes</button>';
	html += '	</div>';
	html += '</div>';*/
	
	displayContainer.innerHTML=html;	//this = DONE WITH FUNCTION	
}	