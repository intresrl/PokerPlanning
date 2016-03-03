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

.controller('ColorsCtrl', function($scope, $timeout) {
	var timer = null;
    $scope.counter = 60;
    $scope.colors ={};
  	$scope.colors.current = {color: "green"};	
    var updateCounter = function() 
    {
    	$scope.counter--;

    	if($scope.counter ===  0) {
            //$scope.$broadcast('timer-stopped', 0);
            $timeout.cancel(timer);
            return;
        }

        if($scope.counter < 15)
 		{
 			$scope.colors.current = {color: "red"};
 		}
 		
    
        console.log('COUNTER: '+$scope.counter);
        timer = $timeout(updateCounter, 1000);
    }
    updateCounter();
})