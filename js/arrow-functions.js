console.log('Arrow functions')

let saldo = 2000

function retirar(amount) {
    if(amount <= saldo){
        console.log('retiro exitoso')
    } else {
        console.log('retiro fallido')
    }
}


// const suma = ( a, b) => {
//     return a + b
// }

// const suma = ( a, b) => a + b 

// const hablar = () => console.log('hablando...') 
// const hablar = a => console.log('hablando...') 
// const hablar = (a) => console.log('hablando...') 
// const hablar = (a, b, c ) => console.log('hablando...') 

// const depositar = (amount) => {
//     return { 
//         key: 2, 
//         key2: 4
//     }
// }

// const depositar = (amount) => ({ key: 2, key2: 4 })



/**
 * Introducción a Arrow functions
 * -> Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
 * -> Además, en ese caso, automáticamente se hace un return de esa única línea, 
 * -> por lo que podemos omitir también el return.
 * -> En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
 * -> En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
 * -> En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
 * -> Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
 * let func = () =>{ return ({'key': 4})}
 * 
 */



/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas accciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
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
 * 6. Transferir 500 pesos a la cuenta 1234
 * 
 * Escribir todo con Arrow Functions 
 */

let balance = 2000
let countGetBalance = 0
let countSetDeposits = 0
let countWithdrawCash = 0
 
const withdrawCash = amount => {
    if(amount < balance){
       balance =  balance - amount
       countWithdrawCash++
       console.log(`Toma tu dinero: $${amount}`)
    } else {
       console.warn('Saldo insuficiente!')
    }
}
 
const getBalance = () => (countGetBalance++ , `Tu saldo actual es de $${balance}`)
 
const setDeposits = amount => {
    if(amount > 0){
       balance =  balance + amount
       countSetDeposits++
       return `Tu saldo ahora es de $${balance}`
    } else {
       console.warn('Inserte una cantidad mayor a 0')
    }
 }
 
const transferCash = (account, amount) => {
    if(amount <= balance) {
       balance = balance - amount
       countWithdrawCash++
       console.log(`Dinero transferido a ${account} : $${amount}`)
       console.log(`Tu saldo actual es de $${balance}`)
    } else {
       console.warn('Saldo insuficiente!, intenta con otra cantidad')
    }
 }
 

