import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {IonicModule} from '@ionic/angular';
import {UserItemComponent} from './user-item/user-item.component';
import {UserSearchComponent} from './user-search/user-search.component';



@NgModule({
    declarations: [ListComponent, UserItemComponent, UserSearchComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        IonicModule
    ]
})
export class UsersModule { }
