
console.log('Funciones')

// definicion de la funcion
// function getPI() {

//     let dollar = 21
//     if(dollar == 20){
//         // termina la funcion y retorna
//         return dollar
//     }

//     // termina la funcion y retorna
//     return 30
//     console.log('algo mas')
// }

// Mandar llamar la función

// funciones con parametros
// cocina facil
function recetaSalsa(ingrediente1, ingrediente2) {
    // proceso
    let salsa = ingrediente1 + ' ' + ingrediente2
    // resultado
    return salsa
}

let bowl = recetaSalsa('Tomate','Chile')

// function buySalt(cash) {
//     if(cash != undefined){
//         console.log('save cash'+ cash)
//         console.log('Cambio'+ cash)
//         return "salt"
//     } else {
//         return "Give me cash"
//     }
// }


// function transferencia(account, cash) {
    
//     console.log('get account = '+ account)
//     console.log('get cash = '+ cash)
//     //  proceso
//     console.log('verificar saldo de cuenta')

//     if('saldo >= cash'){
//         console.log('Enviar a la cuenta', account)
//         return 'succes'
//     } 
    
//     return 'error'
    
// }

function suma(val1, val2) {
    return val1 + val2
}
function multi(val1, val2) {
    return val1 * val2
}

function getAddMulti(valor, valor2) {
    let resultAdd = suma(valor, valor2)
    let resultMulti = multi(valor, valor2)
    console.log('suma: '+ resultAdd)
    console.log('Multiplicación: '+ resultMulti)
}










