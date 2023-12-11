// ES 1
// Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.

// Esempio: Input= 5    Output= [5, 9, 1, 6, 10]

function esUno (n) {
    let randomNumbers = [];

    for (i=0; i < n; i++) {
        randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        randomNumbers.push(randomNum);
    }
    
    return randomNumbers;
}

console.log(esUno(5));

// ES2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//   Esempio:
//     Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//     Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
//   Variante:
//   Prova ad ordinali in modo crescente.

function esDueC (n) {
    let randomNumbers = [];

    for (i=0; i < n; i++) {
        randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        randomNumbers.push(randomNum);
    }
    randomNumbers.sort((a, b) => a - b);
    return randomNumbers;
}

console.log(`ordine crescente ${esDueC(10)}`);

function esDueD (n) {
    let randomNumbers = [];

    for (i=0; i < n; i++) {
        randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        randomNumbers.push(randomNum);
    }
    randomNumbers.sort((a, b) => b - a);
    return randomNumbers;
}

console.log(`ordine decrescente ${esDueD(10)}`);

// ES 3
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempi:

//     Input : 9
//     Output :  1 cifra


//     Input : 99
//     Output :  2 cifre

function esTre (n) {

    if (n > 0 && n < 10000){
        if (n < 10) {
            return 1;
        }
        else if (n < 100) {
            return 2;
        }
        else if (n < 1000) {
            return 3;
        }
        else {
            return 4;
        }
    } 
    else {
        return 'numero non valido'
    }
}

console.log(esTre(990));

// ES4
// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//   FALSE altrimenti.
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE 

function esQuattro (x, y) {
    if (x === y) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(esQuattro(2, 4));

// ES5
// Scrivi una funzione che dato un numero stampi la tabellina corrispondente.

function esCinque (n) {

    tabellinaCompleta = [];

    for (i = 1; i <= 10; i++) {
        tabellina = n * i;
        tabellinaCompleta.push(tabellina);
    }

    return tabellinaCompleta;
}

let numero = 5;
console.log(`la tabellina del ${numero} è ${esCinque(numero)}`)

// ES6
// Scrivi due funzioni: dato un array: let numbers = [10, 12, 78, -4, -20, 11]; una che prenda in input un array di numeri e restituisca il maggiore l'altra che restituisca il minore. Suggerimento utilizzare Math.max() e Math.min();

function esSeiMaxA (a) {
    return Math.max.apply(null, a)
}

function esSeiMinA (a) {
    return Math.min.apply(null, a)
}

function esSeiMaxB (a) {
    return a.reduce((a, b) => Math.max(a, b), -Infinity);
}

function esSeiMinB (a) {
    return a.reduce((a, b) => Math.min(a, b), -Infinity);
}


// metodo corretto:

function esSeiMaxC (a) {
    return Math.max(...a);
}

function esSeiMinC (a) {
    return Math.min(...a);
}

let a = [10, 12, 78, -4, -20, 11];

console.log(esSeiMaxA(a));
console.log(esSeiMinA(a));

console.log(esSeiMaxB(a));
console.log(esSeiMinB(a));

console.log(esSeiMaxC(a));
console.log(esSeiMinC(a));