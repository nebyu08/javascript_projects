//undefined for variables
let val="Nvidea"

if(val===undefined){
    console.log("the value is undefined")
}
else{
    console.log(val)
}

//undefined for functions

let square=function(num){
    console.log(num)
}

let val1= square()
//lets print the returned value
console.log(val1)

//lets introduce null
let temp=90

temp=null

console.log(temp)