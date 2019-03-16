/**
 * this function takes in data string and a search string
 * it will return the count of the search string in the data string.
 * 
 * @param {*} data data string to find the search string in
 * @param {*} search the string to look for in the data
 */

function NaiveStringSearch(data, search){

    let count = 0;
    // loop over the characters in the data string,
    // but stop when were search.length away from the end
    for (let i = 0; i < data.length - search.length + 1; i++){
        for (let j = 0; j < search.length; j++){
            // if this is true, this means we found a match
            if (j === search.length - 1){
                count++;
            }
            // if its not a match then break the inner loop
            else if (!(search[j] === (data[i+j]))){
                break;
            }
        }
    }
    return count;
}

console.log(NaiveStringSearch("omgxyzomg", "omg"));
