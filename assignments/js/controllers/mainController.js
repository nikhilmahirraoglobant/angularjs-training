mainApp.controller('mainCotroller',function($scope, managerService){
    
    managerService.getData()
    .then(function(response){ 
         $scope.expenseData = managerService.expenseData = response.data;   
    },
    function(error){
        //console.log("Failed");
    });
});