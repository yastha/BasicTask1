/*Task 1:
String Reverse
*/
//Method 1
 
function reverseString(str){
    var newString = "";
    for (var i=str.length-1;i>= 0;i-- )
    newString += str [i];
    return newString;

}

let testVariable = reverseString("Astha");
console.log(testVariable);


//Method 3
function reverseVariable1(str){
    return str.split("").reverse().join("")
}

let Test= reverseVariable1("Bishwo");
console.log(Test);