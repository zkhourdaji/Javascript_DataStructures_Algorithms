/*
Count down from number to 0 using recursion
*/
function countDown(number){
    if (number <= 0){
        console.log("All done");
        return;
    }
    console.log(number);
    number--;
    countDown(number);
}

countDown(10);