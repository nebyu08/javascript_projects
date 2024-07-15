const todo=loadData()

const todoSearch={
    todos:'',
    hidecompleted:false

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
    todo.push({text:text,
        completed:false,
        id:uuid.v4()
    })
    

    //lets add to the localstorage 
    addDataStore(todo)

    //lets render what we have so far in our todo
    renderToDo(todo,todoSearch)
    e.target.elements.todo_form.value=''

})

//event listner for the checkbox
document.querySelector('#todo_checkbox').addEventListener('change',function(e){
    todoSearch.hidecompleted=e.target.checked
    renderToDo(todo,todoSearch)
})