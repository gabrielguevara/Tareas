let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  astronauta:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tomate.svg/200px-Tomate.svg.png",
  yoda: "https://images.vexels.com/media/users/3/185791/isolated/preview/27c69d1413163918103a032d4951213e-kawaii-gui--o-de-aguacate-by-vexels.png",
  soccerBall:
    "https://ejercicios-rtb-html-css-js.neocities.org/mod2/img/homer-simpson.svg",
};
let x = 50;
let y = 300;
let x1 = 50;
let y1 = 300;
let dX = 5;
let dY = -8;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;

function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x1 = x1 + dX;
  y1 = y1 + dY;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.astronauta, x, y, 50, 50);
  ctx.drawImage(images.soccerBall, x1, y1, 100, 100);
  ctx.drawImage(images.yoda, 200, 200, 50, 50);
}
// La variable images contiene las imagenes cargadas
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);