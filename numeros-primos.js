'use strict'

const numero = parseInt(prompt("Mete un numero", 2));

function numPrimo(numero) {
    const primos = [];
         
    if (numero === 1) {
        return alert(" 1 no es un número primo");
    }else{
        for(let i = 2; i <= numero; i++) {
            let primo = true;
            
            for(let divisor = 2; divisor < i; divisor++) {
            
                if(i%divisor === 0) {
                    primo = !primo;
                break;
                }
            }
        
            if(primo) {
                primos.push(i);
            }
        }
    
        return console.log(primos);
    }
}

numPrimo(numero);


