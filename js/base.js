console.log('Objetos')


let koder = {
    name: 'rose',
    "last-name": 'ortega',
    gender: 'F',
    age: 20,
    scores: [ 'uno', 2, [3] ],
    otro: {
        llave: 'valor'
    },
    family: [
        {
            name:'familiar 1',
            age: 20
        },
        {
            name:'familiar 1',
            age: 20
        }
    ],
    getFullName: function()  {
        console.log(this)
        return `${this['name']} ${this["last-name"]}`
    }
}

// ejercicio
// convertir un array de arrays 
// a un array de objetos
// [
//     ['ensalada','paella','platano', 100],
// ]

// let obj = {
//     entrada: 'ensalada de pepinos',
//     principal: 'paella',
//     postre: 'platano',
//     precio: 100,
// }

let pedidos = [
    {
        entrada: 'ensalada de pepinos',
        principal: 'paella',
        postre: 'platano',
        precio: 100,
    }, {
        entrada: 'ensalada de tomates',
        principal: 'pescado',
        postre: 'helado',
        precio: 120,
    }, {
        entrada: 'ensalada simple',
        principal: 'paella',
        postre: 'simple',
        precio: 80,
    },{
        entrada: 'ensalada simple',
        principal: 'enchiladas',
        postre: 'yogurt',
        precio: 80,
    },{
        entrada: 'ensalada cesar',
        principal: 'salmón',
        postre: 'platano',
        precio: 100,
    }
]
// [{},{},{},{},{}]

// pedidos.forEach((pedido) => {
//     console.log(pedido.postre)
// })


/*
    Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
    Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
    Funcion que devuelve los pedidos que tengen un precio superior a 90 
    Funcion que devuelve los pedidos que tengen un precio inferior a 90 
*/

const f1 =  pedidos.reduce((acc,cv) => cv.principal === 'paella'? acc += 1: acc, 0)
const f2 =  pedidos.filter(pedido => pedido.postre === 'platano' || pedido.postre === 'helado' )
const f3 =  pedidos.filter(pedido => pedido.precio >= 90)
const f4 =  pedidos.filter(pedido => pedido.precio < 90)
// console.log(f1)
// console.log(f2)
// console.log(f3)
// console.log(f4)


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]


let objPedido = {
    entrada: 'ensalada de pepinos',
    principal: 'paella',
    postre: 'platano',
    precio: 100,
    coords: [213131.13, 1313131.4],
    precio2: 100
}

// for in
// for(item in objPedido) {
//     if(item === 'coords' || typeof objPedido[item] === "object" ) {
//         console.log(`lat: ${ objPedido[item][0]} , long: ${ objPedido[item][1]}`)
//     } else {
//         console.log(objPedido[item])
//     }
// }


let llaves = Object.keys(objPedido)
console.log(llaves)
// ["entrada", "principal", "postre", "precio", "coords", "precio2"]

// keys.forEach((item) => {
//     if(item === 'coords' || typeof objPedido[item] === "object" ) {
//         console.log(`lat: ${ objPedido[item][0]} , long: ${ objPedido[item][1]}`)
//     } else {
//         console.log(objPedido[item])
//     }
// })

// let entries = Object.entries(objPedido)
// console.log(entries)

let values = Object.values(objPedido)
console.log(values)

Object.values(objPedido).forEach((value, index, array) => {
    console.log(value)
})







