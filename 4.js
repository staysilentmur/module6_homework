 const intervalId = setInterval(function (a, b) {

    for (a;a<b+1;a++){
        console.log(a);
        if (a==b){
            clearInterval(intervalId);
        }
    }
    
 }, 1000, 6,  17); 
 
