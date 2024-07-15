//load data from local datastorage
const loadData=function(){
    //lets add value from local storage
    const todojson=localStorage.getItem('todos')
    if(todojson!==null){
        return JSON.parse(todojson)
    }else{
        return []
    }
}

//add todos to local storage
const addDataStore=function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}

//render todos
const renderToDo=function(todos_render,search){
    if(!(todos_render.constructor==Array)){
        console.log('this element is not an array')
        return ''
    }

    let filtered= todos_render.filter(function(todo_item){
         return todo_item.text.toLowerCase().includes(search.todos.toLowerCase())
     })

     //debugger

     filtered=filtered.filter(function(item){
         return !search.hidecompleted || !item.completed
     })    

     const Incomplete=filtered.filter(function(item){
         return !item.completed
     })
 
     document.querySelector('#todo').innerHTML=''

     header=getSummary(Incomplete)
     document.querySelector('#todo').appendChild(header)
 
     filtered.forEach(function(todo_item){
         ps=generateDom(todo_item,'p')
         document.querySelector('#todo').appendChild(ps)
     })
 
     }

//remove elements from Todo's
const removeTodo=function(todo_id){
    const search_todo=todo.findIndex(function(item){
        return item.id===todo_id
    })

    if(search_todo>0){
        todo.splice(search_todo,1)
    }
}     

//used for updating the checkbox
const toggleTodo=function(id){
    const todo_item=todo.find(function(item){
        return item.id===id
    })

    if(todo_item!==undefined){
        todo_item.completed=!todo_item.completed
    }
}

 //Generate DOM
const generateDom=function(add_todo){
    const newTodo=document.createElement('div')
    const ps=document.createElement('span')
    const checkBox=document.createElement('input')
    const button=document.createElement('button')

    //assign value into checkbox
    checkBox.setAttribute('type','checkbox')
    checkBox.checked=add_todo.completed
    newTodo.appendChild(checkBox)

    //add event handler for the checkbox
    checkBox.addEventListener('change',function(){
        //change the value of the todo task
        toggleTodo(add_todo.id)
        addDataStore(todo)
        renderToDo(todo,todoSearch)
    })

    //lets handle the button
    button.textContent='x'
    

    //lets add event listner to the button
    button.addEventListener('click',function(){
        //lets remove based on id
        removeTodo(add_todo.id)
        //lets save to localstorage
        addDataStore(todo)
        //lets display the todo's
        renderToDo(todo,todoSearch)
    })

    
    ps.textContent=add_todo.text
    
    newTodo.append(checkBox)
    newTodo.appendChild(ps)
    newTodo.append(button)

    return newTodo
}

const getSummary=function(Incomplete){
    const header=document.createElement('h2')
     header.textContent=`total number of tod left is ${Incomplete.length}`
     return header
}