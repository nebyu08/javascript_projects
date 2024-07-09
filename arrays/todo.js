//created an object 
let todo=[
    {
        text:"order food",
        completed:false
    },
    {
        text:'meet up with friends',
        completed:false
    },
    {
        text:'go out for walk',
        completed:true
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

console.log(filterTodo(todo))