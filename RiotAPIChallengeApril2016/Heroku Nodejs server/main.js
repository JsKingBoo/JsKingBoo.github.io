
var express = require('express');
var app = express();
var numChamps = 3;
var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter((process.env.LIMIT || 150), (process.env.TIMEFRAME || 'second'), true);

//2 calls per contact (convert name to ID, then gets champion mastery. champ ID to name uses static data and does not count towards rate limit)
//limit 1: 300 per sec/3000 per 10 sec
//limit 2: 300 per sec/180000 per 10 min
//therefore, we limit to 150 per sec

//step 0
app.get('/getData/:region/:summonerName/:number', function (req, res) {
	//step 1
	var apiHandler = require('./api-handler.js');
	apiHandler.region = req.params.region;
	apiHandler.summonerName = req.params.summonerName;
	apiHandler.champRank = req.params.number;
	apiHandler.champIds = [];
	apiHandler.champImages = [];
	console.log('region:' + apiHandler.region + '\nsummonerName:'+apiHandler.summonerName+'\nchampRank:'+apiHandler.champRank);
	
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
	//console.log(res);
	var done = [];
	
	
limiter.removeTokens(1, function(err, remainingRequests){
	
	if (remainingRequests < 0) {
		console.log('denied');
		res.writeHead(429, {'Content-Type': 'text/plain;charset=UTF-8'});
		res.end('429 Too Many Requests - your IP is being rate limited');
	} else {

  
  
	
	//step 2
	apiHandler.call.getSummonerID(function(err, data){
		//console.log('===================SUMMONER ID');
		//console.log('callback\nerror:' + err + '\ndata: ' + JSON.stringify(data));
		apiHandler.summonerId = data[apiHandler.summonerName.replace(" ", "").toLowerCase().trim()].id;
		//console.log('summoner id: ' + apiHandler.summonerId);
		
		//lol async hell
		//get top champs (step 3)
		apiHandler.call.getTopChamps(function(err, data){
			//console.log('===================TOP CHAMPS');
			//console.log('callback\nerror:' + err + '\ndata: ' + JSON.stringify(data));
			for (var i = 0; i < numChamps; i++){
				apiHandler.champIds.push(data[i].championId);
			}
			//console.log('champ ids: ' + apiHandler.champIds);
			
			//convert champ ids into champ names (step 4)
			apiHandler.call.convertChampIDToName(apiHandler.champIds[apiHandler.champRank], function(err, data){
				//console.log('===================CHAMP NAME ' + apiHandler.champRank);
				//console.log('callback\nerror:' + err + '\ndata: ' + JSON.stringify(data));
				apiHandler.champImages.push('http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/' + data.key + '.png');
				//console.log('champ image url: ' + apiHandler.champImages);
				done = apiHandler.champImages;
				done = {'data': done};
				res.end(req.query.callback + '(' + JSON.stringify(done) + ');');
			});

		});
	});

	//else
	};
	
});
	
    //console.log('data: ' + done);
    //res.end(JSON.stringify(done));
	
})


var server = app.listen((process.env.PORT || 5000), function(){

	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port)
});


