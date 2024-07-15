//localStorage.clear()
let notes=loadNotes()   //loads notes from localstorage

//lets create variable that can be used for searching
const filterSearch={
    'textSearch':''
}

//somthing shows up before user interacts with the page
renderNote(notes,filterSearch)

document.querySelector('#create_note').addEventListener('click',function(e){
    //when ever the button is clicked add note to the local storage
    const ids=uuid.v4()

    console.log(ids)

    notes.push({
        id:ids,
        title:'',
        body:''
    })
    
    saveNotes(notes)
    location.assign(`/note.html#${ids}`)
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