function getNews(){
  var httpReq;
  
  if (window.XMLHttpRequest){
	httpReq=new XMLHttpRequest();
  } else {
    httpReq=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  try {
    alert("test 0")
	httpReq.open("GET", "newsgetter.php", true);
	httpReq.send(null);
	alert("test 1");
  } catch(e) {
    alert("ERROR: " + e);
  }  
  
  httpReq.onload = function() {
    //convert result to JSON
	alert("test 3");
	var result = JSON.parse(httpReq.responseText);
	loadNews(result);
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
