"use strict";
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'Por que juega messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana Fc Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
