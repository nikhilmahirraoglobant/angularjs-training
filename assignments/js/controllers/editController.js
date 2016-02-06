mainApp.controller('editController',function($scope, managerService){
    
    $scope.data = {};
    
    $scope.submitData = function()
    {
        managerService.submitData($scope);
        
        $scope.isAddFormShow = false;          
    };
    
    $scope.cancaled= function(index)
    {
        $scope.isAddFormShow = false;        
    };
    
    $scope.addNewData = function()
    {
        $scope.data = {};
        
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = false;        
        
        $scope.newDataForm.$setPristine();
    };
    
    $scope.$on('updateFired', function() {
         
        var tempData = JSON.parse(JSON.stringify(managerService.expenseData[managerService.index]));
        
        $scope.data = tempData;//managerService.expenseData[managerService.index];
        
        $scope.isAddFormShow = true;
        
        $scope.isUpdateMode = true; 
    }); 
    
});