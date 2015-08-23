var champName = []; //kind of a misnomer, "champName" actually returns image urls of the specified champs

function getChampNames(index){
	return champName[index];
}

function getAllChampNames(){
	return champName;
}

function getChampFromID(passedRegion, passedKey, passedID){ //passedID is an array
	
	var ch = 10; //number of champions in game
	var ID = passedID; //array
	var region = passedRegion;
	var key = passedKey;
	var url = []; //all constructed
	var xmlHttp = new XMLHttpRequest(); //http handler

	//initiation
	this.init = function(){
		//static api request
		for (var i = 0; i < ch; i++){
			url.push("https://global.api.pvp.net/api/lol/static-data/" + region + "/v1.2/champion/" + ID[i] + "?api_key=" + key); 
		}
	}
	
	//cycle through all the IDs and make an API call for each one; this is a helper function
	this.cycleIDs = function(){
		for (var i = 0; i < ch; i++){
			httpRequest(function(){
				//http response
				if (xmlHttp.readyState == 4){
					if (xmlHttp.status == 200) {
						var result = xmlHttp.responseText;
						result = JSON.parse(result).key;
						//console.log("loading in player " + result);
						champName.push("http://ddragon.leagueoflegends.com/cdn/5.15.1/img/champion/" + result + ".png");
					} else {
						alert("An error has occurred: " + xmlHttp.statusText + "||" + result);
					}
				}
			}, i);
		}
	}
	
	//http requests handler
	this.httpRequest = function(callback, urlIndex){
		xmlHttp.open("GET", url[urlIndex], false); //synch call, bad practice lololol
		//console.log("API Request 2 " + url[urlIndex]);
		xmlHttp.onreadystatechange = callback; //i got a response, now what
		xmlHttp.send(null);
	}	
	
	init();
	cycleIDs();

}