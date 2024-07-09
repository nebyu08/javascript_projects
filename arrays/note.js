const temp=[1,5,7,4,37,8,32,8,0]

temp.push(120)

// console.log(temp[temp.length-1])

//lets manipulate arrays more

//lets push values into arrays
temp.push(100)

// console.log(temp)

//lets remove values from array
temp.pop()
//console.log(temp)

//lets remove element from the first element

temp.shift()
// console.log(temp)

//lets add element to the first part of the array
temp.unshift(900)
// console.log(temp)

//lets start slicing in js

//lets start slicing open 
// console.log(temp.slice(2,5))

//lets insert multiple values into the array
temp.splice(1,0,"may")

temp[9]="havana"

// console.log(temp)


//lets start looping over arrays
const array1=[1,2,3,4,5]

// array1.forEach(function(item,index){
//    console.log(`index ${index}`)
//    console.log(`value:${item} `)
// })

//lets loop using for loop
// for(let count=0;count<array1.length;count+=1){
//     console.log(`${count+1}.${array1[count]}`)
// }

//lets search the values
const notes=['note 1','note 2','note 3']

// console.log(notes.indexOf('note 5'))

//lets make list of objects
const note_obj=[
    {},
    {
        title:'morning workout',
        body:'wake up earl and do execercise',
    },
    {
        title:'take a shower',
        body:'make sure to take a cold shower'
    },
    {
        title:'eat breakfast',
        body:'eat a healthy breakfast'
    }
]

console.log(note_obj.length)
//console.log(note_obj)

//console.log(note_obj.indexOf())
const index=note_obj.findIndex(function(item,index){
     console.log(item)
     return item.title==='eat breakfast'

})

console.log(index)