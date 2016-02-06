mainApp.controller('expenseController',function($scope, managerService){
    
    $scope.expenseData = managerService.expenseData;
    
    $scope.removeData = function(index)
    {
        managerService.removeData(index);
    };
    
    $scope.updateData = function(index)
    {
        managerService.index = index;
        
        managerService.updateData();       
        
    };
});