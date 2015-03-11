//Display name, Q, W, E, R, notes
//"Yes", "Maybe", "No"
var lastUpdated = "Patch 5.5, March 11, 2015";
var championData = [
["Akali", "No", "Yes", "No", "Yes", ""],
["Alistar", "Yes", "Yes", "Yes", "Yes", ""],
["Amumu", "Yes", "No", "No", "Yes", "Levelling E is allowed; using its active is not"],
["Anivia", "Yes", "Yes", "No", "Yes", ""],
["Annie", "Maybe", "Maybe", "Yes", "Maybe", "You may use your ulti to block skillshots. You may use your Q, W, or R if you have stun (from E)"],
["Ashe", "Yes", "Maybe", "No", "Yes", "W can only be used upon leveling Q (which provides W with the slow)"],
["Blitzcrank", "Yes", "Yes", "Yes", "Yes", ""],
["Cho'Gath", "Yes", "Yes", "No", "No", ""],
["Corki", "No", "Yes", "No", "No", ""],
["Dr. Mundo", "Yes", "Yes", "No", "Yes", ""],
["Evelynn", "No", "Yes", "No", "Yes", "PERMABANNED for both Hiders and Seekers. May not kill for a reset on W (unless the seeker has stayed in the field for an extended period of time at low health)"],
["Ezreal", "No", "No", "Yes", "No", ""],
["Fiddlesticks", "Yes", "No", "Yes", "Yes", ""],
["Galio", "Yes", "Yes", "Yes", "Yes", ""],
["Gangplank", "No", "Yes", "Yes", "Yes", ""],
["Garen", "Yes", "Yes", "No", "No", ""],
["Gragas", "Yes", "Contested", "Yes", "Yes", "W may proc passive"],
["Heimerdinger", "Maybe", "No", "Yes", "Maybe", "Q can only be used to block skillshots. R can only be used on Q and R"],
["Janna", "Yes", "Yes", "Yes", "Yes", ""],
["Jax", "Yes", "No", "Yes", "Yes", ""],
["Karthus", "No", "Yes", "No", "No", ""],
["Kassadin", "Yes", "No", "Yes", "Yes", "PERMABANNED for both Hiders and Seekers"],
["Katarina", "No", "Yes", "Yes", "No", ""],
["Kayle", "Yes", "Yes", "No", "Yes", ""],
["Kennen", "No", "No", "Yes", "No", "Kennen cannot proc his passive"],
["Kog'Maw", "No", "No", "Yes", "No", ""],
["Leblanc", "No", "Yes", "Yes", "Yes", ""],
["Lux", "Yes", "Yes", "Yes", "No", ""],
["Malphite", "Yes", "Yes", "Yes", "Yes", ""],
["Malzahar", "Yes", "Yes", "Yes", "Yes", "W can be used to spawn a voidling and block skillshots"],
["Miss Fortune", "No", "No", "Yes", "No", ""],
["Mordekaiser", "Contested", "Yes", "Contested", "Contested", "Abilities proc passive, which give him an absorption shield"],
["Morgana", "Yes", "No", "Yes", "Yes", ""],
["Nasus", "No", "Yes", "Yes", "Yes", ""],
["Nidalee (Cougar)", "No", "Yes", "No", "Yes", ""],
["Nidalee (Human)", "No", "No", "Yes", "Yes", ""],
["Pantheon", "No", "Yes", "No", "Yes", ""],
["Nunu", "Yes", "Yes", "Yes", "Yes", "Realize that you can only use your Q if the enemy team has a pet (such as Malzahar's Voidlings)"],
["Olaf", "Yes", "No", "No", "Yes", ""],
["Poppy", "No", "Yes", "Yes", "Yes", ""],
["Rammus", "Yes", "Yes", "Yes", "No", ""],
["Ryze", "No", "Yes", "No", "Yes", ""],
["Shaco", "Yes", "Yes", "Yes", "Yes", ""],
["Shen", "No", "Yes", "Yes", "Yes", ""],
["Singed", "No", "Yes", "Yes", "Yes", ""],
["Sion", "Yes", "Yes", "Yes", "Yes", ""],
["Sivir", "No", "No", "Yes", "Yes", ""],
["Sona", "No", "Yes", "Yes", "Yes", ""],
["Soraka", "Yes", "Yes", "Yes", "Yes", ""],
["Swain", "Yes", "Yes", "No", "No", ""],
["Taric", "Yes", "No", "Yes", "No", "Levelling W is allowed; using its active is not"],
["Teemo", "Yes", "Yes", "No", "Yes", "PERMABANNED for Hiders"],
["Tristana", "No", "Yes", "No", "No", "You may not kill for a reset on W (unless the seeker has stayed in the field for an extended period of time at low health)"],
["Tryndamere", "Yes", "Yes", "Yes", "Yes", ""],
["Twisted Fate", "No", "Yes", "No", "Yes", "Try not picking a blue card, mkay?"],
["Twitch", "Yes", "Yes", "No", "No", ""],
["Udyr", "No", "Yes", "Yes", "No", "Udyr may auto attack to proc his E stun"],
["Urgot", "Contested", "Yes", "Contested", "No", "Q procs passive, which reduces damage dealt by 15%. It's a mini-exhaust."],
["Veigar", "No", "Yes", "No", "No", ""],
["Vi", "Yes", "No", "No", "No", ""],
["Vladimir", "No", "Yes", "No", "No", ""],
["Warwick", "No", "No", "Yes", "Yes", ""],
["Xin Zhao", "Yes", "No", "Yes", "Yes", ""],
["Zilean", "No", "Yes", "Yes", "Yes", ""]
];
/*
irelia:{num:64,display:"Irelia",blurb:"The Will of the Blades",types:["Psychic", "Fighting"],baseStats:{hp:456,ad:56,as:1,arm:19,ap:10,mr:35,ape:5,mpe:0,man:230,spe:345},passive:"Ionian Fervor",ranged:false},
trundle:{num:65,display:"Trundle",blurb:"The Troll King",types:["Fighting"],baseStats:{hp:455,ad:55,as:1,arm:23,ap:0,mr:35,ape:5,mpe:0,man:206,spe:350},passive:"King's Tribute",ranged:false},
cassiopeia:{num:66,display:"Cassiopeia",blurb:"The Serpent's Embrace",types:["Poison", "Ground"],baseStats:{hp:380,ad:47,as:1,arm:15,ap:50,mr:30,ape:0,mpe:10,man:250,spe:335},passive:"Deadly Cadence",ranged:false},
caitlyn:{num:67,display:"Caitlyn",blurb:"The Sheriff of Piltover",types:["Normal"],baseStats:{hp:380,ad:55,as:2,arm:17,ap:0,mr:30,ape:3,mpe:0,man:255,spe:325},passive:"Headshot",ranged:true},
renekton:{num:68,display:"Renekton",blurb:"The Butcher of the Sands",types:["Ground"],baseStats:{hp:426,ad:53,as:1,arm:19,ap:0,mr:35,ape:3,mpe:0,man:100,spe:345},passive:"Reign of Anger",ranged:false},
karma:{num:69,display:"Karma",blurb:"The Enlightened One",types:["Psychic"],baseStats:{hp:383,ad:50,as:1,arm:14,ap:30,mr:30,ape:0,mpe:7,man:290,spe:335},passive:"Gathering Fire",ranged:true},
maokai:{num:70,display:"Maokai",blurb:"The Twisted Treant",types:["Grass", "Dark"],baseStats:{hp:421,ad:58,as:1,arm:22,ap:20,mr:30,ape:0,mpe:1,man:250,spe:335},passive:"Sap Magic",ranged:false},
iv:{num:71,display:"Jarvan IV",blurb:"The Exemplar of Demacia",types:["Fighting"],baseStats:{hp:420,ad:50,as:1,arm:18,ap:0,mr:35,ape:0,mpe:0,man:235,spe:340},passive:"Martial Cadence",ranged:false},
nocturne:{num:72,display:"Nocturne",blurb:"The Eternal Nightmare",types:["Ghost", "Dark"],baseStats:{hp:440,ad:54,as:1,arm:21,ap:0,mr:30,ape:5,mpe:0,man:215,spe:345},passive:"Umbra Blades",ranged:false},
sin:{num:73,display:"Lee Sin",blurb:"The Blind Monk",types:["Fighting"],baseStats:{hp:428,ad:55,as:1,arm:20,ap:0,mr:30,ape:20,mpe:0,man:200,spe:350},passive:"Flurry",ranged:false},
brand:{num:74,display:"Brand",blurb:"The Burning Vengeance",types:["Fire"],baseStats:{hp:380,ad:52,as:1,arm:16,ap:50,mr:30,ape:0,mpe:0,man:250,spe:340},passive:"Blaze",ranged:true},
rumble:{num:75,display:"Rumble",blurb:"The Mechanized Menace",types:["Fire", "Steel"],baseStats:{hp:450,ad:55,as:1,arm:20,ap:20,mr:35,ape:0,mpe:20,man:100,spe:345},passive:"Junkyard Titan",ranged:false},
vayne:{num:76,display:"Vayne",blurb:"The Night Hunter",types:["Dark", "Steel"],baseStats:{hp:359,ad:50,as:2,arm:13,ap:0,mr:30,ape:50,mpe:0,man:173,spe:330},passive:"Night Hunter",ranged:true},
orianna:{num:77,display:"Orianna",blurb:"The Lady of Clockwork",types:["Steel"],baseStats:{hp:385,ad:44,as:1,arm:12,ap:60,mr:30,ape:0,mpe:0,man:250,spe:325},passive:"Clockwork Windup",ranged:true},
yorick:{num:78,display:"Yorick",blurb:"The Gravedigger",types:["Dark", "Ground"],baseStats:{hp:421,ad:51,as:1,arm:19,ap:0,mr:30,ape:20,mpe:0,man:235,spe:345},passive:"Unholy Covenant",ranged:false},
leona:{num:79,display:"Leona",blurb:"The Radiant Dawn",types:["Fire"],baseStats:{hp:430,ad:55,as:1,arm:22,ap:5,mr:40,ape:0,mpe:0,man:235,spe:335},passive:"Sunlight",ranged:false},
wukong:{num:80,display:"Wukong",blurb:"The Monkey King",types:["Rock", "Fighting"],baseStats:{hp:435,ad:54,as:1,arm:19,ap:0,mr:35,ape:10,mpe:0,man:200,spe:345},passive:"Stone Skin",ranged:false},
skarner:{num:81,display:"Skarner",blurb:"The Crystal Vanguard",types:["Rock", "Ice"],baseStats:{hp:440,ad:54,as:1,arm:23,ap:0,mr:35,ape:0,mpe:0,man:205,spe:345},passive:"Crystallizing Sting",ranged:false},
talon:{num:82,display:"Talon",blurb:"The Blade's Shadow",types:["Dark"],baseStats:{hp:440,ad:50,as:1,arm:21,ap:0,mr:30,ape:0,mpe:0,man:260,spe:350},passive:"Mercy",ranged:false},
riven:{num:83,display:"Riven",blurb:"The Exile",types:["Fighting"],baseStats:{hp:414,ad:51,as:1,arm:19,ap:0,mr:30,ape:0,mpe:0,man:0,spe:345},passive:"Runic Blade",ranged:false},
xerath:{num:84,display:"Xerath",blurb:"The Magus Ascendant",types:["Psychic", "Electric"],baseStats:{hp:380,ad:51,as:1,arm:16,ap:10,mr:30,ape:0,mpe:100,man:238,spe:340},passive:"Mana Surge",ranged:true},
graves:{num:85,display:"Graves",blurb:"The Outlaw",types:["Normal"],baseStats:{hp:410,ad:51,as:1,arm:19,ap:0,mr:30,ape:30,mpe:0,man:255,spe:330},passive:"True Grit",ranged:true},
shyvana_h:{num:86,display:"Shyvana",blurb:"The Half_Dragon",types:["Dragon", "Fire"],baseStats:{hp:435,ad:55,as:1,arm:22,ap:0,mr:30,ape:3,mpe:3,man:100,spe:350},passive:"Dragonborn",ranged:false,otherForm:["shyvana_d"]},
shyvana_d:{num:86,display:"Shyvana",blurb:"The Half_Dragon",types:["Dragon", "Fire"],baseStats:{hp:435,ad:55,as:1,arm:22,ap:0,mr:30,ape:3,mpe:3,man:100,spe:350},passive:"Dragonborn",ranged:false,otherForm:["shyvana_h"]},
fizz:{num:87,display:"Fizz",blurb:"The Tidal Trickster",types:["Water"],baseStats:{hp:414,ad:53,as:1,arm:16,ap:50,mr:30,ape:0,mpe:0,man:200,spe:335},passive:"Nimble Fighter",ranged:false},
volibear:{num:88,display:"Volibear",blurb:"The Thunder's Roar",types:["Ice", "Electric"],baseStats:{hp:440,ad:54,as:1,arm:20,ap:0,mr:30,ape:10,mpe:0,man:220,spe:345},passive:"Chosen of the Storm",ranged:false},
ahri:{num:89,display:"Ahri",blurb:"The Nine_Tailed Fox",types:["Normal"],baseStats:{hp:380,ad:50,as:1,arm:15,ap:50,mr:30,ape:0,mpe:0,man:250,spe:330},passive:"Essence Theft",ranged:true},
viktor:{num:90,display:"Viktor",blurb:"The Machine Herald",types:["Steel", "Electric"],baseStats:{hp:385,ad:49,as:1,arm:16,ap:45,mr:30,ape:0,mpe:5,man:240,spe:335},passive:"Evolving Technology",ranged:true},
sejuani:{num:91,display:"Sejuani",blurb:"The Winter's Wrath",types:["Ice"],baseStats:{hp:440,ad:52,as:1,arm:25,ap:0,mr:35,ape:0,mpe:0,man:220,spe:340},passive:"Frost Armor",ranged:false},
ziggs:{num:92,display:"Ziggs",blurb:"The Hexplosives Expert",types:["Fire"],baseStats:{hp:390,ad:51,as:1,arm:16,ap:30,mr:30,ape:0,mpe:0,man:250,spe:325},passive:"Short Fuse",ranged:true},
nautilus:{num:93,display:"Nautilus",blurb:"The Titan of the Depths",types:["Water", "Rock"],baseStats:{hp:432,ad:52,as:1,arm:20,ap:0,mr:35,ape:0,mpe:0,man:200,spe:325},passive:"Staggering Blow",ranged:false},
fiora:{num:94,display:"Fiora",blurb:"The Grand Duelist",types:["Fighting"],baseStats:{hp:450,ad:55,as:1,arm:19,ap:0,mr:30,ape:30,mpe:0,man:220,spe:350},passive:"Duelist",ranged:false},
lulu:{num:95,display:"Lulu",blurb:"The Fae Sorceress",types:["Fairy"],baseStats:{hp:415,ad:44,as:1,arm:13,ap:30,mr:30,ape:0,mpe:10,man:200,spe:325},passive:"Pix, Faerie Companion",ranged:true},
hecarim:{num:96,display:"Hecarim",blurb:"The Shadow of War",types:["Ghost"],baseStats:{hp:440,ad:56,as:1,arm:20,ap:0,mr:35,ape:5,mpe:0,man:210,spe:345},passive:"Warpath",ranged:false},
varus:{num:97,display:"Varus",blurb:"The Arrow of Retribution",types:["Dark"],baseStats:{hp:400,ad:46,as:2,arm:17,ap:10,mr:30,ape:20,mpe:15,man:250,spe:330},passive:"Living Vengeance",ranged:true},
darius:{num:98,display:"Darius",blurb:"The Hand of Noxus",types:["Fighting"],baseStats:{hp:426,ad:50,as:1,arm:24,ap:0,mr:35,ape:10,mpe:5,man:200,spe:340},passive:"Hemorrhage",ranged:false},
draven:{num:99,display:"Draven",blurb:"The Glorious Executioner",types:["Fighting"],baseStats:{hp:420,ad:46,as:2,arm:20,ap:0,mr:30,ape:10,mpe:0,man:240,spe:330},passive:"League of Draven",ranged:true},
jayce_m:{num:100,display:"Jayce",blurb:"The Defender of Tomorrow",types:["Fighting", "Electric"],baseStats:{hp:420,ad:46,as:1,arm:16,ap:0,mr:30,ape:10,mpe:5,man:240,spe:335},passive:"Hextech Capactior",ranged:false,otherForm:["jayce_r"]},
jayce_r:{num:100,display:"Jayce",blurb:"The Defender of Tomorrow",types:["Fighting", "Electric"],baseStats:{hp:420,ad:46,as:1,arm:16,ap:0,mr:30,ape:10,mpe:5,man:240,spe:335},passive:"Hextech Capactior",ranged:true,otherForm:["jayce_m"]},
zyra:{num:101,display:"Zyra",blurb:"Rise of the Thorns",types:["Grass"],baseStats:{hp:355,ad:50,as:1,arm:15,ap:40,mr:30,ape:0,mpe:10,man:250,spe:325},passive:"Rise of the Thorns",ranged:true},
diana:{num:102,display:"Diana",blurb:"Scorn of the Moon",types:["Dark"],baseStats:{hp:438,ad:48,as:1,arm:20,ap:40,mr:30,ape:0,mpe:15,man:230,spe:345},passive:"Moonsilver Blade",ranged:false},
rengar:{num:103,display:"Rengar",blurb:"The Pridestalker",types:["Dark"],baseStats:{hp:435,ad:55,as:1,arm:20,ap:0,mr:30,ape:10,mpe:0,man:5,spe:345},passive:"Unseen Predator",ranged:false},
syndra:{num:104,display:"Syndra",blurb:"The Dark Sovereign",types:["Psychic"],baseStats:{hp:380,ad:51,as:1,arm:19,ap:40,mr:30,ape:0,mpe:10,man:250,spe:330},passive:"Transcendent",ranged:true},
zix:{num:105,display:"Kha'Zix",blurb:"The Voidreaver",types:["Dark"],baseStats:{hp:430,ad:50,as:1,arm:19,ap:0,mr:30,ape:15,mpe:0,man:260,spe:350},passive:"Unseen Threat",ranged:false},
elise_h:{num:106,display:"Elise",blurb:"The Spider Queen",types:["Dark"],baseStats:{hp:395,ad:30,as:1,arm:17,ap:30,mr:30,ape:5,mpe:5,man:240,spe:335},passive:"Spider Swarm",ranged:true,otherForm:["elise_s"]},
elise_s:{num:106,display:"Elise",blurb:"The Spider Queen",types:["Dark"],baseStats:{hp:395,ad:30,as:1,arm:17,ap:30,mr:30,ape:5,mpe:5,man:240,spe:335},passive:"Spider Swarm",ranged:false,otherForm:["elise_h"]},
zed:{num:107,display:"Zed",blurb:"The Master of Shadows",types:["Dark"],baseStats:{hp:445,ad:50,as:1,arm:21,ap:0,mr:30,ape:5,mpe:0,man:200,spe:345},passive:"Contempt for the Weak",ranged:false},
nami:{num:108,display:"Nami",blurb:"The Tidecaller",types:["Water"],baseStats:{hp:365,ad:48,as:1,arm:13,ap:30,mr:30,ape:0,mpe:0,man:305,spe:340},passive:"Surging Tides",ranged:true},
vi:{num:109,display:"Vi",blurb:"The Piltover Enforcer",types:["Fighting", "Steel"],baseStats:{hp:440,ad:50,as:1,arm:20,ap:0,mr:30,ape:4,mpe:0,man:220,spe:350},passive:"Blast Shield",ranged:false},
thresh:{num:110,display:"Thresh",blurb:"The Chain Warden",types:["Ghost"],baseStats:{hp:411,ad:46,as:1,arm:16,ap:0,mr:30,ape:0,mpe:0,man:210,spe:335},passive:"Damnation",ranged:false},
quinn:{num:111,display:"Quinn",blurb:"Demacia's Wings",types:["Flying", "Fighting"],baseStats:{hp:390,ad:48,as:1,arm:17,ap:0,mr:30,ape:5,mpe:0,man:210,spe:335},passive:"Harrier",ranged:true},
zac:{num:112,display:"Zac",blurb:"The Secret Weapon",types:["Normal"],baseStats:{hp:455,ad:54,as:1,arm:18,ap:0,mr:30,ape:0,mpe:0,man:0,spe:335},passive:"Cell Division",ranged:false},
lissandra:{num:113,display:"Lissandra",blurb:"The Ice Witch",types:["Ice"],baseStats:{hp:365,ad:48,as:1,arm:14,ap:20,mr:30,ape:50,mpe:0,man:220,spe:325},passive:"Iceborn",ranged:false},
aatrox:{num:114,display:"Aatrox",blurb:"The Darkin Blade",types:["Dark"],baseStats:{hp:395,ad:55,as:1,arm:18,ap:0,mr:30,ape:20,mpe:0,man:0,spe:345},passive:"Blood Well",ranged:false},
lucian:{num:115,display:"Lucian",blurb:"The Purifier's Resolve",types:["Normal"],baseStats:{hp:390,ad:46,as:2,arm:19,ap:0,mr:30,ape:30,mpe:0,man:230,spe:330},passive:"Lightslinger",ranged:true},
jinx:{num:116,display:"Jinx",blurb:"The Loose Cannon",types:["Normal"],baseStats:{hp:380,ad:50,as:2,arm:17,ap:0,mr:30,ape:35,mpe:0,man:170,spe:325},passive:"Get Excited!",ranged:true},
yasuo:{num:117,display:"Yasuo",blurb:"The Unforgiven",types:["Flying"],baseStats:{hp:430,ad:50,as:1,arm:19,ap:0,mr:30,ape:10,mpe:0,man:0,spe:350},passive:"Way of the Wanderer",ranged:false},
koz:{num:118,display:"Vel'Koz",blurb:"The Eye of the Void",types:["Psychic"],baseStats:{hp:380,ad:51,as:1,arm:16,ap:50,mr:30,ape:20,mpe:0,man:250,spe:340},passive:"Organic Deconstruction",ranged:false},
braum:{num:119,display:"Braum",blurb:"The Heart of the Freljord",types:["Ice"],baseStats:{hp:430,ad:50,as:1,arm:24,ap:0,mr:40,ape:0,mpe:0,man:230,spe:335},passive:"Concussive Blows",ranged:false},
gnar_m:{num:120,display:"Gnar",blurb:"The Missing Link",types:["Normal"],baseStats:{hp:430,ad:45,as:2,arm:19,ap:0,mr:30,ape:10,mpe:0,man:100,spe:335},passive:"Rage Gene",ranged:true,otherForm:["gnar_r"]},
gnar_r:{num:120,display:"Gnar",blurb:"The Missing Link",types:["Ground", "Fighting"],baseStats:{hp:460,ad:50,as:1,arm:22,ap:0,mr:32,ape:10,mpe:0,man:100,spe:325},passive:"Rage Gene",ranged:true,otherForm:["gnar_m"]},
azir:{num:121,display:"Azir",blurb:"The Emperor of the Sands",types:["Ground"],baseStats:{hp:390,ad:45,as:1,arm:14,ap:60,mr:30,ape:0,mpe:20,man:280,spe:335},passive:"Shurima's Legacy",ranged:false},
kalista:{num:122,display:"Kalista",blurb:"The Spear of Vengeance",types:["Ghost"],baseStats:{hp:410,ad:53,as:1,arm:19,ap:0,mr:30,ape:20,mpe:0,man:230,spe:325},passive:"Martial Poise",ranged:true},
}*/