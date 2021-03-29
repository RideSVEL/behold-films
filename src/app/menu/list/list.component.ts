import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReviewsService} from '../../services/reviews.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private router: Router, public reviewService: ReviewsService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.reviewService.updateCounterNewReviews();
  }

  message() {
    console.log('click');
  }

  navigateToUsers(): void {
    this.router.navigate(['console/users']).then();
  }

  navigateToStatistics(): void {
    this.router.navigate(['console/statistics']).then();
  }

  navigateToMessages(): void {
    this.router.navigate(['console/message']).then();
  }

  navigateToReview(): void {
    this.router.navigate(['console/review']).then();
  }
}
