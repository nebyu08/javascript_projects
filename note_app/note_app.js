let notes=[

]
const NoteJson=localStorage.getItem('notes')
//update notes from localstorage is available
if(NoteJson!==null){
    notes=JSON.parse(NoteJson)
}

//lets create variable that can be used for searching
const filterSearch={
    'textSearch':''
}

const renderNote=function(notes,search){
    const filtered = notes.filter(function(note){
        return note.title.toLowerCase().includes(search.textSearch.toLowerCase())
    })
    
    //lets clear the previous element search result
    document.querySelector('#notes').innerHTML=''
    
    //lets print values in the paragraph section 
   filtered.forEach(function(note){
    const newP=document.createElement('p')
    if(note.title.length>0){
        newP.textContent=note.title
    }else{
        newP.textContent='UNNAMED NOTE'
    }
    
    document.querySelector('#notes').appendChild(newP)
   })
}


//somthing shows up before user interacts with the page
renderNote(notes,filterSearch)

document.querySelector('#create_note').addEventListener('click',function(e){
    //when ever the button is clicked add note to the local storage
    notes.push({
        title:'',
        body:''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNote(notes,filterSearch)
})

//handle input
document.querySelector('#input_id').addEventListener('input',function(e){
    filterSearch.textSearch= e.target.value
    //called when user interacts with the page
    renderNote(notes,filterSearch)
})

//select dropdown items
document.querySelector('#drop_down').addEventListener('change',function(e){
    console.log(e.target.value)
})