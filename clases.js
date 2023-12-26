"use strict";
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`La peliculas ${this.nombre} esta siendo proyectada`);
    }
}
const pelicula = new Pelicula('Barbie', ['Barbien', 'Ken'], ['Margot Robbie', 'Rya Gosling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Strauss'], ['Cillian Murphy']);
pelicula.proyectarEnCine();
console.log(pelicula.nombre);
console.log(pelicula);
