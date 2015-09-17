/*
tree has these elements:

level: integer determining the level of recursion. top level is 0. next level is 1, etc
operator: ^, [*, /], (+, -), parentheses are only necessary if the previous level uses a higher-priority operator. ignored if value exists
value: ignored if recursion exists
recursion: array that holds two (trees or values) recursively.
*/

var tree = 
{
	
}

//keeps track of the current number of elements inside tree
var size = 0;

//constant
var maxSize = 5;
var minValue = -9;
var maxValue = 9;

//stores answer for convenience
var answer = 0;

function generateTree(){
	//generate branches
	for (var i = 0; i < maxSize; i++){
		//find a place grow the branch
		var pootDispenserHere = exploreTree();
		
		//declare branch
		var newBranch = {};
		newBranch["level"] = pootDispenserHere.length;
		newBranch["operator"] = getOperator();
		newBranch["value"] = Math.floor(Math.random() * (maxValue - minValue + 1) * minValue);
		newBranch["recursion"] = [{}, {}];
		
	}
	console.log(tree);
}

//get a random branch
function exploreTree(){ //path is an int array
	var objectPath = tree;
	var currentPath = [];
	while (objectPath['recursion'] != null){
		var random = Math.floor(Math.random() * 2);
		objectPath = objectPath['recursion'][random];
		currentPath.push(random);
	}
	console.log(currentPath);
	return currentPath;
}

function getOperator(){
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