var mainApp = angular.module('mainApp',[]);

mainApp.controller('mainCotroller',function($scope){
   
    $scope.isExpenses = true;
    
    $scope.showIncome = function()
    {
        $scope.isExpenses = false;
    };
    
    $scope.showExpense = function()
    {
        $scope.isExpenses = true;
    };
    
    $scope.expenseData = [
        {
            name: 'Nikhil Mahirrao',
            hra: 14000,
            lta: 1020,
            medical: 1050
        },
        {
            name: 'Swapnil Takawale',
            hra: 7000,
            lta: 720,
            medical: 850
        }
    ];
    
    $scope.incomeData = [
        {
            name: 'Nikhil Mahirrao',
            movies: 800,
            food: 6000,
            travel: 950
        },
        {
            name: 'Swapnil Takawale',
            movies: 300,
            food: 4000,
            travel: 1050
        }
    ];
    
});