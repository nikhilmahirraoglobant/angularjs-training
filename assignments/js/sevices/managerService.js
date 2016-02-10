mainApp.service('managerService',function($rootScope, $http){
    
    var that = this;
    
    this.expenseData = {};
    
    this.tempExpenseData = {};
    
    this.getData = function(){
        
        return $http.get("https://api.myjson.com/bins/1m3pt");        
    };
    
    this.removeData = function(index)
    {
        that.expenseData.splice(index,1);
        
        that.updateOnServer();
    };
    
    this.submitData = function(tempScope, index)
    {
        //Update data model for updating server
        if(tempScope.isUpdateMode)
        {
            that.expenseData[index] = {
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta, medical: tempScope.data.medical,movies:tempScope.data.movies,food: tempScope.data.food, travel:tempScope.data.travel
            };
        }
        else
        {
            that.expenseData.push({
                name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta,                            medical:tempScope.data.medical, movies:tempScope.data.movies, food:tempScope.data.food, travel:tempScope.data.travel
            });        
        }
        
        that.updateOnServer();
        
    };
    
    this.updateOnServer = function()
    {
        $http({
            method: 'PUT',
            url: 'https://api.myjson.com/bins/1m3pt',
            data: angular.toJson(that.expenseData)
        })
        .then(function(response){
            
            console.log(response.data);
            
            //If data updated on server, also update the local
            that.expenseData = response.data;
            
        });
    };
    
});