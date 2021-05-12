
// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/

let arrayToReverse = [4,3,2,1]
let arrayReversed = []
for(let i = arrayToReverse.length - 1; i >= 0; i--){
    arrayReversed.push(arrayToReverse[i])
}
console.log(arrayReversed)



/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/
let arrayOne = [1,2,3,4]
let arrayTwo = [1,2]
let twoArrays = arrayOne.concat(arrayTwo)
let sumArrays = 0
twoArrays.forEach(item => {
    sumArrays += item
})
console.log(sumArrays)


/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/

const arrayRepeatedNumbers = (arrOne, arrTwo) => {
    let repeatedNum =  arrOne.filter((element) =>  {
        if( arrTwo.includes(element) ) {
            return element
        }
    })
    let repeatedNumOnly = repeatedNum.filter((element, index, arr) =>  {
        if( arr.indexOf(element) === index ) {
            return element
        }
    })
    return repeatedNumOnly
    
}

let RepeatedNumbers = arrayRepeatedNumbers([1,2,3,4,3,4,4],[1,2,4])
console.log(RepeatedNumbers)