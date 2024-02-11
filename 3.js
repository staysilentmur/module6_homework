function firstFunc(numberOne){

    return function(numberTwo){

      return numberOne+numberTwo
    }
  }
  const answer=firstFunc(3);
  
  console.log(answer(5));
  