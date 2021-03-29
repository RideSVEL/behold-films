import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends ApiService {

  countNewReviews = 0;

  constructor(client: HttpClient) {
    super(client);
  }

  public count(): Observable<number> {
    return this.get('review/count');
  }

  updateCounterNewReviews(): void {
    this.countNew().subscribe(data => this.countNewReviews = data);
  }

  public countNew(): Observable<number> {
    return this.get('review/count?view=0');
  }

  findNewReviews(): Observable<Review[]> {
    return this.get('review/new');
  }

  findArchiveReviews(): Observable<Review[]> {
    return this.get('review/archive');
  }

  deleteReview(review: Review) {
    return this.post('review/delete', review);
  }

  update(review: Review) {
    return this.post('review', review);
  }


}
