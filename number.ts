let interMiami: number = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo: string = ''
    if (juegaMessi) {
        equipo1 += messi
        motivo = 'Por que juega messi'
    }
    if (equipo1 > equipo2) console.log(`Gana inter Miami${motivo}`)
    if (equipo1 == equipo2) console.log('Empatan')
    if (equipo1 < equipo2) console.log('Gana Fc Dallas')
}

jugar(interMiami, fcDallas, juegaMessi)