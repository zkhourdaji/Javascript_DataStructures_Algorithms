/*
This function takes an array of numbers and a number to search the array for.
if found, this will return the index of the number otherwise return -1
*/

function BinarySearch(array, number){
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (left < right){
        if (array[middle] === number)
            return middle;
        if (number > array[middle]){
            left = middle;
            middle = Math.ceil((left + right) / 2);
        }
        if (number < array[middle]){
            right = middle;
            middle = Math.floor((left + right) / 2);
        }
    }
    return -1;
}

console.log(BinarySearch([1,2,3,4,5], 4));