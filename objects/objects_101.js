let myBook= {
    title: 'enders game',
    author: 'orson scot',
    page_count:890
}

//initial display
console.log(myBook)

console.log(`${myBook.title} by ${myBook.author}`)

//change the value of the objects

myBook.title='animal farm'
myBook.author='george orwel'
myBook.page_count=123

console.log('after change')
console.log(myBook)

//lets make a person profole
let Person={
    Fname:'andrew',
    age:27,
    lives:'philediphia'
}

Person.age+=1

console.log(Person)