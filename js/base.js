console.log('First Exercises')
/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b

	Si a < b sumar a más b

	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

// const numberOne = parseInt(window.prompt("Cuál es la variable a"))
// const numberTwo = parseInt(window.prompt("Cuál es la variable b"))
// let result

// if(numberOne > numberTwo){
//     result = numberOne / numberTwo
// } else if(numberOne < numberTwo){
//     result = numberOne + numberTwo
// } else {
//     result = numberOne * numberTwo
// }


/***
	Pedir por el promt un numero, y comprobar si es par o impar
*/


const parOImpar = parseInt(window.prompt("Dame un numero"))
console.log(parOImpar)

if(parOImpar % 2 === 0){
    console.log(`el numero ${parOImpar} es par`)
} else {
    console.log(`el numero ${parOImpar} es impar`)
}

