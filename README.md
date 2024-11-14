FizzBuzz
===
Repo: js-fizzbuzz

Istruzioni:
1. Scrivi un programma che stampi i numeri da 1 a 100
2. Per i multipli di 3 stampi “Fizz” al posto del numero
3. Per i multipli di 5 stampi "Buzz" al posto del numero
4. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

Svolgimento:
- creo due variabili una per i multipli di 3 e una per i multipli di 5 a ccui do i valori di 'fizz' e 'buzz'
- creo un ciclo che parte da i = 1  e valida fino a che i <= 100 
- stampando la i dovrei avere la lista di tutti i numeri da 1 a 100
- inserisco a questo punto un if che abbia condizioni !(i % 3) && !(i % 5) in questo modo posso selezonare i multipli di 3 e 5 andando a sostituire i con la variabile 'Fizz' + 'Buzz'
- di seguito faccio un else if in cui inserisco solo il modulo per i multipli di 3
- di seguito faccio un else if in cui inserisco solo il modulo per i multipli di 5
