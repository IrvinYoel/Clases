// como calcularian el precio de venta de algo, si a uds les cuesta 20
// porcentaje de ganancia
// igv
//costo + 15% + igv (18%)

//function nombreFuncion(recibir parametros)
/*
function calcularPrecio (costo){
  let ganancia = 1.15;
  let igv = 1.18;
  let total = costo * ganancia * igv;
  console.log(`precio total es: ${total}`);
}


calcularPrecio(100);
calcularPrecio(45);
*/

//solamente se encargue de la parte principal
function calcularViaje(pasaje, comida, estadia, dias) {
  let costoDiario = comida + estadia;
  let costoTotalDias = costoDiario * dias;
  let costoTotal = costoTotalDias + pasaje;
  // retornar un valor
  return costoTotal;
}

let resultadoViaje = calcularViaje(100, 60, 50, 5);

console.log(resultadoViaje);

//separar varias cosas en funciones
//Single Responsability, una sola responsabilidad...

//Arroz chaufa
//picar vegetales
//granear arrox
//freir pollo, huevo

function picarVegetales() {
  console.log("... picando vegetales...");
}

function granearArroz() {
  console.log("... graneando arroz...");
}

function freirPolloYHuevo() {
  console.log("... freir pollo huevo...");
}

//HOISTING, las function se consideran como si estuviera en el top
// prepararArrozChaufa();

function prepararArrozChaufa() {
  picarVegetales();
  granearArroz();
  freirPolloYHuevo();
}

prepararArrozChaufa();
