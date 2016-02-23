mainApp.controller('editController',function($scope, $state, $stateParams, managerService){
    
    $scope.data = {};
    
    if($stateParams.mode == 'updateMode')
    {
        $scope.data = angular.copy(managerService.expenseData[$stateParams.index]);
        
        $scope.isUpdateMode = true; 
    }
    else
    {
        $scope.isUpdateMode = false; 
    }
    
    $scope.submitData = function()
    {
        managerService.submitData($scope.data, $scope.isUpdateMode,  $stateParams.index);
        
        if($stateParams.mode == 'updateMode')
        {
            $state.go('detail', {index: $stateParams.index, name:$scope.data.name });
        }
        else
        {
           $state.go('home'); 
        }
    };
    
    $scope.cancaled= function(index)
    {
        if($stateParams.mode == 'updateMode')
        {
            $state.go('detail', {index: $stateParams.index, name:$scope.data.name });
        }
        else
        {
           $state.go('home'); 
        }
    };
    
});