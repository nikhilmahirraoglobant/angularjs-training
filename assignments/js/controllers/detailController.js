mainApp.controller('detailController',function($scope, $stateParams, managerService){
    
    $scope.index = $stateParams.index;
    
    $scope.expenseData = managerService.expenseData;  
        
    $scope.currentEmployee = $scope.expenseData[$stateParams.index];
    
    $scope.removeData = function(index)
    {
        managerService.removeData(index);
    };
    
});