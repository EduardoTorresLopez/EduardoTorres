
function opera(numero1, numero2, operacion){
    let resultado = 0;
    switch(operacion){
        case "SUMA":
          resultado = numero1 + numero2;
          break;
        case "RESTA":
            resultado = numero1 - numero2;
            break;
        case "MULTIPLICACION":
          resultado = numero1 * numero2;
          break;
        case "DIVICION":
          resultado = numero1 / numero2;
          break;
      } return resultado;
};

function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);

    let operacion = document.getElementById("op").value;
    
    let resultado = document.getElementById("resul");
    resultado.value = opera(numero1, numero2, operacion);
}


function Ver(img,imagen){
    switch(img){
        case 1:
          imagen.src="RECURSOS/1.png";
          break;
        case 2:
            imagen.src="RECURSOS/2.png";
            break;
        case 3:
            imagen.src="RECURSOS/3.png";
          break;
        case 4:
            imagen.src="RECURSOS/4.png";
          break;
        case 5:
            imagen.src="RECURSOS/5.png";
          break;
      }
};

function VerImagen(){
    let img = parseInt(document.getElementById("img").value);
    let imagen = document.getElementById("imagen");
    console.log(img);
    Ver(img,imagen);
}



let genera = document.getElementById("genera")
      let numero = document.getElementById("numtab")
      let lienzo = document.getElementById("tab")
    
      genera.addEventListener("click", () => {
        for(let i = 1; i<=10; i++) {
          lienzo.innerHTML += `${numero.value} * ${i} = ${numero.value*i} <br />`
        }
      })