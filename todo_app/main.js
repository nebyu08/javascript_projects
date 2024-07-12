let todo=[

]

//lets add value from local storage
const todojson=localStorage.getItem('todos')
if(todojson!==null){
    todo=JSON.parse(todojson)
}

const todoSearch={
    todos:'',
    hidecompleted:false

}

const renderToDo=function(todos,search){
   let filtered= todos.filter(function(todo){
        return todo.text.toLowerCase().includes(search.todos.toLowerCase())
    })

    filtered=filtered.filter(function(item){
        return !search.hidecompleted || !item.completed
    })    

    const Incomplete=filtered.filter(function(item){
        return !item.completed
    })

    document.querySelector('#todo').innerHTML=' '

    const header=document.createElement('h2')
    header.textContent=`total number of tod left is ${Incomplete.length}`
    document.querySelector('#todo').appendChild(header)

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
    

    //lets add to the localstorage 
    localStorage.setItem('todos',JSON.stringify(todo))

    //lets render what we have so far in our todo
    renderToDo(todo,todoSearch)
    e.target.elements.todo_form.value=''

})

//event listner for the checkbox
document.querySelector('#todo_checkbox').addEventListener('change',function(e){
    todoSearch.hidecompleted=e.target.checked
    renderToDo(todo,todoSearch)
})