const note_obj=[
    {
        title:'morning workout',
        body:'wake up earl and do execercise',
    },
    {
        title:'take do shower',
        body:'make sure to take a cold shower'
    },
    {
        title:'eat breakfast',
        body:'eat a healthy breakfast'
    }
]

document.querySelector('button').addEventListener('click',function(e){
  e.target.textContent='button clicked'
})