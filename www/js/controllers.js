angular.module('app.controllers', [])

.controller('StartPageCtrl', function($scope, GameTitleService) {
	var spc = this;
	spc.setGameTitle = function(event){
		GameTitleService.setGameTitle("event.target.firstChild.nodeValue");
	}
})

.controller('VoteSelectionCtrl', function($scope, VoteSelectionService, $ionicNavBarDelegate) {
	var vcs = this;
	$ionicNavBarDelegate.title("banana");//TODO we are working on this
	//$scope.header.title("apple");

	vcs.doVote = function(event){
		VoteSelectionService.doVote(event.target.firstChild.nodeValue);
	}
})

.controller('MyVoteCtrl', function($scope, myVote) {
	$scope.myVote = myVote;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	//var txt = myVote;
	var fontSize = 30;
	var xCoord = c.width / 2;
	var yCoord = c.height / 2;
	ctx.font = fontSize + "px Arial";
	ctx.fillText(myVote, xCoord, yCoord);
})

.controller('ResultsCtrl', function($scope) {

})