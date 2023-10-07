import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent{
  public nameCharacterDBZ: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'goku',
    power: 9500
  }, {
    name: 'vegeta',
    power: 7500
  }];

  public other: Character[] = [{
    name: 'Truynks',
    power: 5000
  }];

  hello: string = "";


  test(event:any){
    this.hello = event;
  }
}
