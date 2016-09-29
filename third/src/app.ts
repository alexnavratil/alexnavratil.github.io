//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'my-app',
  styles: [
    `
      .square {
        width: 100px;
        height: 100px;
      }
    `
    ],
  template: `
    <input type="text" [(ngModel)]="color"/>
    <hr/>
    <div class="square" [style.background]="color" *ngIf="color === 'red'"></div>
    <div class="square" [style.background]="color" *ngIf="color === 'green'"></div>
    <div class="square" [style.background]="color" *ngIf="color === 'blue'"></div>
  `,
})
export class App {
  private color:string;
  constructor() {
    this.color = 'red'
  }
}

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}