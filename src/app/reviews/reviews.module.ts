import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewsRoutingModule} from './reviews-routing.module';
import {ReviewsComponent} from './reviews/reviews.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    IonicModule
  ]
})
export class ReviewsModule { }
