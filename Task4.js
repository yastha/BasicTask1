function capitalLetter(str){
 str=str.split(" ");
    for(i=0;i<str.length;i++){
        str[i]= str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

console.log(capitalLetter("I want to change this satement into intial letter capital"));
