var id;

function getRandomRegion(){
    var x = Math.floor((Math.random() * 10) + 1);
	if (x == 1){
		return "BR";
	} else if (x == 2){
		return "EUNE";
	} else if (x == 3){
		return "EUW";
	} else if (x == 4){
		return "KR";
	} else if (x == 5){
		return "LAN";
	} else if (x == 6){
		return "LAS";
	} else if (x == 7){
		return "NA";
	} else if (x == 8){
		return "OCE";
	} else if (x == 9){
		return "RU";
	} else if (x == 10){
		return "TR";
	} else {
		console.log("what the heckins? how did this fail?");
		return "NA";
	}
}

function requestMatch(region){ //async hell

	//console.log("getting random match " + region);
	
	$.getJSON("BILGEWATER/" + region.toUpperCase() + ".json", function(json) { //access the JSON file via jQuery
		//choose a random number and get that match from that region
		var x = Math.floor((Math.random() * 10000) + 1);
		//console.log("getRandomMatch " + json[x]);
		id = json[x];
	});
	
}

function getRandomMatch(){
	return id; //chosen by fair dice roll
			   //guaranteed to be random
}