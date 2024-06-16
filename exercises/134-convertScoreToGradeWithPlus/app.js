function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let grade;

    if(score <=100 && score >= 90){
        grade = 'A'
    }else if(score <=89 && score >= 80){
        grade = 'B'
    }else if(score <=79 && score >= 70){
        grade = 'C'
    }else if(score <=69 && score >= 60){
        grade = 'D'
    }else if(score > 100 || score < 0){
        grade = 'F'
    }


    if(grade !== 'F'){
        if( score % 10 >=8){
            grade +='+'
        }else if( score % 10 < 2){
            grade +='-'
        }
    }

    return grade;


}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
