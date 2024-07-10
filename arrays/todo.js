//created an object 
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
    }
]

//lets create afunction that removes values based on text value
const removeobj=function(todo,text){
    const index= todo.findIndex(function(item){
        return item.text.toLowerCase()===text.toLowerCase()
    })
    if(index>-1){
        todo.splice(index,1)
    }
 
}

// removeobj(todo,"order food!!!!!")
// console.log(todo)

//lets filter through our todo's
const filterTodo=function(todos){
    return  todos.filter(function(item){
       return  item.completed===false
    })
}

//console.log(filterTodo(todo))

//lets start sorting
const sortTodos=function(arrays){
    arrays.sort(function(a,b){
        if(a.completed===false && b.completed===true ){
            return -1
        }
        else if(b.completed===false && a.completed===true ){
            return 1
        }
        else{
            return 0
        }
    })
}
sortTodos(todo)
console.log(todo)