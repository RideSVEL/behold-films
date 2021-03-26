import {Component, OnInit} from '@angular/core';
import {Review} from '../../model/review';
import {ReviewsService} from '../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  newReviews = true;
  reviews: Review[] = [];

  constructor(private reviewService: ReviewsService) {
  }

  ngOnInit() {
    this.updateOnNewReviews();
  }

  segmentChanged($event: any) {
    if ($event.detail.value === 'archive') {
      this.updateOnArchiveReviews();
    } else if ($event.detail.value === 'new') {
      this.updateOnNewReviews();
    }
  }

  updateOnNewReviews(): void {
    this.reviewService.findNewReviews().subscribe(data => {
      this.reviews = data;
    });
  }

  updateOnArchiveReviews(): void {
    this.reviewService.findArchiveReviews().subscribe(data => {
      this.reviews = data;
    });
  }
}
