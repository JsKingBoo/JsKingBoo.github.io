<?php

    //directory (relative) that holds the files
    $dir = "messages";

    //array holding all addresses
    $result = array();

    //get files in directory
    $files = scandir($dir);

	while (($file = $dir->read()) !== false){
		//find MD files
		if(strlen($file) < 3 || substr($file, -4) != '.md')
			continue;
			
        $result[] = $dir . "/" . $file;	
	}

    //convert array to JSON
    echo(json_encode($result));

?>