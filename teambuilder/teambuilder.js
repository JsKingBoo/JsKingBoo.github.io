function initialize(){
//create cookie template
//document.cookie="champ1=fiddlesticks; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
//document.cookie="champ2=sin; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
//document.cookie="champ3=iv; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
//document.cookie="champ4=vi; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
//document.cookie="champ5=shaco; expires=Fri, 1 Jan 2100 12:00:00 GMT; path=/";
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