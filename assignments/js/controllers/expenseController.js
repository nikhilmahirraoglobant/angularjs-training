mainApp.controller('expenseController',function($scope, managerService){
    
    $scope.expenseData = managerService.expenseData;
    
    managerService.getData()
    .then(function(response){ 
         $scope.expenseData = managerService.expenseData = response.data;  
    },
    function(error){
        //console.log("Failed");
    });
    
    $scope.$on('updatedOnServer', function() {
         
        //console.log("expenseController updatedOnServer");
        
        $scope.expenseData = managerService.expenseData;
    });
               
    $scope.removeData = function(index)
    {
        managerService.removeData(index);
    };
    
    $scope.updateData = function(index)
    {
        managerService.index = index;
        
        managerService.updateFired();       
        
    };
});