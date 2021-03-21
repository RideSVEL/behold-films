import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule, IonNav} from '@ionic/angular';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [MenuComponent, ListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [IonNav]
})
export class MenuModule {
}
