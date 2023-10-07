import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 45;


    public get capitalizedname() : string {
      return this.name.toUpperCase();
    }

    getHeroDescription():string{
      return `${this.name} - ${this.age}`
    }

    changeHero(value:string):void{
      this.name=value;
    }

    changeEdad(value:number):void{
      this.age=value;
    }
}
