var mainApp = angular.module('mainApp',['ngMessages']);

mainApp.controller('mainCotroller',function($scope, managerService){
   
    $scope.expenseData = managerService.expenseData;
    $scope.isExpenses = false;
    $scope.isAddFormShow = false;
    $scope.isUpdateMode = false;
    $scope.index = 0;
    
    $scope.showIncome = function()
    {
        $scope.isExpenses = false;
    };
    
    $scope.showExpense = function()
    {
        $scope.isExpenses = true;
    };   
    
    $scope.addNewData = function()
    {
        $scope.data = {};
        
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = false;
    };
    
    $scope.submitData = function()
    {
        managerService.submitData($scope);
        
        $scope.isAddFormShow = false;        
    };
    
    $scope.removeData = function(index)
    {
        managerService.removeData(index);
    };
    
    $scope.updateData = function(index)
    {
        var tempData = JSON.stringify(managerService.expenseData[index]);
        
        $scope.data =  JSON.parse(tempData);
        
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = true;
        
        $scope.index = index;
    };
    
    $scope.cancaled= function(index)
    {
        $scope.isAddFormShow = false;
    }
    
    
});