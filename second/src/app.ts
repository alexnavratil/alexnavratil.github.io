//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <input type="text" [(ngModel)]="name"/>
      <button (click)="add()">Add</button>
      <hr/>
      <ul>
        <li *ngFor="let item of list">{{ item }}</li>
      </ul>
    </div>
  `,
})
export class App {
  public name:string;
  public list: string[] = [];
  constructor() {
    this.name = 'First Element'
  }
  
  private add(): void {
    this.list.push(this.name);
    this.name="";
  }
}

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}