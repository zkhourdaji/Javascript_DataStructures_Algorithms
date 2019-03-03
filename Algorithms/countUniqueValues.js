/*
This function takes a sorted array and returns the number of unique numbers.
The inputs are one array of numbers.
The output is a number.

The solution uses the multiple pointer pattern

examples: 
[1,1,1,2,3] -> 3
[1,2,3,4] -> 4
*/

function countUniqueValues(array){
    if (array.length == 0){
        return 0;
    }
    let unique = 1;
    let left = 0;
    let right = 1;

    while (right < array.length){
        if (array[left] != array[right])
            unique++;
        left++;
        right++;
    }
    return unique;
    
}

/*
This is another implementation of countUniqueValues.
This will actually alter the passed array.
It will return an array with the unique values instead of the number of unique values.

*/
function countUniqueValues2(array){
    if (array.length == 0){
        return 0;
    }
    let i = 0;
    let j = 1;
    for (j = 1; j < array.length; j++){
        if (array[i] != array[j])
            array[++i] = array[j];
    }
    return array.slice(0, i+1);
}

console.log(countUniqueValues([1,1,1,1,2,3]));

console.log(countUniqueValues2([1,1,1,2,2,2,3,4,5]));