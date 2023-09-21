import { Component } from '@angular/core';
import { Alumno } from '../alumno/Alumno';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  alumno1 = new Alumno("36720239", "Lucrecia", "Guisasola", new Date(1992, 9, 18), 9.98);
  alumno2 = new Alumno("11111111", "Clark", "Kent", new Date(1987, 1, 1), 4);
  alumno3 = new Alumno("22222222", "Bruce", "Wayne", new Date(1990, 4, 25), 10);
  alumno4 = new Alumno("33333333", "Señorita", "Miel", new Date(1997, 11, 7), 5.5);

  alumnosList: Array<Alumno> = []

  pass: number = 6;
  show: boolean = true;
  
  constructor(){
    this.alumnosList.push(this.alumno1, this.alumno2, this.alumno3, this.alumno4)
  }


}
