// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días

const monthToCompare = parseInt(window.prompt('Dame un numero entre 1 y 12'))
let month
monthToCompare == 1 ? month = "Enero" :
    monthToCompare == 2 ? month = "Febrero" :
    monthToCompare == 3 ? month = "Marzo" :
    monthToCompare == 4 ? month = "Abril" :
    monthToCompare == 5 ? month = "Mayo" :
    monthToCompare == 6 ? month = "Junio" :
    monthToCompare == 7 ? month = "Julio" :
    monthToCompare == 8 ? month = "Agosto" :
    monthToCompare == 9 ? month = "Septiembre" :
    monthToCompare == 10 ? month = "Octubre" :
    monthToCompare == 11 ? month = "Noviembre" :
    monthToCompare == 12 ? month = "Diciembre" : ''

switch (monthToCompare) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${monthToCompare} (${month}) tiene 31 dias`)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${monthToCompare} (${month}) tiene 30 dias`)
        break
    case 2:
        console.log(`El mes ${monthToCompare} (${month}) tiene 28 0 29 dias`)
        break
    default:
        console.log("Número inválido, debe estar entre 1 y 12.")
}

/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */

const weather = prompt('¿Cómo está el clima?')
switch (weather) {
    case 'soleado':
        console.log('oh!, que buen clima para estar en la playa')
        break
    case 'lluvioso':
        console.log('oh!, que buen clima para estar en la playa')
        break
    case 'nevado':
        console.log('oh!, que buen clima para quedarse en casa')
        break
    case 'nublado':
        console.log('oh!, que buen clima para tomar café')
        break
    default:
        const weatherDescription = prompt('¿Describime tu día?')
        console.log(weatherDescription)
}


/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

const namePerson = window.prompt('Cual es tu nombre')
const lastWordName = namePerson.charAt(namePerson.length - 1).toLowerCase()
console.log(`Tu nombre termina con ${lastWordName}`)
// if( 
//     lastWordName == "a" || 
//     lastWordName == "e" ||
//     lastWordName == "i" ||
//     lastWordName == "o" ||
//     lastWordName == "u" )
//     {
//     c

// } else {
//     console.log(`Tu nombre termina con ${lastWordName}`)
// }


/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */

const nameToReverse = window.prompt('¿Cuál es tu nombre?')
const nameReversed = nameToReverse.split('').reverse().join('')
console.log(nameReversed.toUpperCase())


/**
 * 5:
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

const wordToRepeat = window.prompt('¿Dame una palabra random?').concat(' ')
const numberRepeat = window.prompt('¿Cuantas veces quieres repetir la palabra?')
const wordRepeated = wordToRepeat.repeat(numberRepeat)
console.log(wordRepeated)

