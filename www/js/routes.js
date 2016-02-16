angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('page1', {
      url: '/page1',
      templateUrl: 'templates/page1.html',
      controller: 'page1Ctrl'
    })
        
      
    
      
        
    .state('page2', {
      url: '/page2',
      templateUrl: 'templates/page2.html',
      controller: 'page2Ctrl'
    })
        
      
    
      
        
    .state('myVote', {
      url: '/page3',
      templateUrl: 'templates/myVote.html',
      controller: 'myVoteCtrl'
    })
        
      
    
      
        
    .state('results', {
      url: '/page4',
      templateUrl: 'templates/results.html',
      controller: 'resultsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});