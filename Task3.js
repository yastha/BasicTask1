function reverseInteger(value){
    console.log("The string that needs to reverse is " + value);
   let reverseValue = value.toString().split("").reverse().join("")
return reverseValue;
}

let finalValue=reverseInteger(67);
console.log("The reverserd string is " + finalValue);