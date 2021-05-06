



const monthNumber = parseInt(window.prompt('Dame el mes'))

switch (monthNumber) {
    case 1:
    case 3:
    case 5:
        // sentencias
        console.log('Mes con 31 dias')
    break
    case 4:
    case 6:
    case 8:

        console.log('Mes con 30 dias')
    break
    default:
        
        console.log('Mes con 28 o 29 dias')
    break
}