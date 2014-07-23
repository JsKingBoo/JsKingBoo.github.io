function getExports(){

	var export1 = {};

	getScript('champs.js', function(){
		export1['champs'] = championData;
	});
	getScript('effectiveness.js', function(){
		export1['effectiveness'] = effectivenessChart;
	});
	getScript('runes.js', function(){
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