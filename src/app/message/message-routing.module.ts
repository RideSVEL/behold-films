import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MessageComponent} from './message/message.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sending',
    pathMatch: 'full'
  },
  {
    path: 'sending',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MessageRoutingModule {}
