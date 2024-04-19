//scrivere programma che scrive in console da 1 a 100

//passi da seguire :
// definire il for con i tre componenti in parentesi
//definire cosa esegue ad ogni ciclo(console log numero )
// definisco la condizione di quando non vengono soddisfatti i requisiti 1 e 2
// voglio provare a stampare la lista 

//richiamo il div come costante 
//aggiungo alla costante tramite innerhtml




for(let i=1;i<=100;i= i+ 1){
    let lista = document.getElementById("contenitore-numeri");
    const element =`<div></div>`;
    
    
    
    
    if(i % 3==0 && i % 5==0){
        console.log("fizzbuzz");
        lista.innerHTML+=element+"fizzbuzz";
        
    }
    
    
    else if(i % 3 == 0) {
        console.log("fizz" );
        lista.innerHTML+=element+"fizz";

        
    }
    
    else if(i % 5 ==0){
        console.log("buzz");
        lista.innerHTML+=element+"buzz";

    }
    
    else{
        console.log(i)
        lista.innerHTML+=element+i;
    }
    
    
  

}
