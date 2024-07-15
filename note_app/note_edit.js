const titleElement=document.querySelector('#note-title')    
const bodyElement=document.querySelector('#note-body')      //values we got from the DOM
const removeElement=document.querySelector('#remove-button')

noteId=location.hash.substring(1)
notes=loadNotes()

const note=notes.find(function(sample){
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