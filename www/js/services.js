angular.module('app.services', [])

.factory('BlankFactory', [function(){

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

