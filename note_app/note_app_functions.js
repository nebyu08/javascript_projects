//this functions load previous values of stored note
const loadNotes=function(){
    const NoteJson=localStorage.getItem('notes')
    if(NoteJson!==null){
        return JSON.parse(NoteJson)
    }else{
        return []
    }

}

//save notes into local storage
const saveNotes=function(notes){
    localStorage.setItem('notes',JSON.stringify(notes))
}


const removeNote=function(id){
       const Search_id=notes.findIndex(function(note){
        return id===note.id
       })

       if(Search_id>1){
        notes.splice(Search_id,1)
       }
}

//generate DOM structure
const generateDom=function(note){
    const newNote=document.createElement('div')
    const newText=document.createElement('span')
    const button=document.createElement('button')
    
    button.textContent='x'
    newNote.appendChild(button)

    button.addEventListener('click',function(){
            removeNote(note.id)  
            saveNotes(notes)
            renderNote(notes,filterSearch)
    })

    if(note.title.length>0){
        newText.textContent=note.title
    }else{
        newText.textContent='Unnamed Notes'
    }
   
    newNote.appendChild(newText)

    return newNote
}

const renderNote=function(notes,search){
    const filtered = notes.filter(function(note){
        return note.title.toLowerCase().includes(search.textSearch.toLowerCase())
    })
    
    //lets clear the previous element search result
    document.querySelector('#notes').innerHTML=''
    
    //lets print values in the paragraph section 
   filtered.forEach(function(note){
        const newP=generateDom(note)
        document.querySelector('#notes').appendChild(newP)
   })
}