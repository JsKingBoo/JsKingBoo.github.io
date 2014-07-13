function getNews(source){
  
  var httpReq;
  
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
  
  var newsCount = 10;
  var newsProcessed = 0;
  
  try {
	for (var k = 0; k < newsCount; k++) {
	  httpReq.open("GET", url + k.toString() + ".md", false);
	  httpReq.onreadystatechange = stateChange;
	  httpReq.send();
	  newsProcessed += 1;
    }
  } catch(e) {
    alert("ERROR: " + e);
  }
  
  function stateChange() {
    //convert result to JSON
	alert(httpReq.readyState);
	alert(httpReq.responseText);
	if (httpReq.readyState == 4){
		var result = httpReq.responseText;
		if (newsProcessed % 10 == 0){
			loadNews(result);
		}
	}
  }

}

function loadNews(result){ //its an ARRAY
  alert("test 2");
  var newsContainer = document.getElementById("news-holder");
  var html = '<hr>';

  for(var i = 0; i < result.length; i++) {
  
	html += result[i];
	html += '<hr>';

  }
  
  newsContainer.innerHTML=html;

}