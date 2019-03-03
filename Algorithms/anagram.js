function anagram(string1, string2){
    
    if (string1.length != string2.length)
        return false;

    let frequencyCounter = {};

    for (let char of string1)
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;

    for (let char of string2){
        if (!frequencyCounter[char])
            return false;
        else 
            frequencyCounter[char]--;
    }
    return true;
}

console.log(anagram("icemannlnn","mnnannicen"));