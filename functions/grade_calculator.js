const studenGrade=function(scoreStudent,totalScore){
    const score=(scoreStudent/totalScore)*100
    let gradeLetter=''

    if(score>=90 && score<=100){
        gradeLetter='A'
    }
    else if(score>=80){
        gradeLetter='B'
    }
    else if(score>=70){
        gradeLetter='C'
    }
    else if(score>=60){
        gradeLetter='D'
    }
    else{
        gradeLetter='F'
    }
    
    return `you got ${gradeLetter} with ${score}%`
}

//lets test the function
const dummy_score=4
const dummy_tot=20
const result=studenGrade(dummy_score,dummy_tot)
console.log(result)