import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [ListComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        IonicModule
    ]
})
export class UsersModule { }
