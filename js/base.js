console.log('Metodos de string y ciclos')

/**
 * Ciclos
 * 
*/

/*
 for(inicio; fin ; aumento/decremento){
	// sentencias
 }
 */

/**
 * Reverse string Fake
 
let stringToread = 'Jorge luis camarillo'

for(let i = 0; i < stringToread.length ; i++){
	console.log(i, stringToread[i])
}

for(let i = stringToread.length - 1; i >= 0; i--){
	if(stringToread[i] !== " ") {
		console.log(i, stringToread[i])
	}
}

*/

/*
// string to reverse user
const nameUser = window.prompt('Dame tu nombre completo')
let stringReversed = ''

for(let i = nameUser.length - 1; i >= 0; i--){
	stringReversed += nameUser[i]
}
console.log(stringReversed)
*/

// Ejercicios

/**
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

// const numberTable = parseInt(window.prompt('Escribe un numero'))
// for(let i = 1; i <= 10; i++){
// 	console.log(`${numberTable} x ${i} = ${numberTable * i}`)
// }

/**
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */

// const phrase = window.prompt('Escribe una frase').toLowerCase()
// let vowels = ''
// let consonants = ''
// for(let i = 0; i < phrase.length; i++){

// 	if(phrase[i] !== ' ' || phrase[i] !== ',' || phrase[i] !== '.'){
// 		if(
// 			phrase[i] == 'a' || 
// 			phrase[i] == 'e' || 
// 			phrase[i] == 'i' || 
// 			phrase[i] == 'o' || 
// 			phrase[i] == 'u' || 
// 			phrase[i] == 'á' || 
// 			phrase[i] == 'é' || 
// 			phrase[i] == 'í' || 
// 			phrase[i] == 'ó' || 
// 			phrase[i] == 'ú'
// 		){
// 			vowels += phrase[i]

// 		} else {
// 			consonants += phrase[i]
// 		}
// 	}
// }
// console.log(vowels)
// console.log(consonants)

/**
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

// const evenRange = parseInt(window.prompt('Escribe un numero'))
// for(i=1; i<= evenRange; i++){
// 	if(i % 2 === 0){
// 		console.log(i)
// 	}
// }


// While
let counter = 1 // inicio
let fin = 10
let table = 9 
while(counter <= 10){ // fin
	
	console.log(`${table} x ${counter} =  ${table * counter}`)
	counter += 1 // aumento / decremento
}







