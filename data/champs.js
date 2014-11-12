//id, number, display name, blurb, type, base stats (HP, AD, AS, armor, AP, MR, armor pen, m pen, mana, speed), passive, range (true/false) 2nd form or N/A
//AS = attacks in 1 turn
var championData = {
soraka:{num:1,display:"Soraka",blurb:"The Starchild",types:["Fairy"],baseStats:{hp:405,ad:48,as:1,arm:17,ap:50,mr:30,ape:0,mpe:15,man:240,spe:340},passive:"Salvation",ranged:true},
teemo:{num:2,display:"Teemo",blurb:"The Swift Scout",types:["Dark", "Poison"],baseStats:{hp:375,ad:44,as:1,arm:18,ap:40,mr:30,ape:0,mpe:20,man:200,spe:330},passive:"Camouflage",ranged:true},
sivir:{num:3,display:"Sivir",blurb:"The Battle Mistress",types:["Fighting"],baseStats:{hp:378,ad:60,as:2,arm:15,ap:20,mr:30,ape:20,mpe:0,man:200,spe:335},passive:"Fleet of Foot",ranged:true},
sion:{num:4,display:"Sion",blurb:"The Undead Champion",types:["Fighting", "Ghost"],baseStats:{hp:403,ad:55,as:1,arm:22,ap:50,mr:35,ape:0,mpe:0,man:200,spe:345},passive:"Feel No Pain",ranged:false},
ryze:{num:5,display:"Ryze",blurb:"The Rogue Mage",types:["Psychic"],baseStats:{hp:414,ad:52,as:1,arm:15,ap:50,mr:30,ape:0,mpe:20,man:250,spe:340},passive:"Arcane Mastery",ranged:true},
nunu:{num:6,display:"Nunu",blurb:"The Yeti Rider",types:["Ice"],baseStats:{hp:437,ad:51,as:1,arm:20,ap:10,mr:35,ape:0,mpe:0,man:200,spe:350},passive:"Visionary",ranged:false},
morgana:{num:7,display:"Morgana",blurb:"Fallen Angel",types:["Dark", "Psychic"],baseStats:{hp:400,ad:50,as:1,arm:20,ap:30,mr:30,ape:0,mpe:0,man:240,spe:335},passive:"Soul Siphon",ranged:true},
yi:{num:8,display:"Master Yi",blurb:"The Wuju Bladesman",types:["Fighting"],baseStats:{hp:444,ad:55,as:2,arm:15,ap:0,mr:35,ape:10,mpe:0,man:180,spe:355},passive:"Double Strike",ranged:false},
kayle_m:{num:9,display:"Kayle",blurb:"The Judicator",types:["Fighting"],baseStats:{hp:418,ad:53,as:1,arm:20,ap:40,mr:30,ape:10,mpe:10,man:255,spe:335},passive:"Holy Fervor",ranged:false,otherForm:["kayle_r"]},
kayle_r:{num:9,display:"Kayle",blurb:"The Judicator",types:["Fighting"],baseStats:{hp:418,ad:53,as:1,arm:20,ap:40,mr:30,ape:10,mpe:10,man:255,spe:335},passive:"Holy Fervor",ranged:true,otherForm:["kayle_m"]},
jax:{num:10,display:"Jax",blurb:"Grandmaster at Arms",types:["Fighting"],baseStats:{hp:450,ad:56,as:1,arm:25,ap:20,mr:35,ape:5,mpe:5,man:230,spe:350},passive:"Relentless Assault",ranged:false},
fiddlesticks:{num:11,display:"Fiddlesticks",blurb:"The Harbinger of Doom",types:["Psychic", "Dark"],baseStats:{hp:390,ad:46,as:1,arm:15,ap:70,mr:25,ape:0,mpe:0,man:250,spe:335},passive:"Dread",ranged:true},
ashe:{num:12,display:"Ashe",blurb:"The Frost Archer",types:["Fighting", "Ice"],baseStats:{hp:395,ad:46,as:2,arm:15,ap:0,mr:30,ape:20,mpe:0,man:170,spe:325},passive:"Focus",ranged:true},
annie:{num:13,display:"Annie",blurb:"The Dark Child",types:["Fire"],baseStats:{hp:385,ad:48,as:1,arm:12,ap:40,mr:30,ape:0,mpe:10,man:250,spe:335},passive:"Pyromania",ranged:true},
alistar:{num:14,display:"Alistar",blurb:"The Minotaur",types:["Rock"],baseStats:{hp:442,ad:55,as:1,arm:20,ap:20,mr:35,ape:0,mpe:5,man:215,spe:330},passive:"Trample",ranged:false},
tristana:{num:15,display:"Tristana",blurb:"The Megling Gunner",types:["Fire"],baseStats:{hp:415,ad:45,as:2,arm:20,ap:45,mr:30,ape:5,mpe:5,man:195,spe:325},passive:"Draw a Bead",ranged:true},
fate:{num:16,display:"Twisted Fate",blurb:"The Card Master",types:["Psychic"],baseStats:{hp:385,ad:46,as:1,arm:15,ap:50,mr:30,ape:0,mpe:10,man:200,spe:330},passive:"Loaded Dice",ranged:true},
warwick:{num:17,display:"Warwick",blurb:"The Blood Hunter",types:["Dark"],baseStats:{hp:425,ad:56,as:1,arm:20,ap:25,mr:35,ape:5,mpe:5,man:190,spe:345},passive:"Eternal Thirst",ranged:false},
singed:{num:18,display:"Singed",blurb:"The Mad Chemist",types:["Poison"],baseStats:{hp:405,ad:55,as:1,arm:20,ap:10,mr:30,ape:0,mpe:5,man:215,spe:345},passive:"Empowered Bulwark",ranged:false},
zilean:{num:19,display:"Zilean",blurb:"The Chronokeeper",types:["Psychic"],baseStats:{hp:380,ad:45,as:1,arm:10,ap:50,mr:30,ape:0,mpe:10,man:260,spe:335},passive:"Heightened Learning",ranged:true},
twitch:{num:20,display:"Twitch",blurb:"The Plague Rat",types:["Poison", "Fighting"],baseStats:{hp:390,ad:46,as:2,arm:18,ap:0,mr:30,ape:20,mpe:0,man:220,spe:330},passive:"Deadly Venom",ranged:true},
evelynn:{num:21,display:"Evelynn",blurb:"The Widowmaker",types:["Ghost"],baseStats:{hp:380,ad:48,as:1,arm:16,ap:30,mr:35,ape:5,mpe:10,man:190,spe:340},passive:"Shadow Walk",ranged:false},
tryndamere:{num:22,display:"Tryndamere",blurb:"The Barbarian King",types:["Fighting"],baseStats:{hp:460,ad:56,as:1,arm:19,ap:0,mr:35,ape:10,mpe:0,man:100,spe:345},passive:"Battle Fury",ranged:false},
karthus:{num:23,display:"Karthus",blurb:"The Deathsinger",types:["Ghost"],baseStats:{hp:390,ad:35,as:1,arm:15,ap:20,mr:30,ape:0,mpe:0,man:270,spe:335},passive:"Death Defied",ranged:true},
amumu:{num:24,display:"Amumu",blurb:"The Sad Mummy",types:["Ground"],baseStats:{hp:470,ad:47,as:1,arm:23,ap:10,mr:35,ape:0,mpe:0,man:220,spe:335},passive:"Cursed Touch",ranged:false},
gath:{num:25,display:"Cho'Gath",blurb:"The Terror of the Void",types:["Dark"],baseStats:{hp:440,ad:50,as:1,arm:25,ap:30,mr:35,ape:0,mpe:0,man:205,spe:345},passive:"Carnivore",ranged:false},
anivia:{num:26,display:"Anivia",blurb:"The Cryophoenix",types:["Flying", "Ice"],baseStats:{hp:350,ad:48,as:1,arm:14,ap:30,mr:30,ape:0,mpe:10,man:257,spe:325},passive:"Rebirth",ranged:true},
rammus:{num:27,display:"Rammus",blurb:"The Armordillo",types:["Rock", "Ground"],baseStats:{hp:420,ad:50,as:1,arm:200,ap:10,mr:35,ape:0,mpe:0,man:255,spe:335},passive:"Spiked Shell",ranged:false},
veigar:{num:28,display:"Veigar",blurb:"The Tiny Master of Evil",types:["Dark", "Psychic"],baseStats:{hp:355,ad:40,as:1,arm:16,ap:30,mr:30,ape:0,mpe:30,man:250,spe:340},passive:"Equilibrium",ranged:true},
kassadin:{num:29,display:"Kassadin",blurb:"The Void Walker",types:["Psychic", "Ghost"],baseStats:{hp:433,ad:52,as:1,arm:18,ap:40,mr:30,ape:0,mpe:25,man:230,spe:340},passive:"Void Stone",ranged:false},
gangplank:{num:30,display:"Gangplank",blurb:"The Saltwater Scourge",types:["Water"],baseStats:{hp:500,ad:55,as:1,arm:20,ap:10,mr:35,ape:0,mpe:0,man:215,spe:345},passive:"Grog Soaked Blade",ranged:false},
taric:{num:31,display:"Taric",blurb:"The Gem Knight",types:["Ice", "Rock"],baseStats:{hp:468,ad:52,as:1,arm:20,ap:10,mr:35,ape:5,mpe:5,man:255,spe:340},passive:"Gemcraft",ranged:false},
malphite:{num:32,display:"Malphite",blurb:"Shard of the Monolith",types:["Rock", "Ground"],baseStats:{hp:423,ad:55,as:1,arm:22,ap:20,mr:35,ape:0,mpe:5,man:215,spe:335},passive:"Granite Shield",ranged:false},
janna:{num:33,display:"Janna",blurb:"The Storm's Fury",types:["Water", "Flying"],baseStats:{hp:356,ad:30,as:1,arm:13,ap:40,mr:30,ape:0,mpe:5,man:300,spe:335},passive:"Tailwind",ranged:true},
blitzcrank:{num:34,display:"Blitzcrank",blurb:"The Great Steam Golem",types:["Electric", "Steel"],baseStats:{hp:423,ad:55,as:1,arm:18,ap:10,mr:35,ape:0,mpe:0,man:200,spe:325},passive:"Mana Barrier",ranged:false},
mundo:{num:35,display:"Dr. Mundo",blurb:"The Madman of Zaun",types:["Fighting", "Poison"],baseStats:{hp:433,ad:56,as:1,arm:21,ap:20,mr:35,ape:5,mpe:5,man:0,spe:345},passive:"Adrenaline Rush",ranged:false},
katarina:{num:36,display:"Katarina",blurb:"The Sinister Blade",types:["Dark"],baseStats:{hp:380,ad:50,as:1,arm:15,ap:70,mr:25,ape:0,mpe:0,man:0,spe:345},passive:"Voracity",ranged:false},
corki:{num:37,display:"Corki",blurb:"The Daring Bombardier",types:["Fighting", "Flying"],baseStats:{hp:375,ad:50,as:2,arm:18,ap:20,mr:30,ape:10,mpe:10,man:245,spe:325},passive:"Hextech Shrapnel Shells",ranged:true},
nasus:{num:38,display:"Nasus",blurb:"The Curator of Sands",types:["Fighting", "Ground"],baseStats:{hp:410,ad:40,as:1,arm:19,ap:0,mr:35,ape:5,mpe:0,man:200,spe:350},passive:"Soul Eater",ranged:false},
shaco:{num:39,display:"Shaco",blurb:"The Demon Jester",types:["Fighting", "Dark"],baseStats:{hp:375,ad:90,as:1,arm:10,ap:50,mr:10,ape:5,mpe:5,man:230,spe:350},passive:"Backstab",ranged:false},
heimerdinger:{num:40,display:"Heimerdinger",blurb:"The Revered Inventor",types:["Electric"],baseStats:{hp:350,ad:40,as:1,arm:15,ap:20,mr:30,ape:0,mpe:5,man:240,spe:340},passive:"Techmaturgical Repair Bots",ranged:true,otherForm:["heimerdinger-m"]},
heimerdinger_m:{num:40,display:"Heimerdinger",blurb:"The Revered Inventor",types:["Electric"],baseStats:{hp:350,ad:40,as:1,arm:15,ap:20,mr:30,ape:0,mpe:5,man:240,spe:340},passive:"Techmaturgical Repair Bots",ranged:true,otherForm:["heimerdinger"]},
udyr_ti:{num:41,display:"Udyr",blurb:"The Spirit Walker",types:["Fighting"],baseStats:{hp:430,ad:50,as:1,arm:18,ap:0,mr:35,ape:10,mpe:0,man:220,spe:345},passive:"Monkey's Agility",ranged:false,otherForm:["udyr_tu","udyr_b","udyr_p"]},
udyr_tu:{num:41,display:"Udyr",blurb:"The Spirit Walker",types:["Fighting"],baseStats:{hp:430,ad:50,as:1,arm:18,ap:0,mr:35,ape:10,mpe:0,man:220,spe:345},passive:"Monkey's Agility",ranged:false,otherForm:["udyr_ti","udyr_b","udyr_p"]},
udyr_b:{num:41,display:"Udyr",blurb:"The Spirit Walker",types:["Fighting"],baseStats:{hp:430,ad:50,as:1,arm:18,ap:0,mr:35,ape:10,mpe:0,man:220,spe:345},passive:"Monkey's Agility",ranged:false,otherForm:["udyr_ti","udyr_tu","udyr_p"]},
udyr_p:{num:41,display:"Udyr",blurb:"The Spirit Walker",types:["Fighting"],baseStats:{hp:430,ad:50,as:1,arm:18,ap:0,mr:35,ape:10,mpe:0,man:220,spe:345},passive:"Monkey's Agility",ranged:false,otherForm:["udyr_ti","udyr_tu","udyr_b"]},
nidalee_h:{num:42,display:"Nidalee",blurb:"The Bestial Huntress",types:["Grass"],baseStats:{hp:390,ad:49,as:1,arm:17,ap:30,mr:30,ape:5,mpe:20,man:220,spe:335},passive:"Prowl",ranged:true,otherForm:["nidalee_c"]},
nidalee_c:{num:42,display:"Nidalee",blurb:"The Bestial Huntress",types:["Grass"],baseStats:{hp:390,ad:49,as:1,arm:17,ap:30,mr:30,ape:5,mpe:20,man:220,spe:335},passive:"Prowl",ranged:false,otherForm:["nidalee_h"]},
poppy:{num:43,display:"Poppy",blurb:"The Iron Ambassador",types:["Steel"],baseStats:{hp:423,ad:55,as:1,arm:22,ap:10,mr:30,ape:5,mpe:0,man:185,spe:345},passive:"Valiant Fighter",ranged:false},
gragas:{num:44,display:"Gragas",blurb:"The Rabble Rouser",types:["Normal"],baseStats:{hp:434,ad:50,as:1,arm:20,ap:20,mr:35,ape:5,mpe:10,man:222,spe:330},passive:"Happy Hour",ranged:false},
pantheon:{num:45,display:"Pantheon",blurb:"The Artisan of War",types:["Steel", "Fighting"],baseStats:{hp:433,ad:50,as:1,arm:21,ap:0,mr:30,ape:15,mpe:0,man:215,spe:355},passive:"Aegis Protection",ranged:false},
mordekaiser:{num:46,display:"Mordekaiser",blurb:"The Master of Metal",types:["Steel"],baseStats:{hp:421,ad:51,as:1,arm:19,ap:20,mr:35,ape:5,mpe:30,man:0,spe:340},passive:"Iron Man",ranged:false},
ezreal:{num:47,display:"Ezreal",blurb:"The Prodigal Explorer",types:["Psychic"],baseStats:{hp:350,ad:47,as:1,arm:16,ap:20,mr:30,ape:10,mpe:10,man:235,spe:325},passive:"Rising Spell Force",ranged:true},
shen:{num:48,display:"Shen",blurb:"The Eye of Twilight",types:["Psychic", "Fighting"],baseStats:{hp:428,ad:55,as:1,arm:19,ap:20,mr:30,ape:0,mpe:0,man:200,spe:335},passive:"Ki Strike",ranged:false},
kennen:{num:49,display:"Kennen",blurb:"The Heart of the Tempest",types:["Electric"],baseStats:{hp:403,ad:47,as:1,arm:18,ap:30,mr:30,ape:10,mpe:0,man:200,spe:335},passive:"Mark of the Storm",ranged:true},
garen:{num:50,display:"Garen",blurb:"The Might of Demacia",types:["Fighting"],baseStats:{hp:455,ad:52,as:1,arm:23,ap:0,mr:35,ape:10,mpe:0,man:0,spe:345},passive:"Perseverance",ranged:false},
akali:{num:51,display:"Akali",blurb:"The Fist of Shadow",types:["Fighting", "Dark"],baseStats:{hp:345,ad:53,as:1,arm:10,ap:70,mr:15,ape:0,mpe:10,man:200,spe:350},passive:"Twin Disciples",ranged:false},
malzahar:{num:52,display:"Malzahar",blurb:"The Prophet of the Void",types:["Psychic"],baseStats:{hp:395,ad:45,as:1,arm:10,ap:30,mr:30,ape:0,mpe:30,man:250,spe:340},passive:"Summon Voidling",ranged:true},
olaf:{num:53,display:"Olaf",blurb:"The Berserker",types:["Fighting"],baseStats:{hp:441,ad:54,as:1,arm:20,ap:0,mr:35,ape:10,mpe:0,man:190,spe:350},passive:"Berserker Rage",ranged:false},
maw:{num:54,display:"Kog'Maw",blurb:"The Mouth of the Abyss",types:["Poison"],baseStats:{hp:440,ad:46,as:2,arm:14,ap:20,mr:30,ape:60,mpe:60,man:255,spe:330},passive:"Icathian Surprise",ranged:true},
zhao:{num:55,display:"Xin Zhao",blurb:"The Seneschal of Demacia",types:["Fighting"],baseStats:{hp:445,ad:50,as:1,arm:20,ap:20,mr:30,ape:5,mpe:5,man:215,spe:345},passive:"Challenge",ranged:false},
vladimir:{num:56,display:"Vladimir",blurb:"The Crimson Reaper",types:["Dark"],baseStats:{hp:400,ad:45,as:1,arm:16,ap:20,mr:30,ape:0,mpe:0,man:0,spe:335},passive:"Crimson Pact",ranged:true},
galio:{num:57,display:"Galio",blurb:"The Sentinel's Sorrow",types:["Rock", "Flying"],baseStats:{hp:435,ad:56,as:1,arm:21,ap:0,mr:200,ape:0,mpe:0,man:235,spe:335},passive:"Runic Skin",ranged:false},
urgot:{num:58,display:"Urgot",blurb:"The Headsman's Pride",types:["Poison", "Steel"],baseStats:{hp:435,ad:48,as:1,arm:19,ap:0,mr:30,ape:0,mpe:0,man:220,spe:335},passive:"Zaun_Touched Bolt Augmenter",ranged:true},
fortune:{num:59,display:"Miss Fortune",blurb:"The Bounty Hunter",types:["Normal"],baseStats:{hp:435,ad:46,as:2,arm:19,ap:20,mr:30,ape:5,mpe:0,man:212,spe:325},passive:"Strut",ranged:true},
sona:{num:60,display:"Sona",blurb:"Maven of the Strings",types:["Normal"],baseStats:{hp:380,ad:47,as:1,arm:12,ap:10,mr:30,ape:0,mpe:0,man:265,spe:330},passive:"Power Chord",ranged:true},
swain:{num:61,display:"Swain",blurb:"The Master Tactician",types:["Dark"],baseStats:{hp:385,ad:49,as:1,arm:16,ap:30,mr:30,ape:0,mpe:0,man:240,spe:335},passive:"Carrion Renewal",ranged:true},
lux:{num:62,display:"Lux",blurb:"The Lady of Luminosity",types:["Normal"],baseStats:{hp:345,ad:50,as:1,arm:12,ap:40,mr:30,ape:0,mpe:10,man:250,spe:330},passive:"Illumination",ranged:true},
leblanc:{num:63,display:"Leblanc",blurb:"The Deceiver",types:["Psychic"],baseStats:{hp:390,ad:51,as:1,arm:16,ap:50,mr:30,ape:0,mpe:5,man:250,spe:335},passive:"Mirror Image",ranged:true},
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
}