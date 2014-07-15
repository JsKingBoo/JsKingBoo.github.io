function getNews(source){
  
  var httpReq;
  var html = '<hr />';
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
	//alert(httpReq.readyState);
	//alert(httpReq.responseText);
	//alert(currentNews.toString());
	if (httpReq.readyState == 4){
		var news = parseMD(httpReq.responseText);
		html = '<hr />' + '<p style="margin-left:40px; margin-right:40px">' + news + '</p>' + html;
		newsContainer.innerHTML=html;
		//alert(html);		
	}
  }
  
  function parseMD(text){
    
	var fText = text;
	
	var italic = false;
	var bold = false;
	var monospace = false;
	
	fText = fText.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />'); //handle line break
	
	while ((fText.split('***').length - 1) > 0){ //bold and italic at the same time
		if (italic == false && bold == false){
			fText = fText.replace('***', '<b><i>');
			italic = !italic;
			bold = !bold;
		} else if (italic == false && bold == true){
			fText = fText.replace('***', '</b><i>');	
			italic = !italic;
			bold = !bold;			
		} else if (italic == true && bold == false){
			fText = fText.replace('***', '<b></i>');
			italic = !italic;
			bold = !bold;
		} else if (italic == true && bold == true){
			fText = fText.replace('***', '</b></i>');		
			italic = !italic;
			bold = !bold;
		}
	}
	
	while ((fText.split('**').length - 1) > 0){ //bold
		if (bold == false){
			fText = fText.replace('**', '<b>');	
			bold = !bold;
		} else if (bold == true){
			fText = fText.replace('**', '</b>');
			bold = !bold;			
		}
	}	
	
	while ((fText.split('*').length - 1) > 0){ //italic
		if (italic == false){
			fText = fText.replace('*', '<i>');	
			italic = !italic;
		} else if (italic == true){
			fText = fText.replace('*', '</i>');
			italic = !italic;
		}
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
	
    return fText;
  }
  
}