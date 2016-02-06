mainApp.config(function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/income');
    
    $stateProvider.state('app', {
        abstract: true,
        views: {

            '': {
                templateUrl: 'views/content.html',

            },       
            'editView': {
                templateUrl: 'views/editView.html',
                controller: 'editController'
            }
        }
    })
    
    .state('app.expenses', {
        url: '/expenses',
        templateUrl: 'views/expensesView.html',
        controller: 'expenseController'
    })
    
    .state('app.income', {
        url: '/income',
        templateUrl: 'views/incomeView.html',
        controller: 'incomeController'
    });
        
});