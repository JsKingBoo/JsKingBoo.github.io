//id, number, display name, type, base stats (HP, AD, armor, AP, MR, armor pen, m pen, mana, speed, crit chance, GP5, lifesteal, spellvamp, cdr), passive, 2nd form or N/A
exports.Runes = {
apm:{num:1,display:"Ability Power",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:1,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
aps:{num:2,display:"Ability Power",type:"Seal",bonusStats:{hp:0,ad:0,arm:0,ap:1,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
apg:{num:3,display:"Ability Power",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:2,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
apq:{num:4,display:"Ability Power",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:5,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
armorm:{num:5,display:"Armor",type:"Mark",bonusStats:{hp:0,ad:0,arm:1,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
armors:{num:6,display:"Armor",type:"Seal",bonusStats:{hp:0,ad:0,arm:2,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
armorg:{num:7,display:"Armor",type:"Glyph",bonusStats:{hp:0,ad:0,arm:1,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
armorq:{num:8,display:"Armor",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:5,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
apenm:{num:9,display:"Armor Penetration",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:2,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
apenq:{num:10,display:"Armor Penetration",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:3,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
adm:{num:11,display:"Attack Damage",type:"Mark",bonusStats:{hp:0,ad:2,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
ads:{num:12,display:"Attack Damage",type:"Seal",bonusStats:{hp:0,ad:1,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
adg:{num:13,display:"Attack Damage",type:"Glyph",bonusStats:{hp:0,ad:1,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
adq:{num:14,display:"Attack Damage",type:"Quintessence",bonusStats:{hp:0,ad:3,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
cdrm:{num:15,display:"Cooldown Reduction",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0.2}},
cdrs:{num:16,display:"Cooldown Reduction",type:"Seal",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0.4}},
cdrg:{num:17,display:"Cooldown Reduction",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0.8}},
cdrq:{num:18,display:"Cooldown Reduction",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:2.5}},
critm:{num:19,display:"Critical Chance",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:1,lfs:0,sva:0,cdr:0}},
crits:{num:20,display:"Critical Chance",type:"Seal",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0.4,lfs:0,sva:0,cdr:0}},
critg:{num:21,display:"Critical Chance",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0.2,lfs:0,sva:0,cdr:0}},
critq:{num:22,display:"Critical Chance",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:2,lfs:0,sva:0,cdr:0}},
healthm:{num:23,display:"Health",type:"Mark",bonusStats:{hp:3,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
healths:{num:24,display:"Health",type:"Seal",bonusStats:{hp:8,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
healthg:{num:25,display:"Health",type:"Glyph",bonusStats:{hp:3,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
healthq:{num:26,display:"Health",type:"Quintessence",bonusStats:{hp:26,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
hybridm:{num:27,display:"Hybrid Penetration",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:1,mpe:1,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
hybridq:{num:28,display:"Hybrid Penetration",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:2,mpe:2,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
lifestealq:{num:29,display:"Lifesteal",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:1.5,sva:0,cdr:0}},
mpenm:{num:30,display:"Magic Penetration",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0.8,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mpeng:{num:31,display:"Magic Penetration",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0.6,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mpenq:{num:32,display:"Magic Penetration",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:2,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mresistm:{num:33,display:"Magic Resist",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0.7,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mresists:{num:34,display:"Magic Resist",type:"Seal",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0.7,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mresistg:{num:35,display:"Magic Resist",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:1.3,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
mresistq:{num:36,display:"Magic Resist",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:4,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
movespeedq:{num:37,display:"Movespeed",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:1.5,crt:0,lfs:0,sva:0,cdr:0}},
resourcem:{num:38,display:"Resource",type:"Mark",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:6,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
resouces:{num:39,display:"Resource",type:"Seal",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:7,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
resourceg:{num:40,display:"Resource",type:"Glyph",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:11,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
resourceq:{num:41,display:"Resource",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:37,spe:0,crt:0,lfs:0,sva:0,cdr:0}},
spellvampq:{num:42,display:"Spell Vamp",type:"Quintessence",bonusStats:{hp:0,ad:0,arm:0,ap:0,mr:0,ape:0,mpe:0,man:0,spe:0,crt:0,lfs:0,sva:2,cdr:0}},
}