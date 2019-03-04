/*
This is linear search. It takes an array and a value.
It returns the index of the value if it exists in the array or -1 if it doesnt exist.

Time complexity is O(n)
Memory complexity is O(1)
*/

function linearSearch(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value)
            return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,12], 5));
console.log(linearSearch([1,2,3,4,5], 7));