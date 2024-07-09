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


//lets start looping over arrays
const array1=[1,2,3,4,5]

//lets search the values
const notes=['note 1','note 2','note 3']

// console.log(notes.indexOf('note 5'))

//lets make list of objects
const note_obj=[
    {
        title:'morning workout',
        body:'wake up earl and do execercise',
    },
    {
        title:'take do shower',
        body:'make sure to take a cold shower'
    },
    {
        title:'eat breakfast',
        body:'eat a healthy breakfast'
    }
]


// const noteFinder=function(note,text){
//    const index=note.findIndex(function(item){
//         return item.title.toLowerCase() === text.toLowerCase() //lets make it not sensitive to case
//    })

//     return note[index]
// }   


const noteFinder=function(note,text){
    const obj=note.find(function(item){
         return item.title.toLowerCase() === text.toLowerCase() //lets make it not sensitive to case
    })
 
     return obj
 }  

//console.log(noteFinder(note_obj,"Take a shower"))

//let start filtering through the array
const newObj=note_obj.filter(function(item){
    const ismatchtitle=item.title.toLowerCase().includes('do')  //lets filter through our title
    const ismatchingbody=item.body.toLowerCase().includes('do') //lets filter through body

    return ismatchtitle|| ismatchingbody
})

//console.log(newObj)


//lets make the filtering code we wrote into a function
const findnotes=function(arrays,query){
    return arrays.filter(function(item){
        const ismatchtitle=item.title.toLowerCase().includes(query.toLowerCase())  //lets filter through our title
        const ismatchingbody=item.body.toLowerCase().includes(query.toLowerCase()) //lets filter through body
    
        return ismatchtitle|| ismatchingbody
    })
}

console.log(findnotes(newObj,'do'))