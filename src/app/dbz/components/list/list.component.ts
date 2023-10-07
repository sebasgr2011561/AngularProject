import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  //padre a hijo
  @Input() charcterList: Character[]=[];

  //hijo al padre
  @Output() statusEdit = new EventEmitter<string>();

  ngOnInit(): void {
    this.statusEdit.emit("Hola");
  }
}
