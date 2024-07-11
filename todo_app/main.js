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
//lets show the total

//variable that we are going to search over
const todoSearch={
    todos:'',
    hidecompleted:false

}

const renderToDo=function(todos,search){
   let filtered= todos.filter(function(todo){
        // const SearchText=
        // const hideButtonMatched=
        // return SearchText&&hideButtonMatched
        return todo.text.toLowerCase().includes(search.todos.toLowerCase())
    })

    filtered=filtered.filter(function(item){
        return !search.hidecompleted || !item.completed
    })    

    const Incomplete=filtered.filter(function(item){
        return !item.completed
    })

    //lets clrear element
    document.querySelector('#todo').innerHTML=' '

    //print the total number of element
    const header=document.createElement('h2')
    header.textContent=`total number of tod left is ${Incomplete.length}`
    document.querySelector('#todo').appendChild(header)

    //create element 
    filtered.forEach(function(todo){
        const ps=document.createElement('p')
        ps.textContent=todo.text
        document.querySelector('#todo').appendChild(ps)
    })

    }


renderToDo(todo,todoSearch)

document.querySelector('#search_todo').addEventListener('input',function(e){
    const tempVariable=e.target.value
    todoSearch.todos=tempVariable
    renderToDo(todo,todoSearch)
})

document.querySelector("#id_form").addEventListener('submit',function(e){
    e.preventDefault()
    const text=e.target.elements.todo_form.value
    console.log(text)
    //lets add the value into the todo
    todo.push({text:text,completed:false})
    //lets render what we have so far in our todo
    searchTodo(todo,todoSearch)
    e.target.elements.todo_form.value=''
})


//event listner for the checkbox
document.querySelector('#todo_checkbox').addEventListener('change',function(e){
    todoSearch.hidecompleted=e.target.checked
    renderToDo(todo,todoSearch)
})