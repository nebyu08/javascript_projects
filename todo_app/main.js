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

document.querySelector('button').addEventListener('click',function(){
   console.log('adding new todo')

// const p=document.createElement('p')
// p.textContent='added a new todo'
// document.querySelector('body').appendChild(p)
})