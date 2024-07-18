//localStorage.clear()
let notes=loadNotes()   //loads notes from localstorage

//lets create variable that can be used for searching
const filterSearch={
    textSearch:'',
    sortBy:'lastEdited'
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
        body:'',
        created_at:moment().valueOf(),
        updated_at:moment().valueOf()
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
document.querySelector('#filter-by').addEventListener('change',function(e){
    filterSearch.sortBy=e.target.value
    renderNote(notes,filterSearch)  
})