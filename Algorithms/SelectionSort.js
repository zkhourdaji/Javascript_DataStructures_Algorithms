function selectionSort(array){

    for (let i = 0; i < array.length; i++){
        let minimumIndex = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[minimumIndex]){
                minimumIndex = j;
            }
        }
        if (i != minimumIndex){
            swap(array, i, minimumIndex)
        }
    }
    return array;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let unsorted = [1,16,4,3,2,10];
let sorted = selectionSort(unsorted);
console.log(sorted);