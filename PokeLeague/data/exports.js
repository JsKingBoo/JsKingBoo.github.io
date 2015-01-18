function getExports(){

	var export1 = {};

	getScript('/data/champs.js', function(){
		export1['champs'] = championData;
	});
	getScript('/data/effectiveness.js', function(){
		export1['effectiveness'] = effectivenessChart;
	});
	getScript('/data/runes.js', function(){
		export1['runes'] = runes;
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