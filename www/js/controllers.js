angular.module('app.controllers', [])

.controller('StartPageCtrl', function($scope, GameTitleService, TimeoutService) {
	var spc = this;

	spc.setGameTitle = function(gameTitle) {
		GameTitleService.setGameTitle(gameTitle);
	}

	spc.setGameTimer = function(tmpTimer) {
		TimeoutService.setGameTimer(tmpTimer);
	}

})

.controller('VoteSelectionCtrl', function($scope, VoteSelectionService, GameTitleService) {
	var vsc = this;
	$scope.pageTitle = GameTitleService.getGameTitle();

	vsc.doVote = function(event, color) {
		VoteSelectionService.setBackgroundColor(color);
		VoteSelectionService.doVote(event.target.firstChild.nodeValue);
	}
})

.controller('MyVoteCtrl', function($scope, myVote, myColor, GameTitleService) {
	$scope.pageTitle = GameTitleService.getGameTitle();
	$scope.myVote = myVote;
	$scope.myColor = myColor;
	$scope.background = {};
	$scope.background.current = {
		background: myColor
	};

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var fontSize = 30;
	var xCoord = c.width / 2;
	var yCoord = c.height / 2;
	ctx.font = fontSize + "px Arial";
	ctx.fillText(myVote, xCoord, yCoord);

	
})

.controller('ResultsCtrl', function($scope, myVote, myColor, GameTitleService) {
	$scope.pageTitle = GameTitleService.getGameTitle();
	$scope.myVote = myVote;
	$scope.background = {};
	$scope.background.current = {
		background: myColor
	};

	var c = document.getElementById("myCanvas2");
	var ctx = c.getContext("2d");
	var fontSize = 30;
	var xCoord = c.width / 2;
	var yCoord = c.height / 2;
	ctx.font = fontSize + "px Arial";
	
	ctx.fillText(myVote, xCoord, yCoord);
})

.controller('TimeoutCtrl', function($scope, $timeout, $state, TimeoutService, VoteSelectionService) {
	var timer = null;

	$scope.counter = TimeoutService.getGameTimer();
	$scope.colors = {};
	$scope.colors.current = {
		color: "green"
	};

	var updateCounter = function() {
		
		if ($scope.counter === 0) {
			$timeout.cancel(timer);
			$state.go('results');
			return;
		}

		$scope.counter--;
		TimeoutService.setGameTimer($scope.counter);

		if ($scope.counter < 10) {
			$scope.colors.current = {
				color: "red"
			};
		}

		timer = $timeout(updateCounter, 1000);
	}
	updateCounter();	
})