/*
tree has these elements:

level: integer determining the level of recursion. top level is 0. next level is 1, etc
operator: ^, [*, /], (+, -), parentheses are only necessary if the previous level uses a higher-priority operator. ignored if value exists
value: ignored if recursion exists
recursion: array that holds two (trees or values) recursively.
*/

var tree = {};

//keeps track of the current number of elements inside tree
var size = 0;

//constant
var maxSize = 5;
var minValue = -9;
var maxValue = 9;

//stores answer for convenience
var answer = 0;

function generateTree(){
	//initialize tree
	tree["level"] = 0;
	tree["operator"] = generateOperator();
	tree["value"] = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
	tree["recursion"] = [{}, {}];
	
	//generate branches
	for (var i = 0; i < maxSize; i++){
		//find a place grow the branch
		var pootDispenserHere = exploreTree();
		
		//declare and build the branch
		var newBranch = {};
		if (tree["recursion"] == null){
			tree = newBranch;
		}
		
		newBranch["level"] = pootDispenserHere.length;
		newBranch["operator"] = generateOperator();
		newBranch["value"] = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
		newBranch["recursion"] = [{}, {}];
		
		//add to tree (call by pointer pls)
		appendBranch(newBranch, pootDispenserHere, Math.floor(Math.random() * 2), 0, tree["recursion"]);
		
	}
	console.log(tree);
}

//get a random branch
function exploreTree(){
	var objectPath = tree;
	var currentPath = [];
	while (objectPath['recursion'] != null){
		var random = Math.floor(Math.random() * 2);
		objectPath = objectPath['recursion'][random];
		currentPath.push(random);
	}
	//console.log(currentPath);
	return currentPath;
}


function appendBranch(branch, path, isZ, level, current){ 	//branch path isZ are static. 
															//branch is the branch being appended. path is the parent. isZ = 0 or 1, which determines whether to place the new branch on the left or right
															//level and current should always be 0, tree when called outside
															
	console.log(path);
	
	//done
	if (current[path[level]]["recursion"] == null){
		current[isZ] = branch;
		console.log("added");
		console.log(tree);
		return;
	}
	//not done
	appendBranch(branch, path, isZ, level+1, current[path[level]]["recursion"]);
}

function generateOperator(){
	var random = Math.floor(Math.random() * 5);
	if (random == 0){
		return "^";
	} else if (random == 1){
		return "*";
	} else if (random == 2){
		return "/";
	} else if (random == 3){
		return "+";
	} else if (random == 4){
		return "-";
	}
}