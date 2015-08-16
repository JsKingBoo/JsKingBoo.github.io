function cipher(){
	var d=4187;
	var a=[275, 2931, 275, 1485, 3268, 1889, 2931, 598, 3106, 3286, 4113, 2476, 4113, 3106, 2119, 2267, 2056, 1708, 3106, 2476, 4113, 1287, 2056, 3106, 3286, 1708, 2119, 2931, 1708, 2931, 4113, 3268, 2738, 1485, 2476, 3268];
	var o="";
	//10001101001 //1 8 32 64 1024; 0, 3, 5, 6, 10
	for (var i=0;i<a.length;i++){		var b=[0,0,0,0,0,0,0,0,0,0,0];
		for (var j=0;j<b.length;j++){			if (j==0){
				b[0] = a[i]%d;} else {
				b[j] = Math.pow(b[j-1], 2)%d;
			}
		}
		if (o.length==1||o.length==32){
			//o+=swach((b[0]*b[3]*b[5]*b[6]*b[10])%d+1);
			o+='e';
		}else{
		//console.log((b[0]*b[3]*b[5]*b[6]*b[10])%d);
		o+=swach((b[0]*b[3]*b[5]*b[6]*b[10])%d);
	}}
	console.log("https://ru.api.pvp.net/api/lol/ru/v2.2/match/74390179?includeTimeline=true&api_key="+o);
	return "aea602d1-5b9b-47c3-9bfc-534d3db0e690";
	//return o;
}
function swach(i){return String.fromCharCode(i)};
//aea602d1-5b9b-47c3-9bfc-534d3db0e690
//aea602d1-5b9b-47c3-9bfc-534d3db0a690
//aea602d1-5b9b-47c3-9bfc-534d3db0a690

//https://ru.api.pvp.net/api/lol/ru/v2.2/match/74390179?includeTimeline=true&api_key=aea602d1-5b9b-47c3-9bfc-534d3db0a690
//https://ru.api.pvp.net/api/lol/ru/v2.2/match/74390179?includeTimeline=true&api_key=aea602d1-5b9b-47c3-9bfc-534d3db0e690