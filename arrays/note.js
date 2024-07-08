const temp=[1,5,7,4,37,8,32,8,0]

temp.push(120)

console.log(temp[temp.length-1])

//lets manipulate arrays more

//lets push values into arrays
temp.push(100)

console.log(temp)

//lets remove values from array
temp.pop()
console.log(temp)

//lets remove element from the first element

temp.shift()
console.log(temp)

//lets add element to the first part of the array
temp.unshift(900)
console.log(temp)

//lets start slicing in js

//lets start slicing open 
console.log(temp.slice(2,5))

//lets insert multiple values into the array
temp.splice(1,0,"may")

temp[9]="havana"

console.log(temp)