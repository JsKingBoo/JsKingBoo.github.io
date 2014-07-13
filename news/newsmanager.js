function getNews(source){
  
  var httpReq;
  var html = '<hr>';
  var newsUpper = 10;
  var newsLower = 0;
  var newsLimit = 10;
  var currentNews = 0;
  
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
		//alert(httpReq.responseText);
		loadNews(httpReq.responseText);
	}
  }
}

function loadNews(text){
  alert("test 1")
  var newsContainer = document.getElementById("news-holder");
  html += text;
  alert("test 2");
  html += '<hr>';
  alert(html);
  newsContainer.innerHTML=html;
  /*var html = '<hr>';
  for(var i = 0; i < result.length; i++) {
	html += result[i];
	html += '<hr>';
  }
  newsContainer.innerHTML=html;
*/
}