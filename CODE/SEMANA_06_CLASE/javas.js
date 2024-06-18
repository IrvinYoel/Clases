console.log("Hola Mundo!!");

let nombre = "Pamela";

console.log(nombre);

let edad = 25;

console.log(edad);
//camelCase - Al momento de declarar variables
let precioSmartphone = 900;

console.log(precioSmartphone);

//No se recomienda declarar variables con var, se puede declarar más de una ve y pueden dar errores
let nombre2 = "Giancarlo";
let numero = 20;
let nota = "20";
let number = 4.5;

console.log(numero);
//Cuando esta solo solo imprime el tipo de dato
console.log(typeof numero);
console.log(nota);
console.log(typeof nota);
console.log(number);
console.log(typeof number);

//Concatena numeros y cadenas normalmente (sumó los números)
console.log(number + numero + nota);

//boolean - booleanos
let meQuiere = true; //false
console.log("boolean", meQuiere);
console.log(typeof meQuiere);
console.log("typeof boolean", typeof meQuiere);

//Le podemos dar más de un argumento
//puedo hacer que imprima una cosa detrás de otra
console.log("este numero es:", 100);

//undefined
let porDefinir;
//Cuando está acompañado por algo más que imprimir, al imprimir el tipo de dato lo hace entre ""
console.log("no esta definido", porDefinir);
console.log("tipo undefined:", typeof porDefinir);

console.log("Numero: ", typeof numero);

//null
let noHayNada = null;
console.log("este es un null:", noHayNada);
console.log("tipo null:", typeof noHayNada);

let anio = 2024;
console.log("año1: ", anio);
//podemos darle un nuevo valor;
anio = 2025;
console.log("año2: ", anio);
//Que una variable al cambiar su valor, puede cambiar también de tipo de dato
anio = "DOS MIL VEINTICINCO";
console.log("año3: ", anio);
