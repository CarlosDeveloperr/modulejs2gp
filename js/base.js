console.log('Metodos de array')


let arrFor = [1,2,3,4]

// Inicio ok
// condicion de parada (fin) 
// counter -> aumento / decremento
// for(let i = 0; i < arrFor.length ; i++) {
//    console.log(arrFor[i]) 
// }
// arrFor.forEach(function() {
//    // sentencias 
// })

// arrFor.forEach((currentValue) => {
//     console.log(currentValue)
// })
























// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

const mostBiggest  = arr => {

    // ordenar de mayor a menor arr = [5,4,3,2,1]
    // retornar arr[1] -> 4

    let largest = 0
    arr.forEach(element => {
        if (largest < element ) {
            largest = element
        }
    })
    return largest
}


// ejercicio .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

const numberToStringMap = arr => arr.map( element => element.toString() )
const numberToStringFe = arr => {
    let arrStr = []
    arr.forEach( element => {
        arrStr.push( element.toString() ) 
    })
    return arrStr
} 


// funcion que dados 2 parametros
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const convertLeapYear = (startYear, endYear) => {
    let filteredYears = []
    for(let year = startYear; year <= endYear; year++){
        if(
            (year % 4 === 0 && year % 100 !== 0) || 
            (year % 100 === 0 && year % 400 === 0)
        ){
            filteredYears.push(year)
        }
    }
    // return arr.filter(year => {
    //     return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
    // })

    return filteredYears 
}


// arrFor.filter()
// 

// operador ternario
// arrow functions
/*

function filtrarPares (arrayAFiltrar) {
    let arrayfilter = []
    arrayfilter = arrayAFiltrar.filter( function (currenValue) {
        if ( currenValue % 2 !== 0 ) {
            return currenValue
        }
    })
    return arrayfilter
}

const filtrarPares = (arrayAFiltrar) => {
    return  arrayAFiltrar.filter( (currenValue) => {
        if ( currenValue % 2 !== 0 ) {
            return currenValue
        }
    })
}

const filtrarPares = arr => arr.filter( () => {
    if ( currenValue % 2 !== 0 ) {
        return currenValue
    }
})

const filtrarPares = arr => arr.filter( cv => cv % 2 !== 0 ? cv : '' )
*/
// const filtrarPares = arr => arr.filter( cv => cv % 2 !== 0 && cv > 2 )
// let arrayTofilter = [1,2,3,4,5] 
// let responseFiltrarPares = filtrarPares(arrayTofilter)
// console.log(responseFiltrarPares)


let arrStrAndNumbers = [1, "2", 3, "4", 'otro', 9, [1,2] ]
/*
function filterStrings(arr) {
    return arr.filter(function (currentValue) {
        if(typeof currentValue === "number") {
            return currentValue
        }
    })
}


const filterStrings = arr => { arr.filter(currentValue => {
        if(typeof currentValue === "number") {
            return currentValue
        }
    })
}

const filterStrings = arr => { arr.filter(currentValue => {
    typeof currentValue === "number" ? currentValue : ''
})

*/

const filterStrings = arr =>  arr.filter( currentValue  =>  typeof currentValue === "number" )





// console.log(this)

// const showThis = (arr, arr2) => {
//     arr.forEach(function(value, index, arr) {
//         console.log(this)
//     }, arr2)
// }

// let arrThis = [1,2,3,4]
// let arrThis2 = [1,2]
// showThis(arrThis, arrThis2)
