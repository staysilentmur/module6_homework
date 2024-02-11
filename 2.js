let del=2;
function prime(number){

    if (number>1000){
        console.log("не верное значение")
    }
    else{
        while (del*del <number && number%del!=0){
            del++;
        }
    }
    return del*del>number
}
console.log(prime(17));