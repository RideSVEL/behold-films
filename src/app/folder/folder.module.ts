import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import {ConsoleComponent} from './console/console.component';
import {MenuModule} from '../menu/menu.module';



@NgModule({
  declarations: [ConsoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MenuModule
  ],
})
export class FolderPageModule {}
