import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public charcterList: Character[]=[{
    name:'Truynks',
    power:5000
  }];
}
