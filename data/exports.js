function getExports(){

	var exports;

	getScript('champs.js', function(){
		exports[0] = championData;
	});
	getScript('effectiveness.js', function(){
		exports[1] = effectivenessChart;
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