var adjectives = [
	"",
	"awful",
	"big-headed",
	"bland",
	"bloody",
	"burnt-up",
	"disgraceful",
	"filthy",
	"low-down",
	"no-good",
	"snotty",
	"stuffed-up",
	"toxic",
];

var nouns = [
	"anklebiter",
	"bludgers",
	"bogan",
	"mongrel",
	"nuisance",
	"scoundrel",
	"piece of piss",
	"piker",
	"politician",
	"punter",
	"rogue",
	"vermin",
	"wanker",
	"weasel",
];

function generate(){
	document.getElementById('holder').innerHTML = '<h2>You ' + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + '!</h2>';
}