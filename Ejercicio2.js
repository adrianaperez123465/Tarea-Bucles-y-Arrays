/* Dado un array, divide sus números por 2 e imprime el resultado. */

function división() {
    let array= [6,78,21,98,13];
    let largo = array.length;

    for (i=0; i<largo; i++) {
        console.log(`División de: ${array[i]}, entre 2= ${array[i]/2}`);
    }
}

división();