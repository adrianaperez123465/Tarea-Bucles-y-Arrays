/* Crea un array de números de 20 posiciones, que contendrá números del 1 al 100. 
Obtén la suma de todos ellos y la media. */

function media() {
    let array= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let suma = 0;
    let media = 0;


    array.forEach(element => {
        suma+= element;
    });

    console.log(`La suma es de: ${[suma]}`);

    media = suma/array.length;
    console.log(`La media es: ${[media]}`);
}

media()