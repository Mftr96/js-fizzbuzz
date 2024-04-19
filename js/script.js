//scrivere programma che scrive in console da 1 a 100

//passi da seguire :
// definire il for con i tre componenti in parentesi
//definire cosa esegue ad ogni ciclo(console log numero )
// se i= multiplo 3 mi stampa fizz e non 3
// definisco la condizione di multiplo di 3 
//definisco la condizione di multiplo di 5 
//definisco la condizione di quando è sia il caso 1 che 2 
// definisco la condizione di quando non vengono soddisfatti i requisiti 1 e 2

for(let i=1;i<=100;i= i+ 1){
    
    if(i % 3==0 && i % 5==0){
       console.log("fizzbuzz");        
   }
  

    else if(i % 3 == 0) {
        console.log("fizz" );
    }

    else if(i % 5 ==0){
        console.log("buzz");
    }

    else{
        console.log(i)
    }
}
