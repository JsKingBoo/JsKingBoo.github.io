/*
chart is an ARRAY

Every entry has the following tags:

id: unique numerical id to index entry. 
header: blurb which briefly describes the contents.
content: HTML contents of entry.
options: list of options. can be empty. see the options "documentation"

~~

Every options has the following tags:

goID: the id of an entry to link to when the option is selected
text: description of the option

*/

var chart = [
	{
		"id":0,
		"header":"Starting Items",
		"content":"Are you ranged or melee?",
		"options":[
			{text:"Ranged",goID:1},
			{text:"Melee",goID:2}
		]
	},	
	{
		"id":1,
		"header":"Starting Items",
		"content":"Can you poke?",
		"options":[
			{text:"Yes",goID:3},
			{text:"No",goID:4},
			{text:"Wait, I'm Thresh!", goID:5}
		]
	},
	{
		"id":2,
		"header":"Starting Items",
		"content":"Buy <img src='images/relic.png' />",
		"options":[
			{text:"Continue",goID:6}
		]
	},
	{
		"id":3,
		"header":"Starting Items",
		"content":"Buy <img src='images/spellthief.png' />",
		"options":[
			{text:"Continue",goID:6}
		]		
	},	
	{
		"id":4,
		"header":"Starting Items",
		"content":"Buy <img src='images/coin.png' />",
		"options":[
			{text:"Continue",goID:6}
		]		
	},	
	{
		"id":5,
		"header":"Starting Items",
		"content":"Buy <img src='images/relic.png' /> or <img src='images/coin.png' />...your choice",
		"options":[
			{text:"Continue",goID:6}
		]		
	},
	{
		"id":6,
		"header":"Starting Items",
		"content":"Buy potions<br/><img src='images/hppot.png' /> x4<br/>or <img src='images/hppot.png' /> x3 <img src='images/manapot.png' /> x1<br/>or <img src='images/hppot.png' /> x2 <img src='images/manapot.png' /> x2<br/>",
		"options":[
			{text:"Continue",goID:7}
		]		
	},	
	{
		"id":7,
		"header":"Starting Items",
		"content":"Buy <img src='images/trinketward.png' />",
		"options":[
			{text:"Continue",goID:8}
		]		
	},
	{
		"id":8,
		"header":"First Back(s)",
		"content":"How much gold do you have?",
		"options":[
			{text:"Less than 475",goID:9},
			{text:"More than 475",goID:10},
			{text:"More than 800",goID:11},
		]		
	},
	{
		"id":9,
		"header":"First Back(s)",
		"content":"Buy <img src='images/boots.png' /> + <img src='images/hppot.png' /> + <img src='images/manapot.png' /> + <img src='images/ward.png' />",
		"options":[
			{text:"Continue",goID:8},
		]		
	},
	{
		"id":10,
		"header":"First Back(s)",
		"content":"Buy <img src='images/crystal.png' /> + <img src='images/hppot.png' /> + <img src='images/manapot.png' /> + <img src='images/ward.png' /> + <img src='images/pink.png' />",
		"options":[
			{text:"Continue",goID:8},
		]		
	},
	{
		"id":11,
		"header":"First Back(s)",
		"content":"Do you plan on roaming or staying in lane?",
		"options":[
			{text:"Roaming",goID:12},
			{text:"Laning",goID:13}
		]		
	},
	{
		"id":12,
		"header":"First Back(s)",
		"content":"Buy <img src='images/mobiboots.png' /> + <img src='images/hppot.png' /> + <img src='images/manapot.png' /> + <img src='images/ward.png' />",
		"options":[
			{text:"Continue",goID:14},
		]		
	},
	{
		"id":13,
		"header":"First Back(s)",
		"content":"Buy <img src='images/sightstone.png' /> + <img src='images/hppot.png' /> + <img src='images/manapot.png' /> + <img src='images/sweep1.png' />",
		"options":[
			{text:"Continue",goID:14},
		]		
	},
	{
		"id":14,
		"header":"First Back(s)",
		"content":"Core build: <img src='images/mobiboots.png' /> + <img src='images/sightstone.png' /> + <img src='images/sweep1.png' /> + <img src='images/pink.png' />",
		"options":[
			{text:"Continue",goID:15},
		]		
	},
	{
		"id":15,
		"header":"Situational itemization",
		"content":"Do you need offensive/utility or defensive stats?",
		"options":[
			{text:"Offensive/Utility",goID:16},
			{text:"Defensive",goID:17},
		]		
	},	
	{
		"id":16,
		"header":"Situational itemization",
		"content":"Need initiation and peeling? Need damage?",
		"options":[
			{text:"Initiation and peeling",goID:18},
			{text:"Damage",goID:19},
		]		
	},
	{
		"id":17,
		"header":"Situational itemization",
		"content":"Which one of the following is true? (choose highest priority)",
		"options":[
			{text:"You bought Relic Shield",goID:20},
			{text:"Enemy is double AP",goID:21},
			{text:"Enemy team has a lot of CC",goID:22},
			{text:"Enemy has a lot of auto attack reliant champions",goID:23},
			{text:"You need to clear wards, or the enemy team has a stealth champions",goID:27},
		]		
	},
	{
		"id":18,
		"header":"Situational itemization",
		"content":"Sell <img src='images/spellthief.png' /> if you have it and buy <img src='images/talisman.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},		
	{
		"id":19,
		"header":"Situational itemization",
		"content":"Do you scale off AP, and is your ADC doing well?",
		"options":[
			{text:"Yes",goID:24},
			{text:"No",goID:25},
		]		
	},		
	{
		"id":20,
		"header":"Situational itemization",
		"content":"Buy <img src='images/mountain.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},	
	{
		"id":21,
		"header":"Situational itemization",
		"content":"Buy <img src='images/aegis.png' /> and upgrade when needed",
		"options":[
			{text:"OK",goID:15},
		]		
	},	
	{
		"id":22,
		"header":"Situational itemization",
		"content":"Buy <img src='images/mikeal.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},	
	{
		"id":23,
		"header":"Situational itemization",
		"content":"Buy <img src='images/frozenheart.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},	
	{
		"id":24,
		"header":"Situational itemization",
		"content":"Buy <img src='images/zeke.png' />",
		"options":[
			{text:"Next",goID:25},
		]		
	},	
	{
		"id":25,
		"header":"Situational itemization",
		"content":"Is he still doing good, and are you Janna/Karma/Nami/Sona/Soraka?",
		"options":[
			{text:"Yes",goID:26},
			{text:"No",goID:15},
		]		
	},	
	{
		"id":26,
		"header":"Situational itemization",
		"content":"Buy <img src='images/ardent.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},	
	{
		"id":27,
		"header":"Situational itemization",
		"content":"Buy <img src='images/sweep2.png' />",
		"options":[
			{text:"OK",goID:15},
		]		
	},		
	
];


function loadPage(pageID){
	var html='';
	
	//get div ID
	var displayContainer = document.getElementById('holder');
	
	//find correct object
	var object = chart[pageID];

	//load header
	html += '<p>' + object['header'] + '</p>';
	
	//load content
	html += '<h1>' + object['content'] + '</h1>';
	
	//load options
	html += '<p>';
	for (var i = 0; i < object['options'].length; i++){
		html += '<button type="button" class="btn btn-primary btn-lg" onclick="loadPage(' + object['options'][i]['goID'] + ');">' + object['options'][i]['text'] + '</button>';
	}
	html += '</p>';
	
	displayContainer.innerHTML = html;
}

//loadPage(0);








