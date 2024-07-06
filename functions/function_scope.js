let farh_to_celsius=function(farnhite){
    let celsius=(farnhite-32)*5/9

    if(celsius<=0){
        isfreezing=true
    }
    else{
        isfreezing=false
    }
    return celsius
}

let farnhite1=32
let farnhite2=68

let result1=farh_to_celsius(farnhite1)
let result2=farh_to_celsius(farnhite2)

//lets print the converted value
console.log(result1)
console.log(result2)