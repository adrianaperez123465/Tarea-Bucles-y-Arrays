/* Realiza una función, que trabaje con un array de enteros. A este mismo tendrá que sumar todos los números de 
este array y luego validar, si el resultado de esta suma es múltiplo de 3 imprimirá “Si es múltiplo”, 
si no lo es que imprima “No es múltiplo”. */


function third() {
    let array=[3,6,9,12,15];
    let largo = array.length;
    let suma = 0;

    for (let index = 0; index < largo; index++) {
        suma+=array[index];  
    }
    if (suma % 3 ===0) {
        console.log(`Sí es múltiplo`);
    } else{
        console.log(`No es múltiplo`);
    }
}

third()
