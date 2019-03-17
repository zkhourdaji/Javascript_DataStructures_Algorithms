/**
 * This function takes an array of numbers and sorts it using
 * the insertion sort algorithm.
 * @param {} array 
 */
function insertionSort(array){
    for (let i = 1; i < array.length; i++){
       for (let j = i; j > 0; j--){
           if (array[j-1] > array[j]){
               swap(array, j-1, j);
           }
           else{
               break;
           }
       }
    }
    return array;
}
// helper swap function
function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let unsorted = [1,4,2,3,10,9];
let sorted = insertionSort(unsorted);
console.log(sorted);