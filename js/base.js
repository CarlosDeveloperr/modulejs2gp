console.log('Metodos de array: map y reduce')


// forEarch -> nada
// filter ->  [] con los item que cumplieron la condicion
// -> puede devolver array vacio
// .map()  -> array computado 
// -> tiene la misma longitud del original
// -> transformar cada item en uno nuevo 
// 



// arrFor.map()
// Ejercicio 1:
// funcion que dado un array
// genere un nuevo array con los mismos numeros multiplicados por 2
function doubleNumbers(arr) {
    let response = arr.map( (currentValue, index, array) => {
        let res = currentValue  * 3
        res = res + 1
        return res
    })
    return response
}
let result = doubleNumbers( [2, 5, 100] )
// console.log(result)

// [4, 10, 200]




// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings
const stringItUp = arr =>  arr.map(item=> item.toString() )

//console.log(stringItUp([2, 5, 100]));
// ["2", "5", "100"]



function capitalizeNames(arr) {
    // sentences
}
//console.log(capitalizeNames(["jorge", "antOnio", "jUan", "victor"]))
// ["Jorge", "Antonio", "Juan", "Victor"]


// Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays, 
// y retorne un array con los nombres completos

const joinNames = (arrNames, arrSurnames) => {
    // sentences
    return arrNames.map( (value, index) => `${value} ${arrSurnames[index]}`) 
    // return arrNames.map((value, index) => {
    //     let fullName = `${value} ${arrSurnames[index]}`
    //     return fullName
    // })
}
// const joinNames = (arrNames, arrSurnames) => arrNames.map( (value, index) => `${value} ${arrSurnames[index]}`) 
// console.log( joinNames( ["jorge", "luis"], ['camarillo', 'cristobal'] ) )
// ["jorge camarillo ", "luis cristobal"]












// arrFor.reduce()
const totalAverage = (arr) => {
    // sentences
    let suma = arr.reduce((acumulador , valor, posicion, arr) => {
        return acumulador + valor
    }, 600 )
    return suma
}






const stringConcat = arr => arr.reduce( (acc,cv) => acc + cv , '') 
// let resStringconcat = stringConcat([1, 2, 3])
// console.log(resStringconcat)




// const totalShoppingCart = (arr) => {
//     return arr.reduce((acc, cv) => {
//         return acc + cv[1]
//     }, 0)
// }

const totalShoppingCart = arr =>  arr.reduce((acc, cv) => acc + cv[1] , 0)

let shopCart = [ 
        ["Reloj", 1321], 
        ["Reloj", 3000], 
        ["Reloj", 1200], 
        ["Reloj", 1200], 
        ["Reloj", 1200], 
        ["Reloj", 1200] 
    ] 

const totalAPagar = totalShoppingCart(shopCart)
console.log(`Total a pagar: ${totalAPagar}`)
// 2000
