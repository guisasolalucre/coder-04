import { Course } from "../Course/Course";
import { IStudent } from "./IStudent"

export class Student implements IStudent{

    constructor(
        public id: string, 
        public active: boolean = true,
        public name: string, 
        public surname: string, 
        public dob: Date,
        public avgNote: number,
        public email: string,
        public courses: Array<Course> = [],
        ){}


}