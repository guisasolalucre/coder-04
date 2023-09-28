import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  passFlag: number = 0;

  @Input()
  showAll: boolean = true;

  @Output()
  passFlagChange = new EventEmitter<number>();

  @Output()
  showAllChange = new EventEmitter<boolean>();

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
    this.showAllChange.emit(this.showAll);
    this.passFlagChange.emit(this.passFlag);
  }

}
