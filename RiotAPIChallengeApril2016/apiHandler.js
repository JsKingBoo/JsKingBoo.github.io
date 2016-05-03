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
var key;

function trigger(usingApi){

	curDifficulty = parseInt(document.getElementById("start-difficulty").value.charAt(0)) - 1;
	if (!usingApi){
		var tempArray = [];
		for (var i = 0; i < boardSize; i++){
			if (tempArray.indexOf(document.getElementById("champion" + i).value) >= 0){
				alert('error: duplicate champions');
				return;
			}
			tempArray.push(document.getElementById("champion" + i).value);
			champImages[i] = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/' + document.getElementById("champion" + i).value + '.png';
		}
		
		document.getElementById("loading").innerHTML = '';
		document.getElementById("initial-input").innerHTML = '';
		
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
				
				document.getElementById("loading").innerHTML = '';
				document.getElementById("initial-input").innerHTML = '';
				
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

/*
//I gotta give props to this guy
//This is an amazing way to organize deferred processes
//http://stackoverflow.com/questions/24931115/jquery-execute-array-of-functions-sequentially-both-deferreds-and-non-deferred
var stepArray = [step0, step1, step2, step3, step4];

function trigger(usingApi){

	curDifficulty = parseInt(document.getElementById("start-difficulty").value.charAt(0)) - 1;
	if (!usingApi){
		var tempArray = [];
		for (var i = 0; i < boardSize; i++){
			if (tempArray.indexOf(document.getElementById("champion" + i).value) >= 0){
				alert('error: duplicate champions');
				return;
			}
			tempArray.push(document.getElementById("champion" + i).value);
			champImages[i] = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/' + document.getElementById("champion" + i).value + '.png';
		}
		
		document.getElementById("loading").innerHTML = '';
		document.getElementById("initial-input").innerHTML = '';
		
		init();	
	}

	if (usingApi) {
		clearQueue(stepArray).then(function() {
			//Finished with all async calls
			//console.log("All done");
			
			function finishInitialization(){
			
				if (done){
					//console.log('done is true');
					
					document.getElementById("loading").innerHTML = '';
					document.getElementById("initial-input").innerHTML = '';
					
					init();
					
				} else {
					setTimeout(function(){finishInitialization();}, 1000);
				}
			}
			
			finishInitialization();
			
		});
	}
	
	//Everything here immediately goes into effect BEFORE async calls are finished
	document.getElementById("loading").style.visibility='visible';
	document.getElementById("initial-input").style.visibility = 'hidden';
	
}

function clearQueue(q) {
    var p = $.Deferred();
    setTimeout(p.resolve.bind(p), 0);
    
    return q.reduce(function(prev,cur){ 
        return prev.then(cur);
    }, p);
}

function step0(){
    key = $("#theKey").val().trim();
    summonerName = $("#userName").val();
    region = $("#region").val().toLowerCase().trim();
	//console.log('step 0');
}

function step1(){
	var d = $.Deferred();
	
	setTimeout(function(){
		$.ajax({
            url: 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v1.4/summoner/by-name/' + summonerName + '?api_key=' + key,
            type: 'GET',
            dataType: 'json',
            data: {},
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = summonerName.replace(" ", "");
                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();
                summonerId = json[SUMMONER_NAME_NOSPACES].id;
                summonerName = json[SUMMONER_NAME_NOSPACES].name;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error getting summoner ID");
            }
        });	
		
		d.resolve();
	}, 2000);
	
	return d.promise();
	
}

function step2(){
	var d = $.Deferred();
	
	var tempr = region.toUpperCase();
	if (tempr != 'RU' && tempr != 'KR'){
		tempr += '1';
	}
	
	setTimeout(function(){
		
		$.ajax({
			url: 'https://' + region + '.api.pvp.net/championmastery/location/' + tempr + '/player/' + summonerId + '/topchampions?count=' + boardSize + '&api_key=' + key,
			type: 'GET',
			dataType: 'json',
			data: {},
			success: function (json) {
				for (var i = 0; i < json.length; i++){
					champIds.push(json[i].championId);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert("Error getting list of most mastered champions; list will be randomly generated");
				champIds = [35, 75, 90, 43, 121]; //determined by fair dice roll
												  //guarenteed to be random
				champImages = ['http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/Shaco.png', 
							   'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/Nasus.png', 
							   'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/Malzahar.png', 
							   'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/Karma.png', 
							   'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/Khazix.png'];
				//console.log('Mastery error; results: ');
				//console.log(champIds);
				//console.log(champImages);
			}
		
		});	
		
		d.resolve();
	}, 1000);
		

	return d.promise();
	
}

function step3(){
	var d = $.Deferred();
	
	setTimeout(function(){
		var getImagesErrorMessageNotSent = true;
		for (var i = 0; i < champIds.length; i++){
			$.ajax({
				url: 'https://global.api.pvp.net/api/lol/static-data/' + region + '/v1.2/champion/' + champIds[i] + '?api_key=' + key,
				type: 'GET',
				dataType: 'json',
				data: {},
				success: function (json) {
					//DEBUG
					//console.log('champ image json.key: ' + json.key);
					champImages[i] = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/' + json.key + '.png';
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//alert("Error getting champion images.");
				}
			
			});	
		}
		
		d.resolve();
	}, 1000);
		

	return d.promise();
}

function step4(){
	//This step is to validate the champImages array
	
	//DEBUG
	//console.log('champImages (apiHandler.js): ' + champImages);
	
	function validateChampImages(){
		//console.log('validateChampImages()');
		var recurse = false;
		for (var i = 0; i < boardSize; i++){
			if (champImages[i] == undefined){
				recurse = true;
				break;
			}
			if (champImages[i].indexOf('leagueoflegends.com') == -1){
				recurse = true;
				break;
			}
		}
		if (recurse && !done){
			setTimeout(function(){validateChampImages();}, 1000);
		} else {
			done = true;
			//console.log('champImages (apiHandler.js): ' + champImages);
			return;
		}
		
	}
	
	validateChampImages();
	
	//console.log('step 4');
}

/*
function getData(region, summonerName){
	//regStr = region;
	regStr = 'na';
	sumName = summonerName;
	
	summonerLookUp(function() {
		getChampMastery();
	});
}

function convertIDtoChampName(callback, id){
	regStr = 'na';
	API_KEY = '';
	$.ajax({
		url: 'https://global.api.pvp.net/api/lol/static-data/' + regStr + '/v1.2/champion/' + id + '?api_key=' + API_KEY,
		type: 'GET',
		dataType: 'json',
		data: {},
        success: function (json) {
			
				champName = json.name;
				
				callback();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert("Error getting summoner ID!");
        }
		
	});
}

function summonerLookUp(callback) {
    var SUMMONER_NAME = "";
	//SUMMONER_NAME = sumName;
	SUMMONER_NAME = "JsKingBoo";
	
    API_KEY = $("#theKey").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://' + regStr + '.api.pvp.net/api/lol/' + regStr + '/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                playerId = json[SUMMONER_NAME_NOSPACES].id;
                
                sumName = json[SUMMONER_NAME_NOSPACES].name;
				
				callback();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error getting summoner ID!");
            }
        });
		
		
    } else {}
	
	
}

function getChampMastery() {
	var returnString;
	var tempReg = regStr;
	tempReg = tempReg.toUpperCase();
	if (regStr != 'kr' || regStr != 'ru'){
		tempReg += '1';
	}

	/*var xmlHttp = new XMLHttpRequest();
	this.httpRequest = function(callback){
		xmlHttp.open("GET", 'https://' + regStr + '.api.pvp.net/championmastery/location/' + tempReg + '/player/' + playerId + '/topchampions?count=5&api_key=' + API_KEY, true);
		//xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
		xmlHttp.onreadystatechange = callback;
		xmlHttp.send(null);
	}	
	httpRequest(function(){
		if (xmlHttp.readyState == 4){
			if (xmlHttp.status == 200){
				var result = JSON.parse(xmlHttp.responseText);
				alert(result);
			}
		}
	});*/

	
	
	
	/*$.getJSON('https://' + regStr + '.api.pvp.net/championmastery/location/' + tempReg + '/player/' + playerId + '/topchampions?count=5&api_key=' + API_KEY + '&callback=accessMastery', {},
		function(data){
			$.each(data, function(i, item){
					alert(item.x);
			});
		});*/
		
	/*
	
	$.ajax({
		url: 'https://' + regStr + '.api.pvp.net/championmastery/location/' + tempReg + '/player/' + playerId + '/topchampions?count=5&api_key=' + API_KEY,
		type: 'GET',
		contentType: "application/json; charset=utf-8",
		dataType: 'jsonp',
		jsonp: 'callback',
		jsonpCallback: 'accessMastery',
		crossDomain: true,
		data: {},
		success: function (json) {
			alert(json);
			for (var i = 0; i < json.length; i++){
				champMastery.push(json[i]);
			}
		},
        error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("Error getting summoner mastery points! " + JSON.stringify(XMLHttpRequest) + ", " + textStatus + ", " + errorThrown);
        }
	});
}


function Name() {
    alert(sumName);
}
*/