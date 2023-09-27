import { IAlumno } from "./"

export class Alumno implements IAlumno{

    constructor(
        public id: string, 
        public name: string, 
        public surname: string, 
        public dob: Date,
        public avgNote: number,
        public email: string){
    }


}