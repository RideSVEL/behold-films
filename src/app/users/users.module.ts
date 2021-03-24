import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {IonicModule} from '@ionic/angular';
import {UserItemComponent} from './user-item/user-item.component';



@NgModule({
    declarations: [ListComponent, UserItemComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        IonicModule
    ]
})
export class UsersModule { }
