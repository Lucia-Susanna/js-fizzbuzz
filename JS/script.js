//DATI
const multiploDi3 = 'Fizz'
const multiploDi5 = 'Buzz'
const multiploDi3e5 = multiploDi3 + multiploDi5;

//CICLO NUMERI DA 1 A 100
for (let i = 1; i <=100; i++) {
  
  // CONDIZIONI
  if  (!(i % 3) && !(i % 5)){
    console.log(multiploDi3e5);  
    
    
  } else if (!(i % 5)){
    console.log(multiploDi5);
    
  } else if (!(i % 3)){ 
    console.log(multiploDi3);  
  }

  console.log(i);
}


