/*
this function returns true if all the elements from the first array have their squares
in the second array.
note that frequency matters so its a one to one relation.
*/
function same(array1, array2){
    if (array1.length != array2.length)
        return false;
    
    let frequency = {};
    for (let number of array1)
        frequency[number*number] = frequency[number*number] + 1 || 1;

    for (let square of array2){
        if (frequency[square] == null){
            return false;
        }
        else{
            frequency[square]--;
            if (frequency[square] == 0){
                delete frequency[square];
            }
        }
    }
    let numKeys = Object.keys(frequency).length;
    if (numKeys > 0){
        return false;
    }
    return true;
}

console.log(same([1,3,2,3], [1,2,9,9]));