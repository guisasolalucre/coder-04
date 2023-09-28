import { Course } from "../Course/Course";

export interface IStudent {
    id: string;
    name: string;
    surname: string;
    dob: Date;
    avgNote: number;
    email: string;
    courses: Array<Course>;

    
}