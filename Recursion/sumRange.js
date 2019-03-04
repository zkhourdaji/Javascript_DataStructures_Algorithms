/*
This recursive function takes a number and returns the sum
of all numbers between 0 and the given number (inclusive)
*/
function sumRange(number){
    if (number === 1){
        return 1;
    }
    else{
        return number + sumRange(number - 1);
    }
}

console.log(sumRange(3));