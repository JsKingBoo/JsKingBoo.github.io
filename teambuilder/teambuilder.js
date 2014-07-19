function teambuilder(exports){

	var html = '';
	
	var champs = [getCookie('champ1'), getCookie('champ2'), getCookie('champ3'), getCookie('champ4'), getCookie('champ5')];
	
	//create cookie template
	document.cookie="champ1=fiddlesticks; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
	document.cookie="champ2=sin; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
	document.cookie="champ3=iv; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
	document.cookie="champ4=vi; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
	document.cookie="champ5=shaco; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
		
	function initialize(){ //home screen
	  
	  
    /*btn-default = EMPTY
	  btn-primary = COMPLETED
	  btn-warning = INCOMPLETE*/
	  html += '<button href="#" class="btn btn-default" style="margin-left:40px; margin-right:40px; width:1200px; height:120px;">' + champs[0] + '</button>';
	  html += '<button href="#" class="btn btn-default" style="margin-left:40px; margin-right:40px; width:1200px; height:120px;">' + champs[1] + '</button>';
      html += '<button href="#" class="btn btn-primary" style="margin-left:40px; margin-right:40px; width:1200px; height:120px;">' + champs[2] + '</button>';
      html += '<button href="#" class="btn btn-primary" style="margin-left:40px; margin-right:40px; width:1200px; height:120px;">' + champs[3] + '</button>';
      html += '<button href="#" class="btn btn-warning" style="margin-left:40px; margin-right:40px; width:1200px; height:120px;">' + champs[4] + '</button>';

	}

	function setCookie(name, value) {
		document.cookie = name + '=' + value + '; ' + 'expires=Fri, 01 Jan 2100 12:00:00 GMT';
	}

	function getCookie(cname){ //copy pasted from W3School website, no regrets
		var name = cname + '=';
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
		}
		return '';	
	}
	
}