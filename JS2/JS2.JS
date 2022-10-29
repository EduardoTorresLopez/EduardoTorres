/* Alumno:Eduardo Missael Torres LOPEZ
Matricula: #1895450*/
let equipos = ["Tigres", "Rayados", "America"];

console.log("tipo de dato", typeof equipos);
console.log("Datos", equipos);
console.log("Total Equipos", equipos.length);
console.log("Primer Equipo", equipos[0]);
console.log("Ultimo Equipo", equipos[-1]);
console.log("Ultimo", equipos[equipos.length - 1]);
equipos.push("necaxa");

console.log(equipos);
console.log("Ultimo", equipos.pop());

/* Definir Un Objeto */
let materias = ["Desarrollo web", "Contabilidad", "Costos"];

let grupo52 = {
  nombre: "grupo 52",
  semestre: "5to",
  carrera: "LTI",
  materias: materias,
};

console.log(grupo52);

console.log("nombre:", grupo52[0]);
console.log("nombre:", grupo52["nombre"]);
console.log("nombre:", grupo52.nombre);
console.log("Primer Materia:", grupo52.materias[0]);

grupo52.facultad = "FACPYA";

console.log(grupo52);

let carrera = prompt("Cual es tu carrera?")

document.write("<marquee>BUENAS TARDES:)</marquee>");

document.write(`<ul>    
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                    <li>LGRS</li>
</ul>`);

/* Ejemplo if */

let calif = 98;

if (calif >= 95) {
  console.log("Excelente");
} else {
  console.log("No Excelente");
}

/* switch */

let numero = 3;

switch (numero) {
  case 1:
    console.log("uno");
    break;
  case 2:
    console.log("dos");
    break;
  case 3:
    console.log("tres");
    break;
  case 4:
    console.log("cuatro");
    break;
  case 5:
    console.log("cinco");
    break;
  default:
    console.log("error");
    break;
};

/* Ciclo for */

for(let i=1; i<=100; i++){
    let codigo = "<marquee>" + i + "</marquee>"
    document.write(codigo);
};

for(let i=10;i>=1; i--){
    document.write(i + "<br>");
};