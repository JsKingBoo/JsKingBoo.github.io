function getNews(source){
  
  var httpReq;
  var html = '<hr />';
  var style = 'style="margin-left:40px; margin-right:40px"';
  var newsUpper = 10;
  var newsLower = 0;
  var newsLimit = 10;
  var currentNews = 0;
  var newsContainer = document.getElementById("news-holder");
  
  
  if (window.XMLHttpRequest){
	httpReq=new XMLHttpRequest();
  } else {
    httpReq=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  var url;
  if (source == 'home'){
    url = "../news/messages/";
  } else if (source == 'news'){
    url = "messages/";
  }

  try {
	for (var currentNews = newsLower; currentNews < newsUpper; currentNews++) {
	  httpReq.open("GET", url + currentNews.toString() + ".md", false);
	  httpReq.onreadystatechange = stateChange;
	  httpReq.send();
    }
  } catch(e) {
    alert("ERROR: " + e);
  }
  
  function stateChange() {
	if (httpReq.readyState == 4){
		var news = parseMD(httpReq.responseText);
		if (news != ''){
			html = '<hr />' + '<p ' + style + '>' + news + '</p>' + html;
			newsContainer.innerHTML=html;
		}	
	}
  }
  
  function parseMD(text){
    
	var fText = text;
	
	var italic = false;
	var bold = false;
	var monospace = false;
	var strike = false;
	var hashtag = [false, false, false, false, false, false];
	
	fText = fText.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />'); //handle line break
	
	while ((fText.split('***').length - 1) > 0){ //bold and italic at the same time
		if (italic == false && bold == false){
			fText = fText.replace('***', '<b><i>');
		} else if (italic == false && bold == true){
			fText = fText.replace('***', '</b><i>');			
		} else if (italic == true && bold == false){
			fText = fText.replace('***', '<b></i>');
		} else if (italic == true && bold == true){
			fText = fText.replace('***', '</b></i>');		
		}
		italic = !italic;
		bold = !bold;
	}
	
	while ((fText.split('**').length - 1) > 0){ //bold
		if (bold == false){
			fText = fText.replace('**', '<b>');	
		} else if (bold == true){
			fText = fText.replace('**', '</b>');		
		}
		bold = !bold;	
	}	
	
	while ((fText.split('*').length - 1) > 0){ //italic
		if (italic == false){
			fText = fText.replace('*', '<i>');	
		} else if (italic == true){
			fText = fText.replace('*', '</i>');
		}
		italic = !italic;
	}
	
	while ((fText.split('~~').length - 1) > 0){ //italic
		if (strike == false){
			fText = fText.replace('~~', '<del>');	
		} else if (strike == true){
			fText = fText.replace('~~', '</del>');
		}
		strike = !strike;
	}
	
	while ((fText.split('`').length - 1) > 0){ //italic
		if (monospace == false){
			fText = fText.replace('`', '<code>');	
		} else if (monospace == true){
			fText = fText.replace('`', '</code>');
		}
	 	monospace = !monospace;
	}

	while ((fText.split('](').length - 1) > 0){ //link 12[45](8)10
		var link1 = fText.indexOf('['); //2
		var link2 = fText.indexOf(']('); //5
		var link3 = fText.indexOf(')'); //8
		var entire = fText.substring(link1, link3 + 1);
		var linkDisplay = fText.substring(link1 + 1, link2);
		var linkTo = fText.substring(link2 + 2, link3);
		fText = fText.replace(entire, '<a href="' + linkTo + '">' + linkDisplay + '</a>');
	}
	
	while ((fText.split('#').length - 1) > 0){ //## headings ##
		for (var counter = 6; counter > 0; counter--){
			var needsReplacing = repeatChar(counter, '#');
			while (fText.indexOf(needsReplacing) > -1){
				if (hashtag[counter - 1] == false){
					fText = fText.replace(needsReplacing, '</p><h' + counter + ' ' + style + '>' + '<p ' + style + '>');
				} else if (hashtag[counter - 1] == true){
					fText = fText.replace(needsReplacing, '</h' + counter + '><p ' + style + '>');				
				}
			    hashtag[counter - 1] = !hashtag[counter - 1];
			}
		}
	}
	
    return fText;
  }
  
  function repeatChar(num, ch){
	var output = '';
	for (var i = 0; i < num; i++){
		output += ch
	}
	return output;
  }
  
}