function displayInfo(){

	var displayContainer = document.getElementById("display-holder");
	var html = '';
	
	homeScreen();
	
	function homeScreen(){
	
		var displayArray = [];
	
		for(var j in exports.champs) {
			//champsArray[j]	
			displayArray.push(exports['champs'][j]['display'])
			//html += '<button href="#" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">' + exports['champs'][j]['display'] + '</button>';
		}
		displayArray.sort();
		for(var j in displayArray) {
			html += '<button href="#" id="' + displayArray[j] + '" class="btn btn-primary" style="margin-left:40px; width:1200px; height:120px;">' + displayArray[j] + '</button>';
		}
	
	}
	
	displayContainer.innerHTML=html;

}