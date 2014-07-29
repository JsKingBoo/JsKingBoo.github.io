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
target: "self", "enemy", "ally", "allEnemies" (aoe), "allAllies" (aoe), "allAlliesAndSelf", "allyOrSelf", "enemyOrAlly", "any", "enemySide", "allySide"
CC: "slow", "blind", "root", "silence", "airborne", "stun", "taunt", "fear", "suppression", "mrshred", "armshred"
buffs: "movespeed", "ad", "invisibility", "tenacity", "shield"
type: "normal", "fighting" etc etc
contact: only for thornmail purposes
projectile: only for windwall purposed
*/
moves = {
	//soraka
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
		description:"On ally cast, Soraka drains her mana to restore mana to her target ally. Soraka cannot use Infuse on herself. On enemy cast, Soraka silences the target and deals magic damage to them."
	},
	wish:{
		accuracy:true,
		base:150,
		scaling:{
			AP:55
		},
		dependent:{},
		category:"Status",
		display:"Wish",
		cooldown:30,
		cost:100,
		priority:0,
		target:"allAlliesAndSelf",
		CC:{},
		buffs:{
			heal:true,
		},
		type:"Fairy",
		contact:false,
		projectile:false,
		description:"Soraka fills her allies with hope, restoring health to herself and all friendly champions. Wish can affect untargetable allies."
	},
	//teemo
	blindingdart:{
		accuracy:100,
		base:80,
		scaling:{
			AP:80
		},
		dependent:{},
		category:"Magic",
		display:"Blinding Dart",
		cooldown:8,
		cost:70,
		priority:0,
		target:"enemy",
		CC:{
			blind:2
		},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:true,
		description:"Teemo shoots a dart at an enemy, dealing magic damage and blinding them for 2 turns."
	},
	movequick:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Move Quick",
		cooldown:5,
		cost:40,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1
		},
		type:"Dark",
		contact:false,
		projectile:false,
		description:"Teemo gains increased movement speed."
	},
	toxicshot:{
		accuracy:true,
		base:20,
		scaling:{
			AP:40
			AD:100
		},
		dependent:{},
		category:"Magic",
		display:"Toxic Shot",
		cooldown:2,
		cost:5,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:true,
		description:"Teemo's next attack deals bonus magic damage"
	},	
	noxioustrap:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Magic",
		display:"Noxious Trap",
		cooldown:3,
		cost:85,
		priority:0,
		target:"enemySide",
		CC:{
			noxiousTrap:1
		},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:false,
		description:"Teemo places a mushroom trap on the ground. On enemy switch-in, all placed mushrooms explode dealing magic damage."
	},	
	//sivir
	boomerangblade:{
		accuracy:90,
		base:40,
		scaling:{
			AD:100
			AP:50
		},
		dependent:{
			multihit:2
		},
		category:"Physical",
		display:"Boomerang Blade",
		cooldown:5,
		cost:70,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Normal",
		contact:false,
		projectile:true,
		description:"Sivir hurls her crossblade to a target location, which then returns to her."
	},		
	ricochet:{
		accuracy:100,
		base:0,
		scaling:{
			AD:50
		},
		dependent:{},
		category:"Physical",
		display:"Ricochet",
		cooldown:9,
		cost:60,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Normal",
		contact:false,
		projectile:true,
		description:"Sivir's crossblade bounce to nearby enemies, dealing a percentage of her attack damage to each enemy hit."
	},
	spellshield:{
		accuracy:true,
		base:80,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Spell Shield",
		cooldown:15,
		cost:0,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			spellshield:1,
			manaheal:true		
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		description:"Sivir creates a magical barrier that lasts up to 1.5 seconds, blocking the next enemy ability used on Sivir."
	},
	onthehunt:{
		accuracy:true,
		base:2,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"On The Hunt",
		cooldown:30,
		cost:100,
		priority:0,
		target:"allAlliesAndSelf",
		CC:{},
		buffs:{
			movespeed:2		
		},
		type:"Normal",
		contact:false,
		projectile:false,
		description:"Sivir rallies her allies, granting all nearby allies and herself a movement speed bonus."
	},	
	//sion
	crypticgaze:{
		accuracy:100,
		base:70,
		scaling:{
			AP:90
		},
		dependent:{},
		category:"Magic",
		display:"Cryptic Gaze",
		cooldown:10,
		cost:100,
		priority:0,
		target:"enemy",
		CC:{
			stun:1
		},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:true,
		description:"Sion's gaze terrifies a single enemy."
	},
	deathscaress:{
		accuracy:true,
		base:100,
		scaling:{
			AP:90
		},
		dependent:{},
		category:"Status",
		display:"Death's Caress",
		cooldown:18,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			shield:true
		},
		type:"Dark",
		contact:false,
		projectile:false,
		description:"Sion surrounds himself with a shield which absorbs damage."
	},
	enrage:{
		accuracy:true,
		base:25,
		scaling:{
			AD:100
		},
		dependent:{},
		category:"Physical",
		display:"Enrage",
		cooldown:5,
		cost:80,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			heal:25
		},
		type:"Dark",
		contact:false,
		projectile:false,
		description:"Sion deals bonus damage on his next attack and heals himself."
	},
	cannibalism:{
		accuracy:true,
		base:50,
		scaling:{
			AD:100
		},
		dependent:{},
		category:"Physical",
		display:"Cannibalism",
		cooldown:30,
		cost:90,
		priority:0,
		target:"allAlliesAndSelf",
		CC:{},
		buffs:{
			heal:true
		},
		type:"Dark",
		contact:false,
		projectile:false,
		description:"Sion deals damage and heals for the amount of damage dealt."
	},
}