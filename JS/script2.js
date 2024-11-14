//DATI
const multiploDi3 = 'Fizz'
const multiploDi5 = 'Buzz'
const multiploDi3e5 = multiploDi3 + multiploDi5;

let output;

//CICLO NUMERI DA 1 A 100
for (let i = 1; i <=100; i++) {
   
  // CONDIZIONI
  if  (!(i % 3) && !(i % 5)){
    output = multiploDi3e5;      
    
  } else if (!(i % 5)){
    output = multiploDi5; 
    
  } else if (!(i % 3)){ 
    output = multiploDi3;  

  } else {
    output = i;
    
  }
}

console.log(output);
