function merge(array1, array2){
    let result = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length){
        if (array1[i] < array2[j]){
            result.push(array1[i]);
            i++;
        }
        else {
            result.push(array2[j]);
            j++;
        }
    }
    // this happens if one array is bigger than the other
    // we will exit the first while loop but still have elements from
    // one array to add to results
    for (i; i < array1.length; i++)
        result.push(array1[i]);
    for (j; j < array2.length; j++)
        result.push(array2[j]);
    return result;
}

let result = merge([1,2,5], [2,4,6,7,8]);
console.log(result);