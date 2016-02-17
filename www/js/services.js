angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('VoteSelectionService', [function(){
	return {
		myVote: '77',
		getMyVote : function(){
			return this.myVote;
		},
		doVote : function(newVote){
			//var newVote = "11";
			this.myVote = newVote;
		}
	}
}]);

