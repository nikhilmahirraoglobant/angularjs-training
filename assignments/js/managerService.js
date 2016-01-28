mainApp.service('managerService',function(){
    
    var that = this;
    this.expenseData = [
        {
            name: 'Nikhil Mahirrao',
            hra: 14000,
            lta: 1020,
            medical: 1050,
            movies: 800,
            food: 6000,
            travel: 950
        },
        {
            name: 'Swapnil Takawale',
            hra: 7000,
            lta: 720,
            medical: 850,
            movies: 300,
            food: 4000,
            travel: 1050
        }
    ];
    
    
    this.removeData = function(index)
    {
        that.expenseData.splice(index,1);
    };
    
    this.submitData = function(tempScope)
    {
        if(tempScope.isUpdateMode)
        {
            that.expenseData[tempScope.index] = {name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta,
                                     medical: tempScope.data.medical,movies:tempScope.data.movies,food: tempScope.data.food,travel:tempScope.data.travel};
        }
        else
        {
            that.expenseData.push({name: tempScope.data.name, hra: tempScope.data.hra,lta : tempScope.data.lta,
                                     medical: tempScope.data.medical,movies:tempScope.data.movies,food: tempScope.data.food,travel:tempScope.data.travel});        
        }    
    };
    
});