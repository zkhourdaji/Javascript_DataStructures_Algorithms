/*
fine one pair in the array where their sum is 0
*/

function sumZero(array){
    let left = 0;
    let right = array.length -1;

    while (left < right){
        let sum = array[left] + array[right];
        if ( sum == 0){
            return [array[left],array[right]];
        }
        else if (sum < 0){
            left++;
        }
        else if (sum > 0){
            right--;
        }
    }
    return null;

}

console.log(sumZero([1,2,3,4,5]));