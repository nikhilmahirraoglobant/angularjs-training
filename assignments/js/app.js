var mainApp = angular.module('mainApp',[]);

mainApp.controller('mainCotroller',function($scope){
   
    $scope.isExpenses = false;
    $scope.isAddFormShow = false;
    $scope.isUpdateMode = false;
    
    $scope.showIncome = function()
    {
        $scope.isExpenses = false;
    };
    
    $scope.showExpense = function()
    {
        $scope.isExpenses = true;
    };
    
    $scope.submitData = function()
    {
        console.log( $scope.data.name, $scope.data.lta, $scope.data.hra);
        
        $scope.expenseData.push({name: $scope.data.name, hra: $scope.data.hra,lta : $scope.data.lta,
                                 medical: $scope.data.medical,movies:$scope.data.movies,food: $scope.data.food,travel:$scope.data.travel});
        
        $scope.isAddFormShow = false;        
    };
    
    $scope.addNewData = function()
    {
        $scope.data = {};
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = false;
    };
    
    $scope.removeData = function(index)
    {
        $scope.expenseData.splice(index,1);
    };
    
    $scope.updateData = function(index)
    {
        $scope.data =  $scope.expenseData[index];
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = true;
    };
    
    
    $scope.expenseData = [
        {
            name: 'Nikhil Mahirrao',
            hra: 14000,
            lta: 1020,
            medical: 1050,
            movies: 800,
            food: 6000,
            travel: 950
        },
        {
            name: 'Swapnil Takawale',
            hra: 7000,
            lta: 720,
            medical: 850,
            movies: 300,
            food: 4000,
            travel: 1050
        }
    ];
    
    
});