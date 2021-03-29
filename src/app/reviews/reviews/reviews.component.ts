import {Component, OnInit} from '@angular/core';
import {Review} from '../../model/review';
import {ReviewsService} from '../../services/reviews.service';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [];
  newReviews = false;
  summaryCount = 0;

  constructor(public reviewService: ReviewsService, private toastController: ToastController,
              public alertController: AlertController) {
  }

  ngOnInit() {
    this.updateOnNewReviews();
  }

  ionViewWillEnter() {
    this.updateAllCounts();
  }

  segmentChanged($event: any) {
    this.reviews = [];
    if ($event.detail.value === 'archive') {
      this.updateOnArchiveReviews();
    } else if ($event.detail.value === 'new') {
      this.updateOnNewReviews();
    }
  }

  updateOnNewReviews(): void {
    this.reviewService.findNewReviews().subscribe(data => {
      this.reviews = data;
      this.newReviews = true;
    });
  }

  updateOnArchiveReviews(): void {
    this.reviewService.findArchiveReviews().subscribe(data => {
      this.reviews = data;
      this.newReviews = false;
    });
  }

  getReviewDate(review: Review) {
    return new Date(review.date).toDateString();
  }

  getReviewTime(review: Review) {
    const date = new Date(review.date);
    let minutes = date.getMinutes().toString();
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    let hours = date.getHours().toString();
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    return hours + ':' + minutes;
  }

  showReviewInfo() {
    console.log('click');
  }

  readReview(review: Review) {
    review.view = 1;
    this.reviewService.update(review).subscribe(() => {
      this.reviews.splice(this.reviews.indexOf(review), 1);
    });
  }

  unreadReview(review: Review) {
    review.view = 0;
    this.reviewService.update(review).subscribe(() => {
      this.reviews.splice(this.reviews.indexOf(review), 1);
    });
  }

  deleteReview(review: Review) {
    this.reviewService.deleteReview(review).subscribe(() => {
      this.showSuccessToast().then(() => this.reviews.splice(this.reviews.indexOf(review), 1));
      this.updateAllCounts();
    });
  }

  updateCounter() {
    this.reviewService.count().subscribe(data => this.summaryCount = data);
  }

  private updateAllCounts() {
    this.updateCounter();
    this.reviewService.updateCounterNewReviews();
  }

  private async showSuccessToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Review delete successfully',
      duration: 1000,
      color: 'light'
    });
    await toast.present();
  }

  doRefresh($event: any) {
    this.updateAllCounts();
    this.newReviews ? this.updateOnNewReviews() : this.updateOnArchiveReviews();
    setTimeout(() => {
      $event.target.complete();
    }, 600);
  }

  async presentAlertConfirm(review: Review) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm deleting',
      message: 'Do you confirm the removal of the review? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteReview(review);
          }
        }
      ]
    });

    await alert.present();
  }

}
