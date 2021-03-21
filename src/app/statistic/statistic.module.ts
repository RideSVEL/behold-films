import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandsComponent} from './commands/commands.component';
import {IonicModule} from '@ionic/angular';
import {StatisticRoutingModule} from './statistic-routing.module';



@NgModule({
  declarations: [CommandsComponent],
  imports: [
    CommonModule,
    IonicModule,
    StatisticRoutingModule,
  ]
})
export class StatisticModule { }
