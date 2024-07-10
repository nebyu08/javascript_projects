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

//let count=0
//counting the incomplete tasks in my todos
// todo.forEach(function(item){
//    if(item.completed===false){
//       count+=1
//    }
// })

//lets implement the counting of the incomplete tasks using string attibutes of array
const incompleteTodos=todo.filter(function(item){
   return item.completed===false
})

//printing the incomplete the todos
const newParagraph=document.createElement('h2')
newParagraph.textContent=`you have ${incompleteTodos.length} task todo.`
document.querySelector('body').appendChild(newParagraph)

//print element into the DOM
const totalContent=todo.length
for(let i=0;i<totalContent;i++){
   const newP=document.createElement('p')
   newP.textContent=todo[i].text
   document.querySelector('body').appendChild(newP)
}