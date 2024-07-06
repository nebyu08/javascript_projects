//lets make a simple function first
let greetUser=function(){
    console.log("hello there!")
}


let square= function(x) {
   x=x*x
//   console.log("the square value is: ",x)
    return x
}

greetUser()
let result=square(x=90)

console.log("the result of squaring is, ",result)


//challenge time lets make a heat converter funtion

let farh_to_celsius=function(farnhite){
    let celsius=(farnhite-32)*5/9
    return celsius
}

let farh_to_kelvin=function(farnhite){
    let kelvin=(farnhite+459.67)*5/9
    return  kelvin
}

let farnhite1=32
let farnhite2=68

let result1=farh_to_celsius(farnhite1)
let result2=farh_to_celsius(farnhite2)

//lets print the converted value
console.log(result1)
console.log(result2)