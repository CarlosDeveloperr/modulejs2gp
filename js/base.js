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

