let todo=[
   {
       text:"order food",
       completed:true
   },
   {
       text:'meet up with friends',
       completed:true
   },
   {
       text:'go out for walk',
       completed:false
   },
   {
       text:'morning exercise',
       completed:false
   },
   {
      text:'go to work',
      completed:false
   }
]
//variable that we are going to search over
const todoSearch={
    'todos':''
}

const searchTodo=function(todos,search){
   const filtered= todos.filter(function(todo){
        return todo.text.toLowerCase().includes(search.todos.toLowerCase())
    })
    //lets clrear element
    document.querySelector('#todo').innerHTML=' '

    //create element 
    filtered.forEach(function(todo){
        const ps=document.createElement('p')
        ps.textContent=todo.text
        document.querySelector('#todo').appendChild(ps)
    })
}

searchTodo(todo,todoSearch)

document.querySelector('#add_todo').addEventListener('click',function(){
   console.log('adding new todo')

})

//adding event listener to the input
document.querySelector('#adding_todo').addEventListener('input',function(e){
    console.log(e.target.value)
})

document.querySelector('#search_todo').addEventListener('input',function(e){
    const tempVariable=e.target.value
    todoSearch.todos=tempVariable
    searchTodo(todo,todoSearch)
})
