import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    mainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
