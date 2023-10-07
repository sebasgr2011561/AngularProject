import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ['Acuaman','Iron Man','Super Man','Thor','grut']
  public deletedhero? :string;

  removeLasteHero():void{
    this.deletedhero = this.heroNames.pop();

  }
}
