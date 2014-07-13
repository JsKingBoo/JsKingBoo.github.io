function getNews(){
  
  var httpReq;
  
  if (window.XMLHttpRequest){
	httpReq=new XMLHttpRequest();
  } else {
    httpReq=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  try {
	httpReq.open("GET", "../news/newsgetter.php", false);
	httpReq.onreadystatechange = stateChange;
	httpReq.send();
  } catch(e) {
    alert("ERROR: " + e);
  }
  
  function stateChange() {
    //convert result to JSON
	alert(httpReq.readyState);
	alert(httpReq.responseText);
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