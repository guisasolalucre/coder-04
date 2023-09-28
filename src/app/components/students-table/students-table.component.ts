import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  list: Array<Student> = []
  
  @Input()
  passNote: number = 0;

  @Output() 
  send = new EventEmitter<string>();

  constructor(){ }

  sendEmail(student: Student): void{
    this.send.emit(student.email)
  }

}
