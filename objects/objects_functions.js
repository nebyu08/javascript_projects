let myBook= {
    title: 'enders game',
    author: 'orson scot',
    page_count:890
}

let anBook= {
    title: 'dandadan',
    author: 'kishi moto',
    page_count:540
}

let disp=function(arg1){
    return {
        bookSummary:`${arg1.title} is wrutten by ${arg1.author}`,
        bookCount:`${arg1.title} has ${arg1.page_count}`
    }
}


let Mybook_r=disp(myBook)
let anBook_r=disp(anBook)

console.log(Mybook_r.bookSummary)
console.log(anBook_r.bookCount)

//lets convert the values from farahnite into celcius and kalvin
let tempConverter=function(faranhite){
    return {
        faranhite:faranhite,
        celsuis:(faranhite-32) *9/5,
        kelvin:(faranhite+459.67) *5/9
    }
}

let tempConverted=tempConverter(32)

console.log(`the temp is faranhite is ${tempConverted.faranhite},celsius value is ${tempConverted.celsuis} and kalvin is ${tempConverted.kelvin}`)