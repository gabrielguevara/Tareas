import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse

// console.log(images)
let balon = {
    //PROPIEDADES
    x:0,
    y:400,
    r:15,
    vX: 50,// px por segundo
    vY: -60,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 30, 70);
        ctx.fillStyle = "red"
        ctx.arc(this.x+15, this.y, this.r, Math.PI, 0);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = ("black");
        ctx.beginPath();
     ctx.moveTo(this.x, this.y+70);
     ctx.lineTo(this.x+15, this.y+90);
     ctx.lineTo(this.x+30, this.y+70);
     ctx.stroke();
     ctx.fill(); 
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

// Puedo crear un objeto apartir del objeto balon
let balon2 = Object.create(balon)
balon2.x = 0;
balon2.y = 0;
balon2.vX =50;
balon2.vY = 25;

let balon3 = Object.create(balon)
balon3.x = 190;
balon3.y = 190;
balon3.vX = 0;
balon3.vY = 0;

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    balon.dibujarse();
    balon2.dibujarse()
    balon3.dibujarse()
    balon.moverse();
    balon2.moverse();
    balon3.moverse();
}
run()