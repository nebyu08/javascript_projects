let  titleElement=document.querySelector('#note-title')    
let  bodyElement=document.querySelector('#note-body')      //values we got from the DOM
let  lasteditedElement=document.querySelector('#last_seen')
const removeElement=document.querySelector('#remove-button')

const noteId=location.hash.substring(1)
let notes=loadNotes()

let note=notes.find(function(sample){
    return sample.id === noteId
})

if(note===undefined){
    location.assign('/index.html')
}

//lets make last seen 
lasteditedElement.textContent=generateLastEdited(note.last_update)


//lets assign values into our notes
titleElement.value=note.title
bodyElement.value=note.body

//event handler for the title
titleElement.addEventListener('input',function(e){
    note.title=e.target.value
    //note.updated_note=moment().format()
    note.updated_at=moment().valueOf()
   //  last_update(note)
    lasteditedElement.textContent=generateLastEdited(note.last_update)
    saveNotes(notes)
})

bodyElement.addEventListener('input',function(e){
    note.body=e.target.value
    note.updated_at=moment().valueOf()
   // note.updated_note
    last_update(note)
    lasteditedElement.textContent=generateLastEdited(note.last_update)
    //saveNotes(notes)
    
})

removeElement.addEventListener('click',function(e){
    removeNote(note.id)
    //last_update(note)
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
  //      last_update(note)
        titleElement.value=note.title
        bodyElement.value=note.body

        //for generating last seen 
        lasteditedElement.textContent=generateLastEdited(note.last_update)        
    }
})