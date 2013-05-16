
var apikey = "acad7bf43f3ffadb56cc941dffc4f88a7b6e9b99a12af538d4ce606c7eeb9740";
var secretkey = "edc808e0ac69d0eca4bc6eb22d5c344f5ae61aafc1ef9cea03157d22c1274c2a";
var roomId = "2099640152";

var a42 = "7ac8c9b71d986dcae9c565d412bf013352aeba7a666f78902235ccd7207a72fd";
var s42 = "251f1f42533964f0a12561a42d2667d01dd4ba840f44b7803c4ede8827df6b3c";

App42.initialize(a42, s42);
var score_board = new App42ScoreBoard();

console.log("Initialized App42 SDK");

function saveScore(name, score){
	score_board.saveUserScore("JungleChaos",name,score,{
		success: function(obj){
			console.log("scored saved");
		},
		error: function(obj){
			console.log("Error saving scores");
		}
	});
}

function getTopRankings(func){
	score_board.getTopNRankings("JungleChaos",10,{
		success: function(obj){
			func(obj);
		},
		error: function(obj){
			console.log("Error retrieving scores");
		}
	});
}

function getTopRankingsFriends(list,func){
	score_board.getTopNRankersByGroup("JungleChaos",list,{
		success: function(obj){
			func(obj);
		},
		error: function(obj){
			console.log("Error retrieving scores");
		}
	});
}

function getHeighestScore(user, func,func2){
	score_board.getHighestScoreByUser("JungleChaos",user,{
		success: function(obj){
			func(obj);
		},
		error: function(obj){
			console.log("Error retrieving score");
			if(func2){
				func2();
			}
		}
	});
}