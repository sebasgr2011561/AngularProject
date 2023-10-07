import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string = 'hola mundo feo';
  public numero: number = 10;

  //metodo dentro de la clase para incrementar el valor
  incrementar(value: number):void {
    this.numero +=value;
  }
  decrementar(value: number):void {
    if (this.numero>=1) {
    this.numero -=value;
    }
    else{
      console.log(`el numero es menor ${this.numero}`);
    }
  }
  reset():void{
     this.numero = 0;
  }

}


