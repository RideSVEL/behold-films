import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

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
