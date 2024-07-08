var num1=9
console.log(num1)

//var is not block scoped but function scoped
if(true){
    var temp=90
}

//but on a funcion
let f1=function(){
    var temp2=90
}

//console.log(temp2)  //this would cause an error

console.log(temp)