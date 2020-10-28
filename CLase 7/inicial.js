let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

//rectángulos
// ctx.fillStyle = "red";
// rgba> red, green, blue, alpha. alpha quiere decir transparencia
ctx.fillStyle = "yellow";
// ctx.strokeStyle = "black";
// Los dos primeros parámetros son las coordenadas x y y de la esquina superior izquierda del rectángulo. Los otros dos son el ancho y el alto del rectángulo


ctx.fillRect(50, 100, 100, 200);
ctx.stroke();

// Para borrar se usa clearRect

// paths: conjuntos de líneas
// Triangulo
ctx.fillStyle = ("black");
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(100, 400);
ctx.lineTo(150, 300);
ctx.stroke();

// Arco de circunferencia
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI, true);
ctx.moveTo(50, 100);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.fill();