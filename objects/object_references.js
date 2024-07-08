let UserAccount={
    Fname:'john doe',
    income:90,
    lives:'singapore'
}

let obj_manipulation=function(obs,raise){
    obs.income=obs.income+raise
    console.log(obs)
}


obj_manipulation(UserAccount,89)

//lets print the original object
console.log(UserAccount)