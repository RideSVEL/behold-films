import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommandsComponent} from './commands/commands.component';

const routes: Routes = [
  {
    path: '',
    component: CommandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class StatisticRoutingModule {}
