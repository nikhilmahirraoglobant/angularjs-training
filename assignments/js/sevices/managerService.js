mainApp.service('managerService',function($rootScope, $http, $q){
    
    var that = this;
    
    this.index = 0;
    
    this.expenseData = {};
    
    this.tempExpenseData = {};
    
    this.getData = function(){
        
        var deffered = $q.defer();
        
        //$http.get("data/data.json")
        $http.get("https://api.myjson.com/bins/3z6wt")
        .then(function(response) {
           
            that.expenseData = response.data;  
            
            deffered.resolve(response);
        }, 
        function (response) {
            
            console.log("Got error");
            
            deffered.reject("Error "+response);
        });
        
        return deffered.promise;
    };
    
    this.removeData = function(index)
    {
        that.expenseData.splice(index,1);
        
        that.updateOnServer();
    };
    
    this.submitData = function(tempScope)
    {
        //Hold data temporary 
        that.tempExpenseData = JSON.parse(JSON.stringify(that.expenseData));
        
        //Update data model for updating server
        if(tempScope.isUpdateMode)
        {
            that.tempExpenseData[that.index] = {
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta, medical: tempScope.data.medical,movies:tempScope.data.movies,food: tempScope.data.food, travel:tempScope.data.travel
            };
        }
        else
        {
            that.tempExpenseData.push({
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta,                            medical:tempScope.data.medical, movies:tempScope.data.movies, food:tempScope.data.food, travel:tempScope.data.travel
            });        
        }
        
        console.log("Update temp data model");
        
        that.updateOnServer();
        
    };
    
    this.updateOnServer = function()
    {
        $http({
            method: 'PUT',
            url: 'https://api.myjson.com/bins/3z6wt',
            data: angular.toJson(that.tempExpenseData)
        })
        .then(function(response){
            
            //If data updated on server, also update the local
            that.expenseData = response.data;
            
            that.updatedOnServer();
            
            console.log("Data updated on server");
        });
    };
    
    this.updateFired = function()
    {
        $rootScope.$broadcast('updateFired');
    }
    
    this.updatedOnServer = function()
    {
        $rootScope.$broadcast('updatedOnServer');
    };
    
});