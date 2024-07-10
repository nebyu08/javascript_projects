//lets use DOM to manipulate the html document

//for searching and removing the first found element
const p=document.querySelector('p')
//p.remove()

//for searching and removing all the elements
const ps=document.querySelectorAll('p')   //but this return a list of all available
ps.forEach(function(item){
    // item.textContent='*********'    //this for altering the content of the paragraph
    console.log(item.textContent)
    item.remove()
})

//lets add element into the DOM
const newParagraph=document.createElement('p')
newParagraph.textContent='this is new added element that was created in javascript'
document.querySelector('body').append(newParagraph)