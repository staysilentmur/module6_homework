function count(arr){
    let evenNumber=0;
    let oddNumber=0;
    let nullNumber=0;
    for (let i=0;i<arr.length;i++){
        if (typeof arr[i]==='number'&& !isNaN(arr[i])){
            if (arr[i]%2==0 && arr[i]!=0){
                evenNumber++;
            }
            
            else if (arr[i]==0){
                nullNumber++;
            }
            else {
                oddNumber++;
            }
    }
}
    return {
        even: evenNumber,
        od: oddNumber,
        null: nullNumber
    };
}
let arr=[1,2,"3",4,"5",0];
console.log(count(arr));