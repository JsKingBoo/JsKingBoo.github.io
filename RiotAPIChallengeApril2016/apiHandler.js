/*
STEP 1: Get user input: Summoner name and region
STEP 2: Get summoner ID
STEP 3: Get top 5 champion IDs of summoner ID
STEP 4: Convert the champion IDs into names
STEP 5: Finalize all async calls
*/

var summonerName = '';
var region = '';
var summonerId = '';
var champIds = [];
var done = false;

function trigger(usingApi){
	
	if (!usingApi){
		var tempArray = [];
		for (var i = 0; i < boardSize; i++){
			if (tempArray.indexOf(document.getElementById("champion" + i).value) >= 0){
				alert('error: duplicate champions');
				return;
			}
			tempArray.push(document.getElementById("champion" + i).value);
			champImages[i] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/' + document.getElementById("champion" + i).value + '.png';
		}
		
		
		init();	
		
		
	}

	if (usingApi) {
		//Everything here immediately goes into effect BEFORE async calls are finished
		document.getElementById("loading").style.visibility='visible';
		document.getElementById("initial-input").style.visibility = 'hidden';

		summonerName = $("#userName").val().split(' ').join('');
		region = $("#region").val().toLowerCase().trim();
		
		var gotImages = 0;
		
		//I really don't want to do this, but
		//I'm kinda on a deadline here
		callAjax(summonerName, region, 0, function(json){	
			console.log(json.data[0]);
			champImages.push(json.data[0]);
			gotImages++;
			
			callAjax(summonerName, region, 1, function(json){	
				console.log(json.data[0]);
				if (champImages.indexOf(json.data[0]) >= 0){
					gotImages = -99;
				}
				champImages.push(json.data[0]);
				gotImages++;
				
				callAjax(summonerName, region, 2, function(json){	
					console.log(json.data[0]);
					if (champImages.indexOf(json.data[0]) >= 0){
						gotImages = -99;
					}
					champImages.push(json.data[0]);
					gotImages++;
				});
			});
		});

		
		
		//Finished with all async calls
		//console.log("All done");
			
		function finishInitialization(){
		
			if (gotImages == boardSize){
				//console.log('done is true');
				
				init();
				
			} else if (gotImages < 0){
				alert("Error: data retrieved was corrupted");
				champImages = [];
				gotImages = 0;
				document.getElementById("loading").style.visibility='hidden';
				document.getElementById("initial-input").style.visibility = 'visible';
			} else {
				setTimeout(function(){finishInitialization();}, 1000);
			}
		}
		
		finishInitialization();

	
	}
	
	
}

function callAjax(summname, reg, num, callback){

	$.ajax({
		url: 'http://infinite-ocean-43224.herokuapp.com/getData/' + reg + '/' + summname + '/' + num,
		//url: 'http://127.0.0.1:8811/getData/' + reg + '/' + summname + '/' + num,
		type: 'GET',
		contentType: "application/json; charset=utf-8",
		dataType: 'jsonp',
		success: callback,
		//success: jsonpCallback,
		//jsonpCallback: "callback",
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			if (textStatus == 'timeout'){
				alert("Error: request timed out. Either the server is down and hopefully will be back up soon, or you have a connectivity issue.");
			} else if (errorThrown.status == 429) {
				alert("Error: the server is being overloaded. Try again in ten minutes or so.");
			} else if (errorThrown.status == 503) {
				alert("Error: the server is being overloaded. Try again in an hour or so.");
			} else {
				alert("Error " + JSON.stringify(XMLHttpRequest) + ", " + textStatus + ", " + errorThrown);
			}
			document.getElementById("loading").style.visibility='hidden';
			document.getElementById("initial-input").style.visibility = 'visible';
		},
		timeout: 10000,
	});	

}