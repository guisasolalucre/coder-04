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
  public list: Array<Alumno> = [];
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

    if (this.mostrarTodos) {
      switch (this.passFlag){
        case 0: { 
          this.list = this.alumnosList; 
          break;};
        case 1: { 
          this.list = this.getAprobados();
          break;};
        case 2: { 
          this.list = this.getDesaprobados(); 
          break;}
      }
    }
    return this.list;
  }

  change(){
    if(this.passFlag === 1){
      this.passFlag = 2
    } else {
      this.passFlag = 1
    }    
  }


}
