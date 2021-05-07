

/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
 */

let sumMultiples = 0;
for(i = 1; i <= 100; i++){
    if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0 ){
        sumMultiples += i
    }
}


 /**
  * While
  * Escribir un programa que le pida al usuario un numero
  * que imprima en consola el numero dado si es positivo
  * si el numero es negativo, salir del ciclo
  * 
  */

let initialNumber = parseInt(window.prompt('Dame el numero inicial'))
while(initialNumber >= 0){
    console.log(`el numero introducido fue ${initialNumber}`)
    initialNumber = parseInt(window.prompt('Dame otro numero'))
}


/**
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */

let consonantStr = 'smtp'
let vowelsStr = 'aeiou'

for(let i = 0; i < consonantStr.length; i++) {
    let strinToPrint = ''
    for(let j = 0; j < vowelsStr.length; j++){
        strinToPrint += `${consonantStr[i]}${vowelsStr[j]};`
    }
    console.log(strinToPrint)
}



