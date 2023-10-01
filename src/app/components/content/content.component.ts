import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../model';
import { students } from '../../data/students'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  readonly passNote: number = 6;
  studentsList: Array<Student> = students;
  listToShow: Array<Student> = [];

  @Input()
  passFlag: number = 0;

  @Input()
  showAll: boolean = true;

  @Input()
  showForm: boolean = false;

  constructor() { }

  getPassed(): Array<Student> {
    return this.studentsList.filter((student: Student) => student.avgNote >= this.passNote)
  }

  getFailed(): Array<Student> {
    return this.studentsList.filter((student: Student) => student.avgNote < this.passNote)
  }

  showList(): Array<Student> {
      switch (this.passFlag){
        case 1: 
          return this.getPassed();
        case 2: 
          return this.getFailed();
        default:
          return this.studentsList;
      }
  }

  sendEmail(event: string){
    alert("se envió mail a " + event)
  }


}
