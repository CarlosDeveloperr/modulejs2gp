console.log('Funciones, parametros por defecto, funciones como parametro (callback)')


function myFunction(paramOne, paramTwo) {
   paramOne = paramOne || 9
   paramTwo = paramTwo || 10
   console.log(paramOne, paramTwo)
   // let suma = paramOne + paramTwo
   // return suma
}



/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

function celsiusToF(temp, initial = 'c', finish = 'f') {
   return initial == "c" ? 
      tempConverted = (temp * 9) / 5 + 32 :
      tempConverted = ((temp - 32) * 5) / 9
}
// celsiusToF(100) -> c to f
// celsiusToF(100,"f", "c") -> f to c









/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas accciones
 * 1. Retiro de efectivo
 * 2. Depósito
 * 3. Consulta de saldo
 * 4. Traspasar a la cuenta 1234 $500
 * 
 * Datos iniciales
 * Saldo 2000
 * Consultas de saldo = 0
 * Depositos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */



/**
 * funciones como expresion
 * Ejemplo: let saludo = function() ...
 */


/**
 * Ejercicio
 * Cambiar las funciones de "funcionamiento de un cajero"
 * a funciones
 */






/**
 * Pasar como parametro una función
 * CallbackSuccess, CallbackError
 * 
 */


/**
 * Ejercicio
 * Pasar como parametro una función
 * CallbackSuccess, CallbackError
 * 
 */



/**
 * funciones autoejecutadas
 * 
    ( function () {
    let nombre = 'Victor'
    return `Hola ${nombre}`
    })()

 */




