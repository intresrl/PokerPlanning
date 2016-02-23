angular.module('app.controllers', [])

.controller('StartPageCtrl', function($scope, GameTitleService) {
	var spc = this;

	spc.setGameTitle = function(gameTitle){
		GameTitleService.setGameTitle(gameTitle);
	}

})

.controller('VoteSelectionCtrl', function($scope, VoteSelectionService, GameTitleService) {
	var vsc = this;

	$scope.pageTitle = GameTitleService.getGameTitle();
	
	vsc.doVote = function(event){
		VoteSelectionService.doVote(event.target.firstChild.nodeValue);
	}
})

.controller('MyVoteCtrl', function($scope, myVote, GameTitleService) {
	$scope.pageTitle = GameTitleService.getGameTitle();
	$scope.myVote = myVote;
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var fontSize = 30;
	var xCoord = c.width / 2;
	var yCoord = c.height / 2;
	ctx.font = fontSize + "px Arial";
	ctx.fillText(myVote, xCoord, yCoord);
})

.controller('ResultsCtrl', function($scope) {

})