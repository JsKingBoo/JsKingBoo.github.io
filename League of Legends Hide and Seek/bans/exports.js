function getExports(){

	var export1 = {};

	//get champion bans
	getScript('champion-bans.js', function(){
		//console.log("packaging champs data");
		export1['champs'] = championData;
	});

	//get item bans
	getScript('item-bans.js', function(){
		//console.log("packaging items data");
		export1['items'] = itemData;
	});
	
	//get champ ban last update
	getScript('champion-bans.js', function(){
		//console.log("packaging champ update data");
		export1['champupdate'] = lastUpdated;
	});
	
	//get champ ban last update
	getScript('item-bans.js', function(){
		//console.log("packaging item update data");
		export1['itemupdate'] = lastUpdated;
	});	
	
	return export1;
	
	function getScript(url, callback) {
	   var script = document.createElement('script');
	   script.type = 'text/javascript';
	   script.src = url;

	   script.onreadystatechange = callback;
	   script.onload = callback;

	   document.getElementsByTagName('head')[0].appendChild(script);
	}

}