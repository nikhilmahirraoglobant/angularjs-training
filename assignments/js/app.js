var mainApp = angular.module('mainApp',['ngMessages']);

mainApp.controller('mainCotroller',function($scope){
   
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
    
    $scope.submitData = function()
    {
        if($scope.isUpdateMode)
        {
            $scope.expenseData[$scope.index] = {name: $scope.data.name, hra: $scope.data.hra,lta : $scope.data.lta,
                                     medical: $scope.data.medical,movies:$scope.data.movies,food: $scope.data.food,travel:$scope.data.travel};
        }
        else
        {
            $scope.expenseData.push({name: $scope.data.name, hra: $scope.data.hra,lta : $scope.data.lta,
                                     medical: $scope.data.medical,movies:$scope.data.movies,food: $scope.data.food,travel:$scope.data.travel});
        
        }    
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
        var tempData = JSON.stringify($scope.expenseData[index]);
        
        $scope.data =  JSON.parse(tempData);
        
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = true;
        
        $scope.index = index;
    };
    
    $scope.cancled = function(index)
    {
        $scope.isAddFormShow = false;
    }
    
    
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