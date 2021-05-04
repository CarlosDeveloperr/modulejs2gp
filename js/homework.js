/**
 * Ejercicios
 */


/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

function weightInMoon() {
    let weight_in_earth = prompt('¿Cuál es tu peso en KG?')
    let weight_in_moon = (weight_in_earth / 9.81) * 1.622
    let resultTwo = `Tu peso en la luna es: ${weight_in_moon} kg`
}
let weightInMoon = weightInMoon()
console.log(weightInMoon)


/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */


const scoreExam = parseInt(widow.prompt('¿Cuál fue la califiación de tu ultimo examen?'))
if (scoreExam >= 90) {
    console.log('Tu calificación es una A')
} else if (scoreExam >= 80 && scoreExam < 90) {
    console.log('Tu calificación es una B')
} else if (scoreExam >= 70 && scoreExam < 80) {
    console.log('Tu calificación es una C')
} else if (scoreExam >= 60 && scoreExam < 70) {
    console.log('Tu calificación es una D')
} else if (scoreExam >= 50 && scoreExam < 60) {
    console.log('Tu calificación es una E')
} else {
    console.log('Tu calificación es una F')
}


/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */

const numberToDivide = parseInt(window.prompt('Inserta un número entre 1 y 100'))

if (numberToDivide % 2 === 0 || numberToDivide % 3 === 0 || numberToDivide % 11 === 0) {
    if (numberToDivide % 2 === 0 && numberToDivide % 3 === 0 && numberToDivide % 11 === 0) {
        console.log(`${numberToDivide} es divisible entre 2, 3 y 11 `);
    } else if (numberToDivide % 2 === 0 && numberToDivide % 3 === 0) {
        console.log(`${numberToDivide} es divisible entre 2 y 3 `);
    } else if (numberToDivide % 2 === 0 && numberToDivide % 11 === 0) {
        console.log(`${numberToDivide} es divisible entre 2 y 11 `);
    } else if (numberToDivide % 3 === 0 && numberToDivide % 11 === 0) {
        console.log(`${numberToDivide} es divisible entre 3 y 11`);
    } else if (numberToDivide % 11 === 0) {
        console.log(`${numberToDivide} es divisible 11`);
    } else if (numberToDivide % 3 === 0) {
        console.log(`${numberToDivide} es divisible 3`);
    } else if (numberToDivide % 2 === 0) {
        console.log(`${numberToDivide} es divisible 2`);
    }
} else {
    console.log(`${numberToDivide} no es divisible entre 2, 3 u 11`);
}



/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

const numberIsEven = parseInt(window.prompt('Inserta un número entre 1 y 100'))
numberIsEven % 2 === 0 ? console.log(`${numberIsEven} es par`) : console.log(`${numberIsEven} es impar`)

/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

const dayOfWeek = window.prompt('Qué día de la semana es hoy?').toLowerCase()
if (dayOfWeek === 'domingo') {
    console.log(`El ${dayOfWeek} es el día 1 de la semana`);
} else if (dayOfWeek === 'martes') {
    console.log(`El ${dayOfWeek} es el día 2 de la semana`);
} else if (dayOfWeek === 'miercoles' || dayOfWeek === 'miércoles') {
    console.log(`El ${dayOfWeek} es el día 3 de la semana`);
} else if (dayOfWeek === 'jueves') {
    console.log(`El ${dayOfWeek} es el día 4 de la semana`);
} else if (dayOfWeek === 'viernes') {
    console.log(`El ${dayOfWeek} es el día 5 de la semana`);
} else if (dayOfWeek === 'sábado' || dayOfWeek === 'sabado') {
    console.log(`El ${dayOfWeek} es el día 6 de la semana`);
} else if (dayOfWeek === 'domingo') {
    console.log(`El ${dayOfWeek} es el día 7 de la semana`);
} else {
    console.log(`El ${dayOfWeek} no es un día de la semana`);
}


/**
 * 6:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const numberOne = prompt('¿Dame un numero?')
numberOne = parseInt(numberOne)
const numberTwo = parseInt( prompt('¿Dame otro numero?') )

if (numberOne > numberTwo) {
    console.log(`El ${numberOne} es el mayor y el ${numberTwo} es el menor`)

} else if (numberOne === numberTwo) {
    console.log(`El ${numberOne} es igual al ${numberTwo}`)

} else {
    console.log(`El ${numberTwo} es el mayor y ${numberOne} el menor`)
}