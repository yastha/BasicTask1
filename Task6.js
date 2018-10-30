function chunkCreator(array,chunksize){
    let chunkArray=[];
    for (i= 0; i<array.length;i+= chunksize){
        chunkArray.push(array.slice(i,i+chunksize));
    }
    return chunkArray;
}
let printVariable= chunkCreator([1,2,3,4,5],2);
console.log(printVariable);
