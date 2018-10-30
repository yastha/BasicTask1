function findMaxChar(str){
const maxCharacter = (str) => {
    let charec=[], maxNum=0, maxChar="";
    str.split('').forEach(char => {
        if (charec[char])
        {
            charec[char]++;
        }
        else
        {
            charec[char] = 1;
        }
        for(let char in charec)
        {
            if(charec[char]>maxNum)
            {
                maxNum = charec[char];
                maxChar = char;
            }
        }
    });
    return maxChar;
 }
}

let finalValue= findMaxChar("Javascript");
console.log(finalValue);
 