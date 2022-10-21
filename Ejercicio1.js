/* Crea un array de 10 posiciones de número. Muestra por consola el índice y el valor al que corresponde. */


function first() {
    let array= [3,1,2,6,4,6,3,9,4,2];
    array.forEach ((valor, índice) => {
        console.log(`Índice: ${[índice]}, valor: ${[valor]}`);
    });
}

first()

