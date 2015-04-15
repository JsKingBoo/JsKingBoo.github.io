function drawNavbar(){ 

	//DON'T EDIT ANYTHING BETWEEN THIS AND THAT

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
	html += '      <a class="navbar-brand" href="JsKingBoo.github.io">JsKingBoo.github.io</a>';
	html += '    </div>';
	html += '    <!-- Collect the nav links, forms, and other content for toggling -->';
	html += '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	html += '      <ul class="nav navbar-nav">';

	//////////////////////////////////THAT\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
	html += '        <li><a href="main.html">URF Home</a></li>';			
	
	///////////////////////////THIS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
	html += '      <form class="navbar-form navbar-left" role="search">';
	html += '        <div class="form-group">';
	html += '          <input type="text" class="form-control" placeholder="Search">';
	html += '        </div>';
	html += '        <button type="submit" class="btn btn-default">Submit</button>';
	html += '      </form>';
	html += '    </div>     <!-- /.navbar-collapse -->';
	html += '  </div>       <!-- /.container-fluid -->';
	html += '</nav>';

	///////////////////////////////THAT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	navContainer.innerHTML=html;

}