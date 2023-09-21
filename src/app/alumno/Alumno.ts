import { IAlumno } from "./IAlumno"

export class Alumno implements IAlumno{

    constructor(
        public id: string, 
        public name: string, 
        public surname: string, 
        public dob: Date,
        public avgNote: number){
    }

}

/* ----- INSTANCIAS DE ALUMNO ----- */
let alumno1 = new Alumno("36720239", "Lucrecia", "Guisasola", new Date(1992, 9, 18), 9.98)
let alumno2 = new Alumno("11111111", "Clark", "Kent", new Date(1987, 1, 1), 4)
let alumno3 = new Alumno("22222222", "Bruce", "Wayne", new Date(1990, 4, 25), 10)
let alumno4 = new Alumno("33333333", "Señorita", "Miel", new Date(1997, 11, 7), 5.5)

let alumnosList: Array<Alumno> = [];

alumnosList.push(alumno1, alumno2, alumno3, alumno4)