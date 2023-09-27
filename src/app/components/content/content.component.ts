import { Component } from '@angular/core';
import { Alumno } from '../../model';
import { alumnos } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public readonly passNote: number = 6;
  public alumnosList: Array<Alumno> = alumnos;
  public listToShow: Array<Alumno> = [];
  public passFlag: number = 0;
  public mostrarTodos: boolean = true;

  constructor() { }

  getAprobados(): Array<Alumno> {
    return this.alumnosList.filter((alumno: Alumno) => alumno.avgNote >= this.passNote)
  }

  getDesaprobados(): Array<Alumno> {
    return this.alumnosList.filter((alumno: Alumno) => alumno.avgNote < this.passNote)
  }

  showList(): Array<Alumno> {
      switch (this.passFlag){
        case 1: 
          return this.getAprobados();
        case 2: 
          return this.getDesaprobados();
        default:
          return this.alumnosList;
      }
  }

  change(){
    if(this.passFlag === 1){
      this.passFlag = 2
    } else {
      this.passFlag = 1
    }    
  }

  sendEmail(event: string){
    alert("se envió mail a " + event)
  }


}
