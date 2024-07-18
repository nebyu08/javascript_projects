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

       if(Search_id>-1){
        notes.splice(Search_id,1)
       }
}

//generate DOM structure
const generateDom=function(note){
    const newNote=document.createElement('div')
    const newText=document.createElement('a')
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

    newText.setAttribute('href',`/note.html#${note.id}`)
    newNote.appendChild(newText)

    return newNote
}

const sortMethod=function(notes,sortby){
    if(sortby==='lastEdited'){
        return notes.sort(function(a,b){
            if(a.updated_at>b.updated_at){
                return -1
            }else if(b.updated_at>a.updated_at){
                1
            }else{
                0
            }
        })
    }
    else if(sortby==='RecentlyAdded') {
        return notes.sort(function(a,b){
            if(a.created_at>b.created_at){
                return -1
            }
            else if(b.created_at>a.created_at){
                return 1
            }
            else{
                return 0
            }
        })
    }
    else if(sortby==='Alphabetically'){
        return notes.sort(function(a,b){
            if(a.title.toLowerCase()<b.title.toLowerCase()){
                return -1
            }
            else if(b.title.toLowerCase()<a.title.toLowerCase()){
                return 1
            }
            else{
                return 0
            }
        })
    }else{
        return notes
    }
}


const renderNote=function(notes,search){
    //sorting the notes by somearrangment
    notes=sortMethod(notes,search.sortBy)

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

const generateLastEdited=function(timestamp){
   return  `last seen ${moment(timestamp).fromNow()}`
}