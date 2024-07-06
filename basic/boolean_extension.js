let createdAccount=true
let staffRoles="secretary"

if (createdAccount){
    console.log("you already created an account")
}else{
    console.log("you dont have an account yet")
}

//lets create more possibility for the outcomes
if (staffRoles==="manager"){
    console.log("welcome manager")
}
else if(staffRoles==="secretary"){
    console.log("welcome secretary ")
}

else{
    console.log("welcome to the system.")
}

//more advanced version of the temprature controll that we say previously

let temp=90

if (temp<=32){
    console.log("its cold outside wear a jackte")
}
else if(temp>=100){
    console.log("its hot outside.")
}

else {
    console.log("good condition for a stroll.")
}

