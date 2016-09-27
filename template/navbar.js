function drawNavbar(){ 

	//FUTURE ME: DON'T EDIT ANYTHING BETWEEN THIS AND THAT
	
	//past me: what the flying fuck made you think this was a good idea
	//         now I have to work around your bullshit

	////////////////////////////THIS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	var navContainer = document.getElementById("navbar-holder");

	var html = '';
	html =  '<nav class="navbar navbar-default" role="navigation">';
	html += '  <div class="container-fluid">';
	html += '  <!-- Brand and toggle get grouped for better mobile display -->';
	html += '    <div class="navbar-header">';
	html += '      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">';
	html += '        <span class="sr-only">Toggle navigation</span>';
	html += '        <span class="icon-bar"></span>';
	html += '        <span class="icon-bar"></span>';
	html += '        <span class="icon-bar"></span>';
	html += '      </button>';
	html += '      <a class="navbar-brand" href="http://JsKingBoo.github.io">JsKingBoo.github.io</a>';
	html += '    </div>';
	html += '    <!-- Collect the nav links, forms, and other content for toggling -->';
	html += '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	html += '      <ul class="nav navbar-nav">';

	//////////////////////////////////THAT\\\\\\\\\\\\\\\\\\\\\\\\\\

	html += '        <li><a href="/index.html">Home</a></li>';		
	html += '        <li><a href="/news/main.html">News</a></li>';			
	//html += '        <li><a href="/League of Legends Hide and Seek/main.html">LoL Hide and Seek</a></li>';
	//html += '        <li><a href="/Riot API Challenge 2.0/index.html">Brains and Brawlers</a></li>';		
	html += '        <li><a href="/gallery.html">Misc Things</a></li>';	

	///////////////////////////THIS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	html += '    </div>     <!-- /.navbar-collapse -->';
	html += '  </div>       <!-- /.container-fluid -->';
	html += '</nav>';

	///////////////////////////////THAT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	navContainer.innerHTML=html;

}