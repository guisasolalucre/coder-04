import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  // definí todos estos booleanos y funciones change 
  // porque quiero usar router y angular material
  // pero todavia no lo vimos y no se usarlos

  @Input()
  passFlag: number = 0;

  @Input()
  showAll: boolean = true;

  @Input()
  showForm: boolean = false;

  @Output()
  passFlagChange = new EventEmitter<number>();

  @Output()
  showAllChange = new EventEmitter<boolean>();

  @Output()
  showFormChange = new EventEmitter<boolean>();

  constructor(){}

  changeFlag(){
    if(this.passFlag === 1){
      this.passFlag = 2
    } else {
      this.passFlag = 1
    }
    this.passFlagChange.emit(this.passFlag)
  }

  changeShow(){
    this.showAll = !this.showAll;
    this.passFlag = 0;
    this.showForm = false;
    this.showAllChange.emit(this.showAll);
    this.passFlagChange.emit(this.passFlag);
    this.showFormChange.emit(this.showForm); 
  }

  changeForm(){
    this.showAll = false;
    this.passFlag = 0;
    this.showForm = !this.showForm;
    this.showAllChange.emit(this.showAll);
    this.passFlagChange.emit(this.passFlag); 
    this.showFormChange.emit(this.showForm);    
  }

}
