/*move code name, accuracy, base power, scaling power, dependent power, category, display name, cooldown, cost, priority, target, CC, buffs, type, contact, projectile, description
NO PASSIVES IN MOVES
IMPORTANT: CODE NAME DOESN'T FOLLOW SAME CONVENTIONS AS CHAMP NAME DUE TO 1 REPEATION
base power: "X damage"
scaling power: "X% AP", "X% AD"
dependent power: "X% health", "X% enemy AP", etc
category: "Physical", "Magic", "True", "Status"
cooldown is counted in turns
cost is of any resource
priority: default 0, bigger number = go faster, same number = whoever's speed is faster
target: "self", "enemy", "ally", "allEnemies" (aoe), "allAllies" (aoe), "allyOrSelf", "any", "enemyOrAlly"
CC: "slow", "blind", "root", "silence", "airborne", "stun", "taunt", "fear", "suppression", "mrshred", "armshred"
buffs: "movespeed", "ad", "invisibility", "tenacity", "shield"
type: "normal", "fighting" etc etc
contact: only for thornmail purposes
projectile: only for windwall purposed
*/
moves = {
	starcall:{
		accuracy:100,
		base:40,
		scaling:{
			AP:40
		},
		dependent:{},
		category:"Magic",
		display:"Starcall",
		cooldown:1,
		cost:30,
		priority:0,
		target:"allEnemies",
		CC:{
			mrshred:3
		},
		buffs:{},
		type:"Fairy",
		contact:false,
		projectile:false,
		description:"Soraka summons a shower of stars to fall from the sky, striking all nearby enemy units within range for magic damage and reducing their magic resistance by 6. This effect stacks."
	},
	astralblessing:{
		accuracy:true,
		base:30,
		scaling:{
			AP:35
		},
		dependent:{},
		category:"Status",
		display:"Astral Blessing",
		cooldown:10,
		cost:80,
		priority:0,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			heal:true,
			armor:1
		},
		type:"Fairy",
		contact:false,
		projectile:false,
		description:"Soraka blesses a friendly unit, restoring health and granting them bonus armor."
	},
	infuse:{
		accuracy:100,
		base:50,
		scaling:{
			AP:20
		},
		dependent:{},
		category:"Status",
		display:"Infuse",
		cooldown:10,
		cost:50,
		priority:0,
		target:"enemyOrAlly",
		CC:{
			silence:1
		},
		buffs:{
			manaheal:true,
		},
		type:"Fairy",
		contact:false,
		projectile:false,
		description:""
	},

}