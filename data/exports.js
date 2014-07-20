function getExports(){

	getScript('champs.js', function(){
		window.exports['champs'] = championData;
	});
	getScript('effectiveness.js', function(){
		window.exports['effectiveness'] = effectivenessChart;
	});
	getScript('runes.js', function(){
		window.exports['runes'] = runes;
	});	

	function getScript(url, callback) {
	   var script = document.createElement('script');
	   script.type = 'text/javascript';
	   script.src = url;

	   script.onreadystatechange = callback;
	   script.onload = callback;

	   document.getElementsByTagName('head')[0].appendChild(script);
	}

}