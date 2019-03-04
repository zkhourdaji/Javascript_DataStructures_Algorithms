function countOdd(array){
    let results = [];

    function recursive(array){
        if (array.length === 0)
            return;
        if (array[0] % 2 !== 0)
            results.push(array[0]);
        recursive(array.splice(1));
    }
    recursive(array);
    return results;
}

console.log(countOdd([1,2,3,4,5]));