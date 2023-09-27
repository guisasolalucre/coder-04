import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from 'src/app/model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  list: Array<Alumno> = []
  
  @Input()
  passNote: number = 0;

  @Output() 
  send = new EventEmitter<string>();

  constructor(){ }

  sendEmail(alumno: Alumno): void{
    this.send.emit(alumno.email)
  }

}
