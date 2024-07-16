// const now=new Date()
// const timestamp=now.getTime()

// const varDate=new Date(timestamp)

// console.log(`year ${varDate.getFullYear()}: Month ${varDate.getMonth()} and day is ${varDate.getDate()}`)

//lets create 2 dates and compare them
const Date1=new Date('march 23 1980')
const Date2=new Date()

const timestamp1=Date1.getTime()
const timestamp2=Date2.getTime()

console.log(timestamp1)
console.log(timestamp2)

if(timestamp1<timestamp2){
    console.log(`the first timestamp is the greater one:${Date1.toString()}`)
}
else if(timestamp2>timestamp1){
    console.log(`the second timestamp is the greater one ${Date2.toString()}`)
}
else{
    console.log('they are equal')
}

