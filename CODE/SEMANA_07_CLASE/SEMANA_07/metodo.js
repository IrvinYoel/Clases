let productos = [
  { nombre: "iPhone 13", precio: 999 },
  { nombre: "Samsung Galaxy S21", precio: 799 },
  { nombre: "MacBook Pro 2021", precio: 1299 },
  { nombre: "PlayStation 5", precio: 499 },
  { nombre: "Xbox Series X", precio: 499 },
  { nombre: "Canon EOS R5", precio: 3899 },
  { nombre: "Sony A7 III", precio: 1999 },
  { nombre: "DJI Mavic Air 2", precio: 799 },
  { nombre: "Samsung QLED Q90T", precio: 1499 },
  { nombre: "Bose QuietComfort 45", precio: 329 },
];

// console.log(productos[0].precio);

let numeros = [1, 2, 3, 4, 5, 19];

let numerosGrandes = numeros.filter(function (numero) {
  return numero > 3;
});

console.log("Números Grandes: ", numerosGrandes);

//forEach no returna nada - indefinido, serviría para imprimir algo dentro
let porCadaNumero = numeros.forEach(function (num) {
  console.log(num);
});

// num = porCadaNumero();

// console.log(num);
let productosMasBaratos = productos.filter(function (prod) {
  return prod.precio < 800;
});

console.table(productosMasBaratos);

//1. (No todo) pero podemos pensar en general como que todo es un objeto en JS
//2. al ser objeto todo, esto trae cosas útiles y muchas veces no tenemos que implementar la lógica de 0 para obtener un resultado que necesitemos, no tenemos que reinventar la rueda
