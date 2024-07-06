//lets use "and" for our purpose

let temp=100

if (temp>=35 && temp<=90){
    console.log("its super nice outside")
}

else if(temp>90){
    console.log("its hot outside")
}

//now lets play around with "or" operations

if (temp>0 || temp<120){
    console.log("dont go outside")
}

//chanllenge time
let isGuestOneVegan=false
let isGuestTwoVegan=false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("both are vegan")
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("give a little of bit vegan")
}

else{
    console.log("offer them anything on the menu")
}