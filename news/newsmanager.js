function getNews(source){
  
  var httpReq;
  var html = '<hr>';
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
		var unformatNews = httpReq.responseText;
		html = '<hr>' + '<p style="margin-left:30px; margin-right:30px>' + unformatNews + '</p>'+ html;
		//alert(html);
		newsContainer.innerHTML=html;
	}
  }
}

/*function loadNews(text){
  html += text;
  html += '<hr>';
  alert(html);
  newsContainer.innerHTML=html;
  var html = '<hr>';
  for(var i = 0; i < result.length; i++) {
	html += result[i];
	html += '<hr>';
  }
  newsContainer.innerHTML=html;

}*/