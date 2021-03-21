import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReviewsComponent} from './reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: ReviewsComponent
  },
  {
    path: 'archive',
    component: ReviewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReviewsRoutingModule {}
