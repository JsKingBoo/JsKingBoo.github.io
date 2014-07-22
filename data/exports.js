var exports = {};

function getExports(){

	getScript('champs.js', function(){
		exports['champs'] = championData;
	});
	getScript('effectiveness.js', function(){
		exports['effectiveness'] = effectivenessChart;
	});
	getScript('runes.js', function(){
		exports['runes'] = runes;
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