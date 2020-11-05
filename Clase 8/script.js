let canvas = document.querySelector("#funciones");
let ctx = canvas.getContext("2d");

// Vamos  a hacer funciones
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

for (let xC = 50; xC <= 350; xC += 100) {
  rectangulo(xC, 0, 50, 50);
  for(let yC = 0; yC <= 400; yC += 100){
    rectangulo(xC, yC, 50, 50);
  }
}

for (let xC = 0; xC <= 400; xC += 100) {
    rectangulo(xC, 50, 50, 50);
    for(let yC = 50; yC <= 350; yC += 100){
        rectangulo(xC, yC, 50, 50);
      }
  }
