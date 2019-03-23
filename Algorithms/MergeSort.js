function merge(array1, array2){
    let result = [];
    let i = 0;
    let j = 0;

    while (i < array1.length || j < array2.length){
        
        if (array1[i] < array2[j] || array1[i] && !array2[j]){
            result.push(array1[i]);
            i++;
        }
        else if (array2[j] < array1[i] || array2[j] && !array1[i]){
            result.push(array2[j]);
            j++;
        }
        else {
            result.push(array1[i]);
            result.push(array2[j]);
            i++;
            j++;
        }
    }
    return result;
}

let result = merge([1,2,5], [2,4,6,7,8]);
console.log(result);