//functions that have multiple arguments
let adder=function(arg1,arg2,arg3){
    return arg1+arg2+arg3
}

let result=adder(10,20,30)

console.log(result)

//with default arguments
let add=function(arg1=0,arg2=1,arg3=0){
    return arg1+arg2+arg3
}

let fresult=add(undefined,20,undefined)

console.log(fresult)


//challenge time

//calculating the total amount that you need to pay with tip included

let tipCalculator=function(total,tipPercent=.2){
    return total*tipPercent
}

let tip=tipCalculator(345,.3)
console.log("tip is: ",tip)