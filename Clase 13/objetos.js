// Los objetos se pueden crear directamente
let estudiante1 = {
    // PROPIEDADES
    nombre: "Gabriel",
    edad: 16,
    curso: "Terza Liceo",
    notas: [9,8,10,5],
    // MÉTODOS
    añadirNota: function (nota) {
      this.notas.push (nota);
    },
    mostrarInformación: function () {
      console.log(this.nombre, this.edad, this.curso);
    },
    promedio: function () {
        let suma=0;
        for(nota of this.notas) suma+=nota;
        return suma/this.notas.length;
    },
  };
  // O se pueden crear usando una FACTORY FUNCTION.
  // La función siguiente se llama FACTORY FUNCTION, y su tarea es crear objetos con
  // las propiedades deseadas. La ventaja que tiene es que se puede utilizar muchas veces para generar muchos objetos de la misma clase.
  function estudiante(nombre, edad, curso, notas) {
    // PROPIEDADES
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.notas = notas;
    // METODOS
    (this.añadirNota= function (nota) {
        this.notas.push (nota);
      }),
      (this.mostrarInformación= function () {
        console.log(this.nombre, this.edad, this.curso);
      }),
      (this.promedio= function () {
          let suma=0;
          for(nota of this.notas) suma+=nota;
          return suma/this.notas.length;
      });
  }
  let estudiante2 = new estudiante ( "Luigi", 17, "Terza Liceo",[4,6,8,5] );
  let estudiante3 = new estudiante ( "Natali", 17, "Terza Liceo",[4,4,4,6] );


let carro1 = {
    // PROPIEDADES
    marca: "Renault",
    modelo: "Logan",
    año: 2016,
    kilometraje: 50000 ,
    kpg: 46,
    // MÉTODOS
    añadirRecorrido : function (km) {
      this.kilometraje += km;
    },
    calcularConsumo : function (recorrido) {
      return recorrido/this.kpg;
    },
    mostrarInformacion : function () {
        console.log(this.marca, this.modelo, this.año, this.kilometraje);
    },
  };
  
  function carros(marca, modelo, año, kilometraje,kpg) {
    // PROPIEDADES
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
    this.kpg = kpg;
    // METODOS
    (this.añadirRecorrido = function (km) {
        this.kilometraje += km;
      }),
      (this.calcularConsumo = function (recorrido) {
        return recorrido/this.kpg;
      }),
      (this.mostrarInformacion= function () {
          console.log(this.marca, this.modelo, this.año, this.kilometraje)
      });
    }
  let carro2 = new carros ( "chevrolet", "spark", 2010, 30000, 50 );
  let carro3 = new carros ( "Ford", "Fiesta", 2015, 60000, 57);

  