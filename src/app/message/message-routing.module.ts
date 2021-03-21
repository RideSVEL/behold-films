import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MessageComponent} from './message/message.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: MessageComponent
  },
  {
    path: ':id',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MessageRoutingModule {}
