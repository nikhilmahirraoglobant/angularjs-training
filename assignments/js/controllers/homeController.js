mainApp.controller('homeController',function($scope, managerService){
    
    $scope.expenseData = managerService.expenseData;
    
    managerService.getData()
    .then(function(response){ 
        
        $scope.expenseData = managerService.expenseData = response.data;  
    },
    function(error){
        console.log("Data loading failed");
    });
               
    $scope.removeData = function(index)
    {
        managerService.removeData(index);
    };
});