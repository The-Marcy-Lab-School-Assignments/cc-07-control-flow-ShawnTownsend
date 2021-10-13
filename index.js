//1
function sumOfFourAndSix(){
    let sum = 0;
    for (let i = 0, i <= 1000, i++){
        if (i % 4 === 0 && i % 6 === 0) {
        sum += i;
    }
}  
    return sum
}

//2
function oddAndEvenInFifteen(){
    for (let i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            console.log(i +  " is even");
        }
        else {
            console.log(i + " is odd");   
        }
}
}

//3
function assignGrade(score){
        if (score < 90) {
            return 'A'
        else if (score < 80){
            return 'B'
        else if (score < 70){
            return 'C'
        else if (score >= 65){
            return 'D'
        else {
            return 'F'
}






