const account={
    name:'tululu',
    income:[],
    expense:[],
    //for the functions
    addExpense:function(types,amounts){
            this.expense.push({type:types,amount:amounts})
    },
    getAccountSummary:function(){ 
       //lets calculate the expense
        let totalExpense=0
        let totalIncome=0
        let balance=0
            
        //lets calculate the total expense
        this.expense.forEach(function(expenses){
        totalExpense=totalExpense+expenses.amount
       }) 

       //lets calculate the total income
       this.income.forEach(function(income){
        totalIncome=totalIncome+income.amount
       })

       balance=totalIncome-totalExpense

        return `${this.name} has ${balance}$.income is ${totalIncome} and expense is ${totalExpense} `
    },

    addIncome:function(job,amount){
        this.income.push({job:job,amount:amount})   
    }

}


account.addExpense('rent',90)
account.addExpense('water-sys',900)
account.addIncome('side_hustle',1000)

console.log(account.getAccountSummary())