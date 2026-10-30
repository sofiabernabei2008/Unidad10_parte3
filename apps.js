let listaDeSuper = [];
listaDeSuper[0] = "sal";
listaDeSuper[1] = "oreos";
listaDeSuper[2] = "rumbas";

listaDeSuper.push("galletitas surtidas", "todys");
listaDeSuper.unshift("chocolinas", "cerealitas");
console.log(listaDeSuper.length)
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();
console.log(listaDeSuper.length)
console.log(listaDeSuper);
console.log("La cantidad de elementos es: " + listaDeSuper.length);
console.log("El primer elemento es: " + listaDeSuper[0]);
let ultimoElemento = listaDeSuper.length - 1;
console.log("El último elemento es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

function logItems(arreglo) {
  arreglo.forEach(function(elemento) {
    console.log(elemento);
  });
}

let accesorios = ["cable USB-C", "auriculares"];
console.log("Lista de Súper");
logItems(listaDeSuper);
console.log("Lista de accesorios");
logItems(accesorios);