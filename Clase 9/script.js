
let canvas = document.querySelector("#canvas1");
let ctx = canvas.getContext("2d");
function circulo(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}
// Eventos en javascript
// event listener
// Event listener para cuando se haga click en el canvas
// el evento se puede pasar como un argumento a la función que se ejecuta al hacer click


// Para borrar todo:
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// eventos al presionar una tecla
// al inicio creo un circulo en el centro
let x = 350;
let y = 350;
let puntaje = 0;
ctx.fillStyle = "blue";
//circulo(x, y, 25);
rectangulo(x, y, 100,20)
document.onkeydown = function (evento) {
  
  if (evento.key == "d") {
    clear();
    x = x + 10;
    rectangulo(x, y, 100,20);
  }
  if (evento.key == "a") {
    clear();
    x = x - 10;
    rectangulo(x, y, 100,20);
  }
  if ((y < 15 && y > 0) || (y > 385 && y < 400) || (x < 15 && x > 0) || (x > 385 && y < 400)) {
    puntaje += 1;
    document.querySelector("#puntaje").innerHTML = puntaje;
  }
};
