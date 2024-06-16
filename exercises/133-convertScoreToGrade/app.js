function convertScoreToGrade(score) {
    // your code here
    if(score <= 100 && score >=90){
        return 'A'
    }else if(score <= 89 && score >=80){
        return 'B'
    }else if(score <= 79 && score >=70){
        return 'B'
    }else if(score <= 69 && score >=60){
        return 'B'
    }else if(score <= 59 && score >=0){
        return 'F'
    }else{
        return 'NVALID SCORE'
    }
}

let output = convertScoreToGrade(-181);
console.log(output); // --> 'A'
