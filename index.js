//1
function sumOfFourAndSix(){
    let sum = 0
    for (let i = 1, i < 1000, i++){
        if (i % 4 === 0 && i % 6 === 0) {
        sum += i;
    }
}  
    return sum
}
}

//2
function oddAndEvenInFifteen(x){
    for (let x = 0; x <= 15; x++) {
        if (x === 0) {
            console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
            console.log(x + " is even");   
        }
        else {
            console.log(x + " is odd");
        }
}
}

//3
function assignGrade(score){
    if (score > 90);
        return 'A'
    else if (score > 80);
        return 'B'
    else if (score > 70);
        return 'C'
    else if (score > 64);
        return 'D'
    else (score >= 64);
        return 'F'
}

assignGrade(72));






