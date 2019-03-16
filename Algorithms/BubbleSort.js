
function bubbleSort(array){
    let noSwaps;

    for (let i = array.length - 1; i >= 0; i--){
        noSwaps = true;
        for (let j = 0; j < i; j ++){
            if (array[j] > array[j+1]){
                console.log(array + "|" + array[i] + "," + array[j]);
                swap(array, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps)break;
    }
    return array;
}

/**
 * This function takes an array and two indecies.
 * It swaps the elements in the array at the given indecies.
 * @param {*} array 
 * @param {*} i 
 * @param {*} j 
 */
function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let unsorted = [0,2,5,1,2,3,7,1];
let almostSorted = [1,2,3,4,5,6,8,7];

//let sorted = bubbleSort(unsorted);
let sorted2 = bubbleSort(almostSorted);
console.log(sorted2);
//console.log(sorted);