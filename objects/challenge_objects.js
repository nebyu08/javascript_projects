let UserAccount={
    name:'hue mucho',
    expenses:0,
    income:0
}

let addExpense=function(account,value){
    account.expenses+=value
}

//this add income to the user account
let addIncome=function(account,value){
    account.income+=value
}

//this lets us reset the account

let resetAccount=function(account){
    account.expenses=0
    account.income=0
}

//getting the account summary
let AccountSummary=function(account){
    return ` user name is ${account.name} user currently has ${account.income - account.expenses},expense made is ${account.expenses} and the income is ${account.income} `
}


addIncome(UserAccount,89)
addExpense(UserAccount,123)
addExpense(UserAccount,123)
addIncome(UserAccount,89)

console.log(AccountSummary(UserAccount))

resetAccount(UserAccount)

//console.log(UserAccount)

//console.log(UserAccount)