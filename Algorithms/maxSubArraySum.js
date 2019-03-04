/*
problem: find the maximum sum of a subarray of the given length.

inputs: an array, and a length
output: number representing the maximum sum of the subarray of size length

examples:
[1,2,3,4,5,1,2], 3 -> 12 because the max sum of size 3 is 3 + 4 + 5
steps using sliding window:
make sure the array is not empty, also the supplied length must be
less than the array.
our window size will be the supplied length.
calcualte the sume of the first window and store it in maxSum
slide the window one to the right, subtract the left number (which is now outside the window)
and add the right number which is now inside the window. store it in temp max
if the tempMax is > maxSum then maxSum = tempMax
*/

function masSubarraySum(array, length){
    if (array.length == 0 || array.length < length)
        return undefined;

    let maxSum = 0;

    for (let i = 0; i < length; i++)
        maxSum += array[i];

    let tempMax = maxSum;
    for (let i = 1; i < array.length - length ; i++){
        tempMax = tempMax - array[i-1] + array[i+length -1];
        if (tempMax > maxSum)
            maxSum = tempMax;
    }
    return maxSum;
}

console.log(masSubarraySum([2,6,9,2,1,8,5,6,3],3));