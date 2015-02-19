function getExports(){

	var export1 = {};

	getScript('champion-bans.js', function(){
		//console.log("packaging champs data");
		export1['champs'] = championData;
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