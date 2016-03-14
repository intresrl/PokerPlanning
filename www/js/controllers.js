angular.module('app.controllers', [])

.controller('StartPageCtrl', function($scope, GameTitleService, TimeoutService) {
	var spc = this;

	spc.setGameTitle = function(gameTitle){
		console.log('call to SETGAMETITLE');
		GameTitleService.setGameTitle(gameTitle);
	}

	spc.setGameTimer = function(tmpTimer){
		TimeoutService.setGameTimer(tmpTimer);
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

.controller('TimeoutCtrl', function($scope, $timeout, TimeoutService) {
	var timer = null;
    //$scope.counter = 40;
    $scope.counter = TimeoutService.getGameTimer();
    $scope.colors ={};
    if($scope.counter === 0){
    	$scope.colors.current = {color: "red"};
    }
    else{
    	$scope.colors.current = {color: "green"};	
    }
  	
    var updateCounter = function() 
    {
    	if($scope.counter ===  0) {
            //$scope.$broadcast('timer-stopped', 0);
            $timeout.cancel(timer);
            return;
        }

		$scope.counter--;
    	TimeoutService.setGameTimer($scope.counter);
        
        if($scope.counter < 30)
 		{
 			$scope.colors.current = {color: "red"};
 		}

        timer = $timeout(updateCounter, 1000);
    }
    updateCounter();
})