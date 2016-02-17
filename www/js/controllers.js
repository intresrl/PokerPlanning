angular.module('app.controllers', [])

.controller('StartPageCtrl', function($scope) {

})

.controller('VoteSelectionCtrl', function($scope, VoteSelectionService) {
	var vcs = this;
	vcs.doVote = function(event){
		VoteSelectionService.doVote(event.target.id);
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