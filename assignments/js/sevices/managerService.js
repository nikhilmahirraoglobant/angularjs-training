mainApp.service('managerService',function($rootScope, $http){
    
    var that = this;
    
    this.index = 0;
    
    this.getData = function(){
    
        $http.get("data/data.json")
        .then(function(response) {
           
            that.expenseData = response.data.employees;
        }, 
        function (response) {
            
            console.log("Got error");
        });
    };
    
    this.removeData = function(index)
    {
        that.expenseData.splice(index,1);
    };
    
    this.submitData = function(tempScope)
    {
        if(tempScope.isUpdateMode)
        {
            that.expenseData[that.index] = {
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta, medical: tempScope.data.medical,movies:tempScope.data.movies,food: tempScope.data.food, travel:tempScope.data.travel
            };
        }
        else
        {
            that.expenseData.push({
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta,                            medical:tempScope.data.medical, movies:tempScope.data.movies, food:tempScope.data.food, travel:tempScope.data.travel
            });        
        }
        
        console.log(tempScope.data.name);
        console.log(that.expenseData);
    };
    
    this.updateData = function()
    {
        $rootScope.$broadcast('updateFired');
    }
    
});