import { Component } from '@angular/core';
import { Alumno } from '../alumno/Alumno';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public readonly passNote: number = 6;
  public alumnosList: Array<Alumno> = [];
  public mostrarTodos: boolean = true;

  constructor() { }

  ngOnInit() {

    let alumno1 = new Alumno("36720239", "Lucrecia", "Guisasola", new Date(1992, 8, 18), 9.98);
    let alumno2 = new Alumno("11111111", "CLARK", "KENT", new Date(1987, 0, 1), 10);
    let alumno3 = new Alumno("22222222", "bruce", "wayne", new Date(1990, 3, 25), 4);
    let alumno4 = new Alumno("33333333", "seÑoriTA", "MiEl", new Date(1999, 10, 7), 6.5);
    let alumno5 = new Alumno("44444444", "tony", "stark", new Date(1989, 6, 17), 5.5);
    let alumno6 = new Alumno("55555555", "PETER", "PARKER", new Date(2003, 2, 30), 7.75);

    this.alumnosList.push(alumno1, alumno2, alumno3, alumno4, alumno5, alumno6)
  }

  getAprobados(): Array<Alumno>{
    return this.alumnosList.filter((alumno) => alumno.avgNote >= this.passNote)
  }

  getDesaprobados(): Array<Alumno> {
    return this.alumnosList.filter((alumno) => alumno.avgNote < this.passNote)
  }


}
