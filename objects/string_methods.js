let temp="the blade is me"

//this is a string property
//console.log(temp.length)

//convert to upper case
//console.log(temp.toUpperCase())

//check out the includes
let password="abcpassword1234"
//console.log(password.includes('password'))

//lets remove white space from sentence
let sentence="      this is my first sentence "
//console.log(`this is before triming ${sentence}`)
// console.log(sentence.trim())
// console.log(sentence.trimStart())
// console.log(sentence.trimEnd())

//challenge area

//is valid password
let IsPassword=function(word){
    let lenPasswd=word.length
    let valid=!word.includes('password')  //we want the oposite becase we want to return true if it doesn't have 'password'

    if (lenPasswd>8 && valid){
        return true
    }
    else{
        return false
    }

}

//short form
let IsPassword_Short=function(word){
    return word.length>8&&!word.includes('password')
}

console.log(IsPassword('abcpassword'))
console.log(IsPassword('as12'))
console.log(IsPassword('pokmnbv987y'))

console.log("space...")

//implementing its short form 
console.log(IsPassword_Short('abcpassword'))
console.log(IsPassword_Short('as12'))
console.log(IsPassword_Short('pokmnbv987y'))


// console.log('abcpassword'.length)
// console.log('as123yuio'.length)
// console.log('pokmnbv987y'.length)