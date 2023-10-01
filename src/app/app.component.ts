import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-coder';

  public passFlag: number = 0;
  public showAll: boolean = true;
  public showForm: boolean = false;
}
