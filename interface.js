"use strict";
let dev = {
    nombre: 'Edgar Steinberg',
    tecnologias: ['HTML', 'CSS', 'JS'],
    tomarMate: true
};
let dev1 = {
    nombre: 'Sergi Code',
    tecnologias: ['REACT', 'JS', 'TYPESCRIPT'],
    tomarMate: null
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev);
