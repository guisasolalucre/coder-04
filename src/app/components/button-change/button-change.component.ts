import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-change',
  templateUrl: './button-change.component.html',
  styleUrls: ['./button-change.component.scss']
})
export class ButtonChangeComponent {

  @Input()
  color: string = "btn-secondary"

}
