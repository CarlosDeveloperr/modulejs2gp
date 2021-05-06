// Ejercicios 

// Unicamente usar el ciclo While
/** 
 * 1: 
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */


/**
 * 2:
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */


/**
 * 3:
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */


// Resolver 4 y 5 con For y While

/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */

let string = 'anita lava la tina'
let normalString = string.split(' ').join('')
let reverseString = normalString.split('').reverse().join('')
normalString === reverseString ? console.log('palindromo') : console.log('No palindromo')

/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado

 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *

*/

const numberPattern = window.prompt('')

let limit = 5
let char = ''
for(let i = 1; i <= limit; i++){
    char += '*'
    console.log(char)
    if(i == limit){
        for(let i = limit - 1; i >= 1; i--){
            console.log(char.substring(0, i))
        }

    }    
}    

