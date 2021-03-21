import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsoleComponent} from './console/console.component';


const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
    children: [
      {
        path: '',
        redirectTo: 'statistics',
        pathMatch: 'full'
      },
      {
        path: 'statistics',
        loadChildren: (): any => import('../statistic/statistic.module').then((m) => m.StatisticModule)
      },
      {
        path: 'users',
        loadChildren: (): any => import('../users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'message',
        loadChildren: (): any => import('../message/message.module').then((m) => m.MessageModule)
      },
      {
        path: 'review',
        loadChildren: (): any => import('../reviews/reviews.module').then((m) => m.ReviewsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
