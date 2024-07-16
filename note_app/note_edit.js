let titleElement=document.querySelector('#note-title')    
let  bodyElement=document.querySelector('#note-body')      //values we got from the DOM
const removeElement=document.querySelector('#remove-button')

const noteId=location.hash.substring(1)
let notes=loadNotes()

let note=notes.find(function(sample){
    return sample.id === noteId
})

if(note===undefined){
    location.assign('/index.html')
}

//lets assign values into our notes
titleElement.value=note.title
bodyElement.value=note.body

//event handler for the title
titleElement.addEventListener('input',function(e){
    note.title=e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click',function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage',function(e){
    if(e.key==="notes"){
        notes=JSON.parse(e.newValue)
        note=notes.find(function(note){
           return note.id===noteId
        })

        if(note===undefined){   
            location.assign('/index.html')
        }

        titleElement.value=note.title
        bodyElement.value=note.body
        
    }
})

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