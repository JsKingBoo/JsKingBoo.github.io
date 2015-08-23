var matchData; //the all important data is global

function getMatchData(){
	//console.log("OMG"); //debug
	return matchData;
}
	
function getMatchInformation(passedRegion, passedMatch, passedKey) {
	 
	var region = passedRegion;
	var matchID = passedMatch;
	var key = passedKey;
	var url; //fully constructed url of the thing
	var xmlHttp = new XMLHttpRequest(); //http handler
	
	//initiation
	//region + match should be randomly selected in the getMatchInformation handler
	this.init = function(){
		url = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.2/match/" + matchID + "?includeTimeline=true&api_key=" + key;
		//console.log("HUZZAH! COLOMO EXMOJUS! " + url); //debug
	}
	
	//http requests
	this.httpRequest = function(callback){
		xmlHttp.open("GET", url, true);
		xmlHttp.onreadystatechange = callback; //i got a response, now what
		//console.log("API request 1 " + url);
		xmlHttp.send(null);
	}	
	
	//now everything is nice and organized :D
	//oh nvm, welcome to callback hell
	init();
	matchData = httpRequest(function(){
		//http response
		if (xmlHttp.readyState == 4){
			if (xmlHttp.status == 200) {
				result = xmlHttp.responseText;
				matchData = result;
				//console.log("BLEHEHEHEHE! BLECK!"); //debug
			} else {
				alert("An error has occurred: " + xmlHttp.statusText);
			}
		}
		//console.log("HOHOHO merry christmas " + matchData); //debug
	});
	//matchData = httpRequest();
	
}