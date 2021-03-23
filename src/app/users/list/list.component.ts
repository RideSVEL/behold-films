import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  readonly startId = 0;
  disableLoadData = false;

  users: User[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.getAdditionalUsersToArray(this.startId);
  }

  getAdditionalUsersToArray(id: number): void {
    this.userService.findAllUsersById(id).subscribe(data => {
      this.users = this.users.concat(data);
      if (data.length < 10) {
        this.disableLoadData = true;
      }
    });
  }

  loadData($event: any) {
    setTimeout(() => {
      this.getAdditionalUsersToArray(this.users[this.users.length - 1].id);
      $event.target.complete();

      if (this.disableLoadData) {
        $event.target.disabled = true;
      }
    }, 500);
  }

  doRefresh($event: any) {
    this.getAdditionalUsersToArray(this.users[this.users.length - 1].id);
    setTimeout(() => {
      $event.target.complete();
    }, 500);
  }
}
