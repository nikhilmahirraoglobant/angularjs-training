mainApp.config(function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: 'views/homeView.html',
        controller: 'homeController'
    })
    
    .state('detail', {
        url: '/detail/:name/:index',
        templateUrl: 'views/detailView.html',
        controller: 'detailController'
    })
    
    .state('edit', {
        url: '/edit/:mode/:index',
        templateUrl: 'views/editView.html',
        controller: 'editController'
    });
        
});