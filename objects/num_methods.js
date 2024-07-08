let num=90.1234

console.log(num.toFixed(1))

//lets use the rounding number method
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//lets work with random number form math

console.log(Math.random())

//lets generate numbers between any numbers
let min=3
let max=90
let ran=Math.floor(Math.random()*(max-min+1)) + min

console.log(`${Math.floor(ran)}`)

//challenge time

//lets make a guessing game

let guessGame=function(guessed){
    let min=1
    let max=5
    let random=Math.floor(Math.random()*(max-min+1 )+min)
  return random===guessed
}

console.log(guessGame(3))