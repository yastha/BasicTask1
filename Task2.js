function checkPalindrome(str){
let st= str.split("").reverse().join("");
console.log(st);
return st;
}

let testVariable = "asthaa";
let checkVariable= checkPalindrome(testVariable);
if (testVariable==checkVariable){
     console.log("This number is a Palindrome number");
 }else{
    console.log("This number is not Palindrom");
 }
