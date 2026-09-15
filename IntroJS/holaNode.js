console.log("Hola mundo Node");

let edad1 = 30;
let edad2 = 25;

console.log("edad promedia: ");
console.log((edad1 + edad2) / 2);

console.log("--------Medir procesos--------");

console.time("Mi proceso");
for(i=0; i<100000; i++){
    console.timeEnd("Mi proceso");
}