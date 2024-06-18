/**
 *  Escribe una función que reciba un array de números y retorne la cantidad de números pares que contiene.
 */

console.log("Hola Mundo!");

let nArr = [3, 4, 1, 2, 6];

function Array(Arr) {
  let par = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] % 2 === 0) {
      console.log(`El Número Par: ${Arr[i]}`);
      par++;
    }
  }
  return par;
}

// let num = Array(nArr);
console.log(`La Cantidad de Números Pares es de: ${Array(nArr)}`);
console.log(`El Arreglo es: ${nArr}`);

//Escribe una función que reciba un array de números enteros y retorne el número más grande

function masGrande(Arr) {
  let number = Arr[0];
  for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] > number) {
      number = Arr[i];
    }
  }
  return number;
}

console.log(`Numero: ${masGrande(nArr)}`);
