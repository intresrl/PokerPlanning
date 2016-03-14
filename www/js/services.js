angular.module('app.services', [])

.factory('MyService', [function(){
	return {
		
	}

}])

.service('GameTitleService', [function(){
	return {
		gameTitle: '',
		getGameTitle : function(){
			return this.gameTitle;
		},
		setGameTitle : function(newTitle){
			this.gameTitle = newTitle;
		}
	}
}])

.service('VoteSelectionService', [function(){
	return {
		myVote: '0',
		getMyVote : function(){
			return this.myVote;
		},
		doVote : function(newVote){
			this.myVote = newVote;
		}
	}
}])

.service('TimeoutService', [function(){
	return {
		gameTimer: '0',
		getGameTimer : function(){
			return this.gameTimer;
		},
		setGameTimer : function(newTimer){
			this.gameTimer = newTimer;
		}
	}
}])

