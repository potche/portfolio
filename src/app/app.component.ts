import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  private otro: number = 123;
  public title: string = 'portfolio';

  public prueba(): string {
    const a: string = 'perrito';
    console.log(this.otro);
    return a;
  }

  flecha = () =>{

  };
}
