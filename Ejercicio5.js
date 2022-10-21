/*Dado un array de enteros, recorrer el array y validar si el número X existe dentro de ese mismo array. 
En caso de que exista imprimir un mensaje que muestre un mensaje avisando que ese número ya se encuentra 
en el array. Caso contrario, agregar el número al array. */

function enteros() {
    let array = [2,4,5,6]
    let x =5;
    let condición = false;

    array.forEach((número)=>{
        if (x==número){
            console.log(`El número ${[x]} ya existe en el array`);
            console.log(array);
            condición = true;
        }})

        if (condición== false) {
         array.push (x);
         console.log(`El número ${[x]} no existía, por eso se ha agregado al array`);
         console.log(array);  
        }
}

enteros()

