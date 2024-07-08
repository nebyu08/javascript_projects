const todo=[]

//lets push 5 things into here
todo.push('go to gym')
todo.push('rest')
todo.push('take a shower')
todo.push('eat break fast')
todo.push('wear a suit')


//console.log(todo)

// console.log(`${todo[0]} -> ${todo[todo.length-2]} `)

//removes the 3rd element
todo.splice(2,1,)

//add a new element to the end
todo.push('go to work')

//remove the first element from the array
todo.shift()

//display
console.log(`'you have ${todo.length} of todo's`)

console.log(todo)