angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('startPage', {
    url: '/start_page',
    templateUrl: 'templates/start_page.html',
    controller: 'StartPageCtrl'
  })



  .state('voteSelection', {
    url: '/vote_selection',
    templateUrl: 'templates/vote_selection.html',
    controller: 'VoteSelectionCtrl',
    resolve: {
      gameTitle: function(GameTitleService) {
        return GameTitleService.getGameTitle();
      }
    }
  })



  .state('myVote', {
    url: '/my_vote',
    templateUrl: 'templates/my_vote.html',
    controller: 'MyVoteCtrl',
    resolve: {
      myVote: function(VoteSelectionService) {
        return VoteSelectionService.getMyVote();
      }
    }
  })



  .state('results', {
    url: '/results',
    templateUrl: 'templates/results.html',
    controller: 'ResultsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start_page');

});