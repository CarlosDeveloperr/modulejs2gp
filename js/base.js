console.log('Metodos de array')

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> 5



// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

























// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

const mostBiggest  = arr => {
    let largest = arr[0]
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


