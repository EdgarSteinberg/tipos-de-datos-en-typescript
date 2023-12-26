interface Developer {
    nombre: string,
    tecnologias: string[],
    tomarMate: boolean | null
}

let dev: Developer = {
    nombre: 'Edgar Steinberg',
    tecnologias : ['HTML','CSS','JS'],
    tomarMate : true
}

let dev1: Developer = {
    nombre : 'Sergi Code',
    tecnologias : ['REACT','JS','TYPESCRIPT'],
    tomarMate: null
}

function enviarCurriculum( programador : Developer){
    console.log(`Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev)