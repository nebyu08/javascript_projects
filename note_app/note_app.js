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

//lets create variable that can be used for searching
const filterSearch={
    'textSearch':''
}

const filterNote=function(notes,search){
    const filtered = notes.filter(function(note){
        return note.title.toLowerCase().includes(search.textSearch.toLowerCase())
    })
    
    //lets clear the previous element search result
    document.querySelector('#notes').innerHTML=''
    
    //lets print values in the paragraph section 
   filtered.forEach(function(note){
    const newP=document.createElement('p')
    newP.textContent=note.title
    document.querySelector('#notes').appendChild(newP)
   })
}

//somthing shows up before user interacts with the page
filterNote(note_obj,filterSearch)

document.querySelector('#create_note').addEventListener('click',function(e){
  e.target.textContent='button clicked'
})

document.querySelector('#remove_note').addEventListener('click',function(){
   document.querySelectorAll('.note').forEach(function(note){
    note.remove()
   })
})

//handle input
document.querySelector('#input_id').addEventListener('input',function(e){
    filterSearch.textSearch= e.target.value
    //called when user interacts with the page
    filterNote(note_obj,filterSearch)


})