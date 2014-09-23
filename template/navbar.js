function drawNavbar(active){ //"home", "teambuilder", "play", "info", "dex"

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
	html += '      <a class="navbar-brand" href="#">PokeLeague</a>';
	html += '    </div>';
	html += '    <!-- Collect the nav links, forms, and other content for toggling -->';
	html += '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	html += '      <ul class="nav navbar-nav">';
	
	if (active == 'dex'){ //check for active dexentries, why do you have to be so difficult?
	
		html += '        <li><a href="../../home/index.html">Home</a></li>';			
		html += '        <li><a href="../../teambuilder/main.html">Teambuilder</a></li>';			
		html += '        <li><a href="../../play/main.html">Play</a></li>';	
		  
	} else {
	
		if (active == 'home'){ //check for active home
			html += '        <li class="active"><a href="#">Home</a></li>';	
		} else {
			html += '        <li><a href="../home/index.html">Home</a></li>';	
		}
		
		if (active == 'teambuilder'){ //check for active teambuilder
			html += '        <li class="active"><a href="#">Teambuilder</a></li>';		
		} else {
			html += '        <li><a href="../teambuilder/main.html">Teambuilder</a></li>';	
		}

		if (active == 'play'){
			html += '        <li class="active"><a href="#">Play</a></li>';		
		} else {
			html += '        <li><a href="../play/main.html">Play</a></li>';	
		}	
		
	}

	
	//dropdown
	
	html += '        <li class="dropdown">';
	html += '          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Information and Leagues<span class="caret"></span></a>';
	html += '          <ul class="dropdown-menu" role="menu">';
	
	if (active == 'dex'){
		html += '            <li><a href="../../info/main.html">Statistics Info</a></li>'; // ../info/main
	} else {
		html += '            <li><a href="../info/main.html">Statistics Info</a></li>'; // ../info/main
	}
	html += '            <li><a href="#">Match Mechanics Info</a></li>';  // ../info/match
	html += '            <li class="divider"></li>';
	html += '            <li><a href="#">Leaderboards</a></li>' //maybe remove these...?
	html += '            <li><a href="#">Winrates</a></li>' //should be handled serverside
	html += '            <li class="divider"></li>';
	html += '            <li><a href="#">Contact</a></li>';
	html += '            <li class="divider"></li>'
	html += '            <li><a href="http://na.leagueoflegends.com/">League of Legends website</a></li>';
	html += '            <li><a href="http://pokemonshowdown.com/">Pokemon simulator</a></li>';		
	html += '          </ul>';
	html += '        </li>';
	html += '      </ul>';
	html += '      <form class="navbar-form navbar-left" role="search">';
	html += '        <div class="form-group">';
	html += '          <input type="text" class="form-control" placeholder="Search">';
	html += '        </div>';
	html += '        <button type="submit" class="btn btn-default">Submit</button>';
	html += '      </form>';
	html += '    </div>     <!-- /.navbar-collapse -->';
	html += '  </div>       <!-- /.container-fluid -->';
	html += '</nav>';

	navContainer.innerHTML=html;

}