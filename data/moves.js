/*move code name, accuracy, base power, scaling power, dependent power, category, display name, cooldown, cost, priority, target, CC, buffs, type, contact, projectile, description
NO PASSIVES IN MOVES
IMPORTANT: CODE NAME DOESN'T FOLLOW SAME CONVENTIONS AS CHAMP NAME DUE TO 1 REPEATION
base power: "X bleaners"
scaling power: 

	AP - %AP ratio, out of 100, that boosts the scaling of the ability. e.g. "AP:50" for 50% bonus bleaners
	AD - %AD ratio, out of 100, that boosts the scaling of the ability. e.g. "AD:50" for 50% bonus bleaners

dependent power:

	charge - "wind up" time before channel. e.g. fiddle ult
		duration - duration of channel charging
		canGetCancelled - silence, knockup, etc can disturb it
		canCancelEarly - can cancel mid-charge

	channel
		duration - duration of channel
		initialDamage: T/F, initial burst in channeling like morgana ulti. default false
		constantDamage: T/F, something like fiddle drains. default false
		endingDamage: T/F, something like nunu's bingo blast. default false
		canPerformOtherActions: T/F, can cast other spells while channeling
		recallingStops:T/F, enemy recalls cancel the channel or simply gives the spell a new target (morgana oil spill). default true
		drainCost - If the channel requires draining mana (e.g. anivia ulti) default 0
		
	> > > NOTE < < <
	Both charge and channel can be cancelled at any time
	> > > NOTE < < <
	
	missingHealth:[0.5, 1] //increase by 0.5% for every 1% missing health
				  [1, 100] //1% of missing health
	currentHealth:[1, 1] //does 1% more damage for every 1% current health
				  [10, 100] //10% of current health in damage
	maxHealth:10 //10% max health damage
	
		OTHER POWERS/UNIQUE
		
	enemyAP:80 //does 80% damage of enemy's AP. only for veigar
	deadyVenomStacks: //does 20 damage per stack of deadly venom. only for twitch

category: "Physical", "Magic", "True", "Status"
cooldown is counted in turns
cost is of any resource
priority: default 0, bigger number = go faster, same number = whoever's speed is faster
target: "self", "enemy", "ally", "allEnemies" (aoe), "allAllies" (aoe), "allAlliesAndSelf", "allyOrSelf", "enemyOrAlly", "any", "enemySide", "allySide"
CC - NEVER APPLIED TO ALLIES OR SELF
	
	cycle - used for "cycling" abilities like yasuo Q
		duration - length of cycle
		0:{} - list CC in brackets
		1:{} - list CC in brackets
		2:{} (if applicable) - list CC in brackets
		
	movespeed - add a stage of speed. Use negative amounts for slow
	as - add a stage of attack speed. Use negative amounts for attack speed slows. An AS of 0 will disable auto attacking (but not abilities with on-hit effects), and an AS of -1 or below will disable AA and on-hit effects.
	blind - autos and abilities that apply on-hit always miss for X amount of turns
	root - cannot recall
	silence - cannot cast abilities
	airborne - equivalent of a "flinch". also for yasuo. always lasts 1 turn, cannot make someone airborne if your move is slower, X is percent of airborness
	stun - can't do anything
	taunt - must use autos, can't recall
	fear - like stun, but with additional effect
	suppression - stun that cannot be QSSd away
	mrshred - reduce MR by X amount
	armshred - reduce armor by X amount
	armor - add a stage of armor. Use negative amounts for x0.67, x0.5, etc
	mr - add a stage or mr. Use negative amounts for x0.67, x0.5, etc
	reducehealing - healing is halved for X amount of turns
	
		HAZARDS
	
	noxiousTrap - TEEMO
	
		OTHER DEBUFFS
	
	deadlyVenom - TWITCH
	
	NOTE: everything NOT in "constantCC" or "endingCC" brackets is applied on hit

buffs - NEVER APPLIED TO ENEMIES

	cycle - used for "cycling" abilities like yasuo Q
		duration - length of cycle
		0:{} - list buffs in brackets
		1:{} - list buffs in brackets
		2:{} (if applicable) - list buffs in brackets

	movespeed - add a stage of speed. x1.5, x2, etc
	AD - add a stage of AD. x1.5, x2, etc
	AP - add a stage of AP. x1.5, x2, etc
	AS - add X attack speed.
	invisibility - invisible for X amount of turns
	tenacity - tenacious for X amount of turns
	shield - shield for 1 turn with strength of shield as X, or base "damage" if set to true
	spellshield - shield for 1 turn with strength of shield as X, base "damage" if set to true
	heal - heal for base amount set to "true" or X	
	manaheal - regain a resource, base amount set to "true" or X
	dodge - dodge chance for 1 turn
	crit - additional crit chance for 1 turn
	damagereduction - damage reduction for 1 turn
	armor - add a stage of armor. x1.5, x2, etc
	mr - do i have to repeat myself 
	lifesteal - gain lifesteal for 1 turn
	spellvamp - gain spellvamp for 1 turn
	lockon - next attack or ability never misses. ignores dodge and invisibility
	refreshCD - reduces the cooldown of other abilities by X
	revive - only for zils. on death, revive with X health or set to "true" for base

type: "normal", "fighting" etc etc
contact: only for thornmail purposes
projectile: only for windwall purposes (fking yasuo)
skillshot: only for stealthing purposes
onhit: if ability applies onhit effects
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
		description:"Teemo gains increased movement speed."
	},
	toxicshot:{
		accuracy:true,
		base:20,
		scaling:{
			AP:40,
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
		skillshot:false,
		onhit:true,
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
		skillshot:false,
		onhit:false,
		description:"Teemo places a mushroom trap on the ground. On enemy switch-in, all placed mushrooms explode dealing magic damage."
	},	
	//sivir
	boomerangblade:{
		accuracy:90,
		base:40,
		scaling:{
			AD:100,
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
		skillshot:true,
		onhit:false,
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
		skillshot:false,
		onhit:true,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:false,
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
		skillshot:false,
		onhit:true,
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
		skillshot:false,
		onhit:false,
		description:"Sion deals damage and heals for the amount of damage dealt."
	},
	//ryze
	overload:{
		accuracy:true,
		base:60,
		scaling:{
			AP:40
		},
		dependent:{
			man:6.5
		},
		category:"Magic",
		display:"Overload",
		cooldown:3,
		cost:60,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			cdr:1
		},
		type:"Psychic",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Ryze throws a charge of pure energy."
	},
	runeprison:{
		accuracy:true,
		base:60,
		scaling:{
			AP:60
		},
		dependent:{
			man:4.5
		},
		category:"Magic",
		display:"Rune Prison",
		cooldown:14,
		cost:80,
		priority:0,
		target:"enemy",
		CC:{
			root:1
		},
		buffs:{},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Ryze traps an enemy in a cage of magic."
	},
	spellflux:{
		accuracy:true,
		base:50,
		scaling:{
			AP:35
		},
		dependent:{
			man:1
		},
		category:"Magic",
		display:"Spell Flux",
		cooldown:14,
		cost:80,
		priority:0,
		target:"allEnemies",
		CC:{
			mrshred:12
		},
		buffs:{},
		type:"Psychic",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:true,
		description:"Ryze unleashes an orb of magical power."
	},
	desperatepower:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Desperate Power",
		cooldown:30,
		cost:0,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1,
			AP:2
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Ryze becomes supercharged, gaining bonus movement speed and an increase in power"
	},
	//nunu
	consume:{
		accuracy:true,
		base:70,
		scaling:{
			AP:75
		},
		dependent:{},
		category:"Status",
		display:"Consume",
		cooldown:13,
		cost:60,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			heal:true
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Nunu eats a snack in order to regain some health."
	},	
	bloodboil:{
		accuracy:true,
		base:25,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Blood Boil",
		cooldown:5,
		cost:50,
		priority:0,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			movespeed:1,
			AD:1
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Nunu invigorates an ally by heating their blood."
	},
	iceblast:{
		accuracy:true,
		base:85,
		scaling:{
			AP:100
		},
		dependent:{},
		category:"Magic",
		display:"Ice Blast",
		cooldown:6,
		cost:75,
		priority:0,
		target:"enemy",
		CC:{
			movespeed:-1
		},
		buffs:{},
		type:"Ice",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Nunu throws an iceball."
	},	
	absolutezero:{
		accuracy:100,
		base:200,
		scaling:{
			AP:250
		},
		dependent:{
			channel:{
				duration:3,
				endingDamage:true,
			}
		},
		category:"Magic",
		display:"Absolute Zero",
		cooldown:30,
		cost:100,
		priority:0,
		target:"allEnemies",
		CC:{
			constantCC:{
				movespeed:-1
			}
		},
		buffs:{},
		type:"Ice",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Nunu channels and saps a large area around him of heat, slowing all enemies. When Nun completes the channel he deals massive damage to all enemies caught. If the channel is interrupted only a portion of the damage is dealt."
	},
	//morgana
	darkbinding:{
		accuracy:70,
		base:80,
		scaling:{
			AP:100
		},
		dependent:{},
		category:"Magic",
		display:"Dark Binding",
		cooldown:7,
		cost:50,
		priority:0,
		target:"enemy",
		CC:{
			root:3
		},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Morgana releases a sphere of dark magic that deals damage and roots an enemy."
	},	
	tormentedsoil:{
		accuracy:80,
		base:25,
		scaling:{
			AP:10
		},
		dependent:{
			channel:{
				duration:3,
				constantDamage:true,
				canPerformOtherActions:true,
				recallingStops:true
			},
			missingHealth:[0.5, 1] //increase by 0.5% for every 1% missing health
		},
		category:"Magic",
		display:"Tormented Soil",
		cooldown:9,
		cost:70,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Morgana spills some oil, causing enemies to slip and fall while also causing a financial crisis."
	},
	blackshield:{
		accuracy:true,
		base:95,
		scaling:{
			AP:70
		},
		dependent:{},
		category:"Status",
		display:"Black Shield",
		cooldown:15,
		cost:55,
		priority:0,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			spellshield:true
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Morgana creates a shield around an ally or herself, absorbing magic damage and preventing disables."
	},
	soulshackles:{
		accuracy:100,
		base:175,
		scaling:{
			AP:70
		},
		dependent:{
			channel:{
				duration:3,
				initialDamage:true,
				endingDamage:true,
				recallingStops:true
			}
		},
		category:"Magic",
		display:"Soul Shackles",
		cooldown:30,
		cost:100,
		priority:0,
		target:"allEnemies",
		CC:{
			constantCC:{
				movespeed:-1
			}
			endingCC:{
				stun:2
			}
		},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Morgana latches chains onto the souls of nearby enemies, dealing initial magic damage. At the end of the channel, enemy champions are stunned and are dealt damage again."
	},
	//master yi
	alphastrike:{
		accuracy:100,
		base:25,
		scaling:{
			AD:100
		},
		dependent:{},
		category:"Physical",
		display:"Alpha Strike",
		cooldown:7,
		cost:70,
		priority:1,
		target:"allEnemies",
		CC:{},
		buffs:{
			dodge:10
		},
		type:"Fighting",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Master Yi quickly leaps to strike his enemies and gains a temporary dodge bonus."
	},
	meditate:{
		accuracy:true,
		base:30,
		scaling:{
			AP:30
		},
		dependent:{
			channel:{
				duration:4,
				recallingStops:true
			},
			missingHealth:[1, 1] //increase by 1% for every 1%
		},
		category:"Status",
		display:"Meditate",
		cooldown:15,
		cost:35,
		priority:0,
		target:"self",
		CC:{
			heal:true
		},
		buffs:{
			damagereduction:50
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Master Yi channels and restores health each second."
	},
	wujustyle:{
		accuracy:true,
		base:10,
		scaling:{
			AD:110
		},
		dependent:{},
		category:"True",
		display:"Wuju Style",
		cooldown:7,
		cost:0,
		priority:0,
		target:"self",
		CC:{},
		buffs:{},
		type:"Fighting",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:true,
		description:"Master Yi's next attack deals bonus true damage."
	},
	highlander:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Highlander",
		cooldown:25,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			AS:2,
			movespeed:1,
		},
		type:"Fighting",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Master Yi gains a massive move speed and attack speed boost."
	},
	//kayle
	reckoning:{
		accuracy:100,
		base:60,
		scaling:{
			AP:60,
			AD:20
		},
		dependent:{},
		category:"Magic",
		display:"Reckoning",
		cooldown:8,
		cost:70,
		priority:0,
		target:"enemy",
		CC:{
			movespeed:-1,
			mrshred:3,
			armshred:3
		},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Kayle blasts a target enemy."
	},
	divineblessing:{
		accuracy:true,
		base:60,
		scaling:{
			AP:45,
		},
		dependent:{},
		category:"Status",
		display:"Divine Blessing",
		cooldown:10,
		cost:70,
		priority:0,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			heal:true,
			movespeed:1
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Kayle blesses an ally or herself, healing them and gaining movement speed."
	},
	righteousfuryTR:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Righteous Fury",
		cooldown:8,
		cost:45,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			AP:1,
			AD:-1
		},
		type:"Fire",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Kayle ignites her sword and becomes ranged, dealing magic damage on basic attacks."
	},
	righteousfuryTM:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Righteous Fury",
		cooldown:8,
		cost:45,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			AD:1,
			AP:-1
		},
		type:"Fire",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Kayle deactivates her sword and becomes melee, dealing physical damage on basic attacks."
	},
	intervention:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Intervention",
		cooldown:20,
		cost:0,
		priority:0,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			damagereduction:100
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Kayle bathes an ally or herself in holy light, causing that champion to become immune to damage for a single turn."
	},
	//jax
	leapstrike:{
		accuracy:100,
		base:70,
		scaling:{
			AP:60,
			AD:60
		},
		dependent:{},
		category:"Physical",
		display:"Leap Strike",
		cooldown:10,
		cost:65,
		priority:1,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Fighting",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Jax leaps to a target and deals physical damage."
	},
	empower:{
		accuracy:100,
		base:40,
		scaling:{
			AP:60,
		},
		dependent:{},
		category:"Magic",
		display:"Empower",
		cooldown:7,
		cost:30,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Fighting",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:true,
		description:"Jax empowers his next basic attack."
	},
	counterstrike:{
		accuracy:100,
		base:50,
		scaling:{
			AD:50,
		},
		dependent:{},
		category:"Physical",
		display:"Counterstrike",
		cooldown:17,
		cost:70,
		priority:-1,
		target:"enemy",
		CC:{
			stun:1
		},
		buffs:{
			dodge:100
			damagereduction:25
		},
		type:"Fighting",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Jax dodges all basic attacks and takes less damage from abilities. He then stuns an enemy for one turn."
	},
	grandmastersmight:{
		accuracy:true,
		base:25,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Grandmaster's Might",
		cooldown:20,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			armor:2,
			mr:2
		},
		type:"Fighting",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:true,
		description:"Jax gains a massive armor and magic resist boost."
	},
	//fiddlesticks
	terrify:{
		accuracy:true,
		base:3,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Terrify",
		cooldown:15,
		cost:65,
		priority:0,
		target:"enemy",
		CC:{
			fear:true
		},
		buffs:{},
		type:"Ghost",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Fiddlesticks terrifies an enemy unit."
	},
	drain:{
		accuracy:true,
		base:60,
		scaling:{
			AP:45
		},
		dependent:{
			channel:{
				duration:5,
				constantDamage:true,
				canPerformOtherActions:false,
				recallingStops:true
			}
		},
		category:"Magic",
		display:"Drain",
		cooldown:5,
		cost:120,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			spellvamp:true
		},
		type:"Grass",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Fiddlesticks channels an enemy unit. It cannot perform any other action while draining, and it can only be cancelled when the target dies, the target recalls, or 5 turns have passed."
	},
	darkwind:{
		accuracy:100,
		base:65,
		scaling:{
			AP:45
		},
		dependent:{},
		category:"Magic",
		display:"Dark Wind",
		cooldown:5,
		cost:120,
		priority:0,
		target:"enemy",
		CC:{
			silence:1
		},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Fiddlesticks tosses a crow which silences enemies."
	},
	crowstorm:{
		accuracy:true,
		base:125,
		scaling:{
			AP:45
		},
		dependent:{
			charge:{
				duration:1,
				canGetCancelled:true,
				canCancelEarly:false
			}
			channel:{
				duration:5,
				constantDamage:true,
				canPerformOtherActions:true,
				recallingStops:false
			}
		},
		category:"Magic",
		display:"Crowstorm",
		cooldown:50,
		cost:130,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{
			heal:true
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"After channeling for a turn, Fiddlesticks will summon a murder of crows to murder anyone in its path."
	},
	//annie
	frostshot:{
		accuracy:true,
		base:0,
		scaling:{
			AD:100
		},
		dependent:{},
		category:"Physical",
		display:"Frost Shot",
		cooldown:0,
		cost:15,
		priority:0,
		target:"enemy",
		CC:{
			movespeed:-1
		},
		buffs:{},
		type:"Ice",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:true,
		description:"Ashe enchants her arrows with ice, slowing her target with each hit."
	},
	volley:{
		accuracy:99,
		base:40,
		scaling:{
			AD:100
		},
		dependent:{},
		category:"Physical",
		display:"Volley",
		cooldown:6,
		cost:15,
		priority:0,
		target:"enemy",
		CC:{
			movespeed:-1
		},
		buffs:{},
		type:"Ice",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Ashe fires 7 arrows in a cone, slowing every target hit."
	},
	hawkshot:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Hawkshot",
		cooldown:30,
		cost:15,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			lockon:true
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Ashe's next attack or ability never misses."
	},
	enchantedcrystalarrow:{
		accuracy:50,
		base:250,
		scaling:{
			AP:100 //ap ashe new meta?
		},
		dependent:{},
		category:"Magic",
		display:"Enchanted Crystal Arrow",
		cooldown:35,
		cost:100,
		priority:0,
		target:"enemy",
		CC:{
			stun:1,
			movespeed:-1
		},
		buffs:{},
		type:"Ice",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Ashe fires a giant arrow which stuns, slows, and deals massive damage to the enemy hit."
	},	
	//annie
	disintegrate:{
		accuracy:100,
		base:80,
		scaling:{
			AP:80
		},
		dependent:{},
		category:"Magic",
		display:"Disintegrate",
		cooldown:3,
		cost:40,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Annie blasts a target enemy with a fireball."
	},
	incinerate:{
		accuracy:100,
		base:70,
		scaling:{
			AP:85
		},
		dependent:{},
		category:"Magic",
		display:"Incinerate",
		cooldown:8,
		cost:70,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Annie scorches all enemies in front of her."
	},
	moltenshield:{
		accuracy:true,
		base:20,
		scaling:{
			AP:10
		},
		dependent:{},
		category:"Status",
		display:"Molten Shield",
		cooldown:10,
		cost:20,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			armor:1,
			mr:1
		},
		type:"Fire",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Annie gives herself bonus armor and magic resist."
	},
	summontibbers:{
		accuracy:100,
		base:175,
		scaling:{
			AP:80
		},
		dependent:{},
		category:"Magic",
		display:"Summon: Tibbers",
		cooldown:40,
		cost:100,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Annie violently summons her pet Tibbers, dealing damage everywhere."
	},		
	//alistar
	pulverize:{
		accuracy:true,
		base:60,
		scaling:{
			AP:50
		},
		dependent:{},
		category:"Magic",
		display:"Pulverize",
		cooldown:10,
		cost:65,
		priority:0,
		target:"allEnemies",
		CC:{
			airborne:90
		},
		buffs:{},
		type:"Ground",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Alistar smashes the ground beneath him. It usually knocks all targets airborne."
	},
	headbutt:{
		accuracy:100,
		base:55,
		scaling:{
			AP:70
		},
		dependent:{},
		category:"Magic",
		display:"Headbutt",
		cooldown:8,
		cost:65,
		priority:0,
		target:"enemy",
		CC:{
			mrshred:10,
			armshred:10
		},
		buffs:{},
		type:"Rock",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Alistar headbutts an enemy, reducing its armor and magic resist while dealing damage."
	},
	triumphantroar:{
		accuracy:true,
		base:60,
		scaling:{
			AP:20
		},
		dependent:{},
		category:"Status",
		display:"Triumphant Roar",
		cooldown:12,
		cost:70,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			heal:true
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Alistar heals himself."
	},
	unbreakablewill:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Unbreakable Will",
		cooldown:50,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			damagereduction:70,
			ad:1
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Alistar gains damage reduction and increases his attack damage."
	},
	//tristana
	rapidfire:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Rapid Fire",
		cooldown:10,
		cost:0,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			as:1
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Tristana increases her attack speed."
	},
	rocketjump:{
		accuracy:90,
		base:70,
		scaling:{
			AP:80
		},
		dependent:{},
		category:"Magic",
		display:"Rocket Jump",
		cooldown:15,
		cost:70,
		priority:0,
		target:"enemy",
		CC:{
			movespeed:-1
		},
		buffs:{},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Tristana fires at the ground to propel herself on top of the enemy, dealing magic damage and slowing them."
	},
	explosiveshot:{
		accuracy:100,
		base:80,
		scaling:{
			AP:100
		},
		dependent:{
			channel:{
				duration:5,
				constantDamage:true,
				canPerformOtherActions:true,
				recallingStops:true
			},
		},
		category:"Magic",
		display:"Explosive Shot",
		cooldown:25,
		cost:50,
		priority:0,
		target:"enemy",
		CC:{
			reducehealing:5
		},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Tristana explosively shoots an enemy, causing them to bleed health and also reduce its healing."
	},	
	bustershot:{
		accuracy:100,
		base:300,
		scaling:{
			AP:150
		},
		dependent:{},
		category:"Magic",
		display:"Buster Shot",
		cooldown:40,
		cost:100,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Fire",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Tristana fires a massive cannonball, dealing a great amount of damage."
	},
	//twisted fate
	wildcards:{
		accuracy:80,
		base:60,
		scaling:{
			AP:65
		},
		dependent:{},
		category:"Magic",
		display:"Wild Cards",
		cooldown:4,
		cost:60,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Steel",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Twisted Fate throws cards forward, striking enemies hit sharply."
	},
	pickacard:{
		accuracy:100,
		base:60,
		scaling:{
			AD:100,
			AP:65
		},
		dependent:{},
		category:"Magic",
		display:"Pick a Card",
		cooldown:4,
		cost:60,
		priority:0,
		target:"enemy",
		CC:{
			cycle:{
				duration:3,
				0:{},
				1:{
					movespeed:-1
				},
				2:{
					stun:1
				}
			}
		},
		buffs:{
			cycle:{
				duration:3,
				0:{
					manaheal:100
				},
				1:{},
				2:{}
			}		
		},
		type:"Psychic",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:true,
		description:"Twisted Fate picks a card."
	},	
	stackeddeck:{
		accuracy:true,
		base:55,
		scaling:{
			AD:100,
			AP:50
		},
		dependent:{},
		category:"Magic",
		display:"Stacked Deck",
		cooldown:6,
		cost:60,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			as:1
		},
		type:"Normal",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:true,
		description:"Twisted Fate gains attack speed and deals bonus damage on his next attack."
	},
	destiny:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Destiny",
		cooldown:10,
		cost:150,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1,
			crit:100,
			lockon:true
		},
		type:"Normal",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Twisted Fate reveals all champions. His next attack will not miss, and if applicable it will critically strike."
	},	
	//warwick
	hungeringstrike:{
		accuracy:100,
		base:55,
		scaling:{
			AP:100
		},
		dependent:{
			maxHealth:10
		},
		category:"Magic",
		display:"Hungering Strike",
		cooldown:7,
		cost:80,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			heal:true
		},
		type:"Dark",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Warwick swipes at an enemy, dealing magic damage and stealing some health."
	},
	hunterscall:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Hunter's Call",
		cooldown:10,
		cost:35,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1,
			as:1
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Warwick howls, gaining bonus movement speed and attack speed."
	},	
	bloodscent:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Blood Scent",
		cooldown:12,
		cost:150,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1,
			lockon:true
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Warwick reveals enemy champions and increases his movement speed"
	},	
	infiniteduress:{
		accuracy:100,
		base:50,
		scaling:{
			AD:40
		},
		dependent:{
			channel:{
				duration:5,
				constantDamage:true,
				canPerformOtherActions:false,
				recallingStops:false
			}
		},
		category:"Magic",
		display:"Infinite Duress",
		cooldown:40,
		cost:100,
		priority:2,
		target:"enemy",
		CC:{
			supression:5
		},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:true,
		description:"Warwick blinks to an enemy champion, suppressing the target and dealing damage over 5 turns."
	},
	//singed
	poisontrial:{
		accuracy:true,
		base:10,
		scaling:{
			AP:30
		},
		dependent:{
			channel:{
				duration:999, //that should be enough
				constantDamage:true,
				canPerformOtherActions:true,
				recallingStops:false,
				drainCost:13
			}
		},
		category:"Magic",
		display:"Poison Trial",
		cooldown:0,
		cost:0,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Singed leaves a trail of poison behind him. The poison will linger so long as he has the mana to fuel it."
	},	
	megaadhesive:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Mega Adhesive",
		cooldown:10,
		cost:70,
		priority:0,
		target:"allEnemies",
		CC:{
			movespeed:-2
		},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Singed creates a pool of glue on the ground. Enemy champions mistake it for deodorant and get trapped."
	},		
	fling:{
		accuracy:100,
		base:80,
		scaling:{
			AP:75
		},
		dependent:{},
		category:"Magic",
		display:"Fling",
		cooldown:10,
		cost:100,
		priority:0,
		target:"enemy",
		CC:{
			airborne:true,
		},
		buffs:{},
		type:"Normal",
		contact:true,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Singed flings a target enemy."
	},
	insanitypotion:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Insanity Potion",
		cooldown:40,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			AP:1,
			movespeed:1,
			armor:1,
			mr:1
			heal:200,
			manaheal:200
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Singed drinks a potent brew of chemicals."
	},
	//zilean
	timebomb:{
		accuracy:100,
		base:90,
		scaling:{
			AP:90
		},
		dependent:{
			channel:{
				duration:3,
				endingDamage:true,
				canPerformOtherActions:true,
				recallingStops:true,
			}
		},
		category:"Magic",
		display:"Time Bomb",
		cooldown:10,
		cost:80,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Zilean places a ticking time bomb on an enemy, dealing magic damage later."
	},
	rewind:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Rewind",
		cooldown:15,
		cost:50,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			refreshCD:10
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Zilean reduces the cooldown of his other abilities by 10."
	},	
	timewarp:{
		accuracy:100,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Time Warp",
		cooldown:20,
		cost:55,
		priority:0,
		target:"any",
		CC:{
			movespeed:-1
		},
		buffs:{
			movespeed:1
		},
		type:"Normal",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Zilean bends time around himself, increasing his movement speed."
	},
	chronoshift:{
		accuracy:true,
		base:100,
		scaling:{
			AP:200
		},
		dependent:{},
		category:"Status",
		display:"Chrono Shift",
		cooldown:150,
		cost:125,
		priority:1,
		target:"allyOrSelf",
		CC:{},
		buffs:{
			revive:true
		},
		type:"Psychic",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Zilean places a protective time rune on an ally or himself. If the target dies, it is revived with a set amount of health at the end of the turn."
	},
	//twitch
	ambush:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Ambush",
		cooldown:20,
		cost:60,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			invisibility:2,
			movespeed:1,
			as:1
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Twitch enters stealth, gaining movement speed and attack speed."
	},
	venomcask:{
		accuracy:80,
		base:25,
		scaling:{},
		dependent:{},
		category:"Magic",
		display:"Venom Cask",
		cooldown:10,
		cost:50,
		priority:0,
		target:"allEnemies",
		CC:{
			movespeed:-2,
			deadlyVenom:2
		},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:true,
		skillshot:true,
		onhit:false,
		description:"Twitch throws something that won't wash off."
	},
	contaminate:{
		accuracy:80,
		base:20,
		scaling:{
			AP:20,
			AD:30
		},
		dependent:{
			deadlyVenomStacks:true
		},
		category:"Physical",
		display:"Contaminate",
		cooldown:7,
		cost:50,
		priority:0,
		target:"allEnemies",
		CC:{},
		buffs:{},
		type:"Poison",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Twitch throws something that won't wash off."
	},
	rattatattat:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Physical",
		display:"Contaminate",
		cooldown:30,
		cost:100,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			ad:3
		},
		type:"Poison",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Twitch's attacks hit extremely hard."
	},	
	//evelynn
	hatespike:{
		accuracy:100,
		base:30,
		scaling:{
			AP:30,
			AD:25
		},
		dependent:{},
		category:"Magic",
		display:"Hate Spike",
		cooldown:1,
		cost:12,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{},
		type:"Dark",
		contact:false,
		projectile:true,
		skillshot:false,
		onhit:false,
		description:"Evelynn sends out a hate spike"
	},	
	darkfrenzy:{
		accuracy:true,
		base:0,
		scaling:{},
		dependent:{},
		category:"Status",
		display:"Dark Frenzy",
		cooldown:5,
		cost:12,
		priority:0,
		target:"self",
		CC:{},
		buffs:{
			movespeed:1
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Evelynn speeds up."
	},
	ravage:{
		accuracy:100,
		base:0,
		scaling:{
			AD:100,
			AP:100
		},
		dependent:{},
		category:"Physical",
		display:"Ravage",
		cooldown:4,
		cost:12,
		priority:0,
		target:"enemy",
		CC:{},
		buffs:{
			AS:1
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Evelynn strikes an enemy twice and becomes enraged."
	},
	agonysembrace:{
		accuracy:100,
		base:0,
		scaling:{},
		dependent:{
			currentHealth:[15, 100]
		},
		category:"Magic",
		display:"Agony's Embrace",
		cooldown:30,
		cost:12,
		priority:0,
		target:"allEnemies",
		CC:{
			movespeed:-1
		},
		buffs:{
			shield:true
		},
		type:"Dark",
		contact:false,
		projectile:false,
		skillshot:false,
		onhit:false,
		description:"Evelynn embales an area, gaining a shield if it hits an enemy."
	},	
}